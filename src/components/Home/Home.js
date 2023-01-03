import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Includes/Card";
import "./Home.scss";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

// const apiKey = "d3ccacc37498c63c0097decf085283a4"
// const url = "https://api.themoviedb.org/3"

const imgURL = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const popular = "popular";
const toprated = "top_rated";
const nowplaying = "now_playing";

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgURL}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [popularmovies, setPopularMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPLaying] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchUpComing = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/${upcoming}?api_key=d3ccacc37598c63c0097decf085283a4`
      );

      setUpComingMovies(results);
      // console.log(results)
    };
    const fetchpopular = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/${popular}?api_key=d3ccacc37598c63c0097decf085283a4`
      );

      setPopularMovies(results);
      console.log(results);
    };
    const fetchtoprated = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/${toprated}?api_key=d3ccacc37598c63c0097decf085283a4`
      );

      setTopRated(results);
      // console.log(results)
    };
    const fetchnowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/${nowplaying}?api_key=d3ccacc37598c63c0097decf085283a4`
      );

      setNowPLaying(results);
      // console.log(results)
    };

    const fetchgenre = async () => {
      const {
        data: { genres },
      } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=d3ccacc37598c63c0097decf085283a4`
      );

      setGenre(genres);
      // console.log(genres)
    };

    fetchgenre();
    fetchUpComing();
    fetchpopular();
    fetchtoprated();
    fetchnowplaying();
  }, []);

  return (
    <>
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: popularmovies[0]
              ? `url(${`${imgURL}/${popularmovies[0].poster_path}`})`
              : "rgb(16 , 16, 16)",
          }}
        >
          {popularmovies[0] && <h1>{popularmovies[0].original_title}</h1> }
          {popularmovies[0] && <p>{popularmovies[0].overview}</p> }

          <div className="">
            <button><BiPlay/>Play</button>
            <button>list <AiOutlinePlus/></button>
          </div>
        </div>
        <Row title={"Upcoming Movies"} arr={upComingMovies} />
        <Row title={"Popular Movies"} arr={popularmovies} />
        <Row title={"Toprated Movies"} arr={topRated} />
        <Row title={"Nowplaying Movies"} arr={nowPlaying} />

        <div className="genreBox">
          {genre.map((item) => (
            <Link key={item.id} to={`/genre/${item.id}`} target="_blank">
              {item.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
