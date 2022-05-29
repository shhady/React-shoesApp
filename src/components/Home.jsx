import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="homePage">
        <h1 style={{ textAlign: "center", color: "white" }}>Nike</h1>
      </div>
      <div>
        <Link to="shoes">
          <button className="Home-BTN">Start Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

// const Home = () => {
//   return (
//     <div style={{ textAlign: "center", marginTop: "20%" }}>
//       <h1>This is a home page </h1>
//     </div>
//   );
// };

// export default Home;
