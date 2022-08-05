import React from "react";
import { Card } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import "./MovieCard.css";

const MovieCard = ({ moviep }) => {
  console.log(moviep);
  return (
    <div className="card-group">
      <Card className="card">
        <Card.Img
          className="card-img"
          variant="top"
          src={moviep.posterURL}
          style={{ height: "400px" }}
        />
        <Card.Body className="card-body">
          <Card.Text className="card-title">{moviep.title}</Card.Text>
          <Rating
            className="card-rate"
            ratingValue={moviep.rating}
            readonly={true} /* Available Props */
          />
          <Card.Text className="card-date">{moviep.date}</Card.Text>
          <Card.Text className="card-type">{moviep.type}</Card.Text>
          <Card.Text className="card-description">
            {moviep.description}
          </Card.Text>
          <Card.Text className="card-trailer">
            Watch the trailer :{" "}
            <Card.Link className="card-link">{moviep.trailer}</Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
