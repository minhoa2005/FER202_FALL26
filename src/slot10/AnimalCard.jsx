import React from "react";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

export default function AnimalCard({ animal }) {
  const showMore = () => {
    if (animal.additional) {
      window.alert(
        (animal.additional.notes ? `Notes: ${animal.additional.notes}` : "") +
          (animal.additional.link ? `\nLink: ${animal.additional.link}` : ""),
      );
    }
  };
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Img src={animal.image} />
        <Card.Body>
          <Card.Title>{animal.name}</Card.Title>
          <Card.Text>
            <div>
              <p>{animal.scientificName}</p>
              <p>Diet: {animal.diet.join(", ")}</p>
              <p>Size: {animal.size} cm</p>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-between align-items-center">
            <Button onClick={showMore}>Show more</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

AnimalCard.propTypes = {
  animal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,

    additional: PropTypes.shape({
      link: PropTypes.string,
      notes: PropTypes.string,
    }),
  }).isRequired,
};
