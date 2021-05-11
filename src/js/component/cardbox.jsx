import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const CardBox = props => {
	return (
		<Card>
			<Card.Img variant="top" src={props.source} />
			<Card.Body className="d-flex column flex-wrap align-items-end">
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
				<Button variant="success">Button</Button>
			</Card.Body>
		</Card>
	);
};
export default CardBox;

CardBox.propTypes = {
	title: PropTypes.string,
	source: PropTypes.string,
	text: PropTypes.string
};
