import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardGroup, Container, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import VideoSections from "../components/VideoSections";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState("");
  const [videoKey, setVideoKey] = useState('')
  const { id } = useParams();

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetail;

  const ApiKey = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}`;

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetail(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl,videoUrl]);

  return (
    <Container>
      <h1 className="text-center"> {title}</h1>
      {videoKey && <VideoSections videoKey={videoKey}/>}
      <CardGroup className="detay">
        <Card >
          <Card.Img
            variant="top"
            src={poster_path ? baseImageUrl + poster_path : defaultImage}
          />
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              <h6>Overviev</h6>
              {overview}
            </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                {"Release date : " + release_date}
              </ListGroup.Item>
              <ListGroup.Item> {"Rate : " + vote_average}</ListGroup.Item>
              <ListGroup.Item>{"Total Vote : " + vote_count}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Link className="ms-3 back" to={-1}>
           Go Back
          </Link>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default MovieDetail;

