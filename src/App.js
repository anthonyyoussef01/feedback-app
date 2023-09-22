import { useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";

function App() {
    const [feedbacks, setFeedbacks] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        // prompt user to confirm deletion of feedback
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setFeedbacks(
                feedbacks.filter((feedback) => feedback.id !== id)
            )
        }
    };

    return (
        <>
            <Header />
            <div className={"container"}>
                <FeedbackForm />
                <FeedbackStats feedback={feedbacks} />
                <FeedbackList feedback={feedbacks} handleDelete={deleteFeedback} />
            </div>
        </>
    );
}

export default App;
