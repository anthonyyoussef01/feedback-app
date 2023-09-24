import Card from "../Components/Shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>About This Project</h1>
				<p>This project was created to demonstrate the use of React, React Router, and Framer Motion.</p>
				<p>
					It is a simple feedback form that allows users to rate their experience with a company and leave a
					comment.
				</p>
				<p>
					<Link to="/">Click here to go back to the home page</Link>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;