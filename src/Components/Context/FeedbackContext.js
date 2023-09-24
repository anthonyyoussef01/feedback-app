import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            rating: 8
        },
        {
            id: 2,
            text: 'This is Feedback 2',
            rating: 9
        },
        {
            id: 3,
            text: 'The third feedback is here',
            rating: 10
        },
    ]);

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

    return (
        <FeedbackContext.Provider
            value={{
                feedback, deleteFeedback, addFeedback
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
}

export default FeedbackContext;