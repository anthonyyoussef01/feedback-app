import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	}

	return (
		<header style={headerStyles}>
			<div className={"container"}>
				<h1>{text}</h1>
			</div>
		</header>
	);
}

Header.defaultProps = {
	text: "Feedback UI",
	bgColor: "rgba(0, 0, 0, 0.4)",
	textColor: "#ff6a95",

}

Header.prototypes = {
	text: PropTypes.string,     // use .isRequired to enforce text as string
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
}

export default Header;