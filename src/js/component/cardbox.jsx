import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const CardBox = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={props.source} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
				<Button variant="primary">Button</Button>
			</Card.Body>
		</Card>
	);
};
export default CardBox;

CardBox.propTypes = {
	title: PropTypes.string
};
