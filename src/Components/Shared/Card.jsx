import propTypes from 'prop-types';

/*
* This is just a styled component, meaning anything inside the <Card> tag will be styled with the card class
*/

function Card({children, reverse}) {
	// return reverse ? (
	// 		<div className="card reverse">{children}</div>
	// ) : (
	// 		<div className="card">{children}</div>
	// );
	return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

Card.defaultProps = {
	reverse: false,
}

Card.propTypes = {
	children: propTypes.node.isRequired,
	reverse: propTypes.bool,
}

export default Card;