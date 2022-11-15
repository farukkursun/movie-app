import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState("");
  const { id } = useParams();

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetail;

  const ApiKey = "2ffb1cad850221d084465c45e6fd0612";
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  // const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}`;

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetail(res.data))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl]);

  return (
    <Card className="m-auto " style={{ width: "25rem" }}>
      <div>
        <Card.Img
          variant="top"
          src={poster_path ? baseImageUrl + poster_path : defaultImage}
        />
      </div>
      <div>
        <Card.Body>
          <Card.Title className="text-center">
            {" "}
            <h4>{title}</h4>{" "}
          </Card.Title>
          <Card.Text>
            <h6>Overviev</h6>
            {overview}
          </Card.Text>

          <ListGroup className="list-group-flush">
            <ListGroup.Item>{"Release date : " + release_date}</ListGroup.Item>
            <ListGroup.Item> {"Rate : " + vote_average}</ListGroup.Item>
            <ListGroup.Item>{"Total Vote : " + vote_count}</ListGroup.Item>
          </ListGroup>

          <Link className="ms-3" to={-1}>
            Go Back
          </Link>
        </Card.Body>
      </div>
    </Card>
  );
};

export default MovieDetail;
