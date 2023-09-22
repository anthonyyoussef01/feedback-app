import { useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";

function App() {
    const [feedbacks, setFeedbacks] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        setFeedbacks(
            feedbacks.filter((feedback) => feedback.id !== id )
        )
    };

    return (
        <>
            <Header />
            <div className={"container"}>
                <FeedbackList feedback={feedbacks} handleDelete={deleteFeedback} />
            </div>
        </>
    );
}

export default App;
