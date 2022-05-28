import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Home";
// import Header from "./Header";
import Products from "./Products";
// import Products from "./Products";
class MainApp extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/shoes" component={Products} />

          {/* <Route exact path="/Products" component={Shop} />
              <Route exact path="/Products/:id" component={ProductPage} />
              <Route path="*" component={NotFound} /> */}
        </Router>
        {/* <HomePage /> */}
      </div>
    );
  }
}
export default MainApp;

// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./Home";
// import Products from "./Products";
// import Header from "./Header";
// import ProductDetails from "./ProductDetails";
// import Data from "./store";

// class Exercise16_1 extends React.Component {
//   //   state = { titles: [] };

//   //   componentDidMount() {
//   //     const allTitles = Data.map((element) => element.title);
//   //     this.setState({ titles: allTitles }, () => {
//   //       console.log(this.state.titles);
//   //     });
//   //   }

//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <div>
//             <Header />

//             <Route path="/" exact component={HomePage} />
//             {/* <Route path="/products/" component={Products} /> */}
//             {/* <Route path="/products/:id" component={ProductDetails} /> */}
//           </div>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default Exercise16_1;
