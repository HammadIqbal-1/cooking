import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Popular() {
  // manage state
  const [look, setLook] = useState([]);

  const getPopular = async () => {
    const autH = process.env.REACT_APP_API_KEY;

    // set data in local storage
    const check = localStorage.getItem("popular");
    if (check) {
      setLook(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${autH}&NUMBER=9`,
        {
          headers: {
            Authorization: autH,
          },
        }
      );
      try {
        const data = await api.json();
        console.log(data);
        setLook(data.results);
        localStorage.setItem("popular", JSON.stringify(data.results)); // fix typo here
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            arrows: false,
            pagination: false,
            drag: "free", // fix typo here
            perPage: 4,
            gap: 20,
          }}
        >
          {look?.map((e) => {
            return (
              <SplideSlide key={e.id}>
                <Card>
                  <Link to={"/recipe/" + e.id}>
                    <div>
                      <p>{e.title}</p>
                      <img src={e.image} alt={e.title} />
                      <Gradient />
                    </div>
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 10rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 300px;
    max-height: 300px;
  }
  p {
    position: absolute;
    z-index: 10;
    bottom: 1%;
    trasnform: translate(-50%, 0%);
    color: white;
    text-align: center;
    font-weight: 300;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
    width: 100%;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 5));
`;

export default Popular;
