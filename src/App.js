import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./Components/AboutIconLink";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        // prompt user to confirm deletion of feedback
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setFeedback(
                feedback.filter((feedback) => feedback.id !== id)
            )
        }
    };

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    } />


                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    );
}

export default App;
