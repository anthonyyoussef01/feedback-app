import { useContext } from "react";
import FeedbackContext from "./Context/FeedbackContext";

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);

	// Calculate the average rating
	let avg =
		feedback.reduce((accumulator, currentValue) => {
			// reduce in JS is like foldl in Racket
			return accumulator + currentValue.rating;
		}, 0) / feedback.length;
	// round to 1 decimal place and take off trailing 0s
	avg = avg.toFixed(1).replace(/\.?0+$/, "");

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
		</div>
	);
}

export default FeedbackStats;