import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        const response = await fetch("/feedback?_sort=rating&_order=desc");
        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })

        // most JSON APIs will return the new object with an ID automatically added
        //newFeedback.id = uuidv4();

        const data = await response.json()

        setFeedback([data, ...feedback])
    }

    const deleteFeedback = async (id) => {
        // prompt user to confirm deletion of feedback
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })

            setFeedback(
                feedback.filter((item) => item.id !== id)
            )
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem),
        })

        const data = await response.json();

        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
        );
        setFeedbackEdit({
            item: {},
            edit: false,
        });
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                isLoading,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
}

export default FeedbackContext;