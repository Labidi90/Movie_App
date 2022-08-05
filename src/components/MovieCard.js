import React from "react";
import { Card } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ moviep }) => {
  const { id, title, rating, posterURL, date, type, description, trailer } =
    moviep;
  // console.log(moviep);
  return (
    <div className="card-group">
      <Card className="card">
        <Card.Img
          className="card-img"
          variant="top"
          src={posterURL}
          style={{ height: "400px" }}
        />
        <Card.Body className="card-body">
          <Card.Text className="card-title">{title}</Card.Text>
          <Rating
            className="card-rate"
            ratingValue={rating}
            readonly={true} /* Available Props */
          />
          <Card.Text className="card-date">{date}</Card.Text>
          <Card.Text className="card-type">{type}</Card.Text>
          <Card.Text className="card-description">{description}</Card.Text>
          <Card.Text className="card-trailer">
            Watch the trailer :{" "}
            <Card.Link className="card-link">{trailer}</Card.Link>
          </Card.Text>
          <Link to={`/${id}`} className="btn btn-primary">
            More info
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
