import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Searched() {
  // manage states
  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const autH = process.env.REACT_APP_API_KEY;
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${autH}&query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  
  return (
    <Grid>
      {searched.map((e) => {
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

// styled comp
const Grid = styled.div`
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

// const GridItem = styled.div`
//   background-color: #ccc;
//   padding: 20px;
// `;
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

export default Searched;
