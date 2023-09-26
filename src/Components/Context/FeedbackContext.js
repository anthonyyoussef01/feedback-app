import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
        const response = await fetch("http://localhost:5000/feedback?_sort=rating&_order=desc");
        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
    }

    const deleteFeedback = (id) => {
        // prompt user to confirm deletion of feedback
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setFeedback(
                feedback.filter((item) => item.id !== id)
            )
        }
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
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