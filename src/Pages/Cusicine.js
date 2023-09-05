import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Cusicine() {
  // manage state
  const [cuisine, setCuisine] = useState([]);

  let prams = useParams();

  const getCusicine = async (name) => {
    const autH = process.env.REACT_APP_API_KEY;
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${autH}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCusicine(prams.type);
    // console.log(prams);
  }, [prams.type]);
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine?.map((e) => {
        return (
          <Card key={e.id}>
            <Link to={"/recipe/" + e.id}>
              <img src={e.image} alt={e.title} />
              <h5>{e.title}</h5>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background-color: #ccc;
  padding: 20px;
`;

const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  h5 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cusicine;
