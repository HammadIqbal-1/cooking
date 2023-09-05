import AllPages from "../src/Pages/AllPages";
import Catagory from "./Components/Catagory";
import { BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork style={{ textDecoration: "none", fontSize: "3rem" }} />
          <Logo to={"/"}>Deliciouss</Logo>
        </Nav>
        <Search />
        <Catagory />
        <AllPages />
      </BrowserRouter>
    </div>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 500;
  font-family: "lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-item:center svg {
    font-size: 2rem;
  }
`;

export default App;
