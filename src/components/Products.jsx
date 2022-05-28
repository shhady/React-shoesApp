import React from "react";
// import { Link } from "react-router-dom";
import shoesAPI from "./API";
import Product from "./Product.jsx";
import "./style.css";
import axios from "axios";
class Products extends React.Component {
  state = {
    allProducts: [],
    newShoe: "",
    newPrice: "",
    newSize: "",
    newImg: "",
    isSpinning: false,
  };
  async componentDidMount() {
    const data = await shoesAPI.get("/shoes");
    this.setState({ allProducts: data.data }, () => {
      console.log(this.state.allProducts);
    });
  }

  paintShoes = () => {
    return this.state.allProducts.map(({ name, img, id, size, price }) => {
      return (
        <Product
          key={id}
          name={name}
          img={img}
          id={id}
          size={size}
          price={price}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      );
    });
  };

  handleCreate = async () => {
    const newShoe = {
      name: this.state.newShoe,
      img: this.state.newImg,
      price: this.state.newPrice,
      size: this.state.newSize,
    };
    try {
      const newPostedData = await shoesAPI.post("/shoes", newShoe);
      this.setState((prev) => {
        return {
          allProducts: [...prev.allProducts, newPostedData.data],
          newShoe: "",
          newImg: "",
          newPrice: "",
          newSize: "",
        };
      });
    } catch (e) {
      console.log(e);
    }
  };
  handleInputChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  handleDelete = async (id) => {
    // this.setState({ isSpinning: true });
    try {
      await axios.delete(
        `https://6291fd299d159855f0839283.mockapi.io/shoes/${id}`
      );
      this.setState((prev) => {
        const newShoesArr = prev.allProducts.filter((p) => p.id !== id);
        return { allProducts: newShoesArr };
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleUpdate = async (id, newName, newPriceUpdate, newSizeUpdate) => {
    this.setState({ isSpinning: true });
    const shoeToUpdate = this.state.allProducts.find((p) => p.id === id);
    const updatedShoe = {
      ...shoeToUpdate,
      name: newName,
      price: newPriceUpdate,
      size: newSizeUpdate,
    };
    const { data } = await axios.put(
      `https://6291fd299d159855f0839283.mockapi.io/shoes/${id}`,
      updatedShoe
    );
    this.setState((prev) => {
      return {
        allProducts: prev.allProducts.map((p) => {
          if (p.id === id) {
            return data;
          }
          return p;
        }),
        isSpinning: false,
      };
    });
  };
  render() {
    return (
      <div className="Container">
        <div className="inputs">
          <input
            id="newShoe"
            onChange={this.handleInputChange}
            value={this.state.newShoe}
            placeholder="name"
          />
          <input
            id="newImg"
            onChange={this.handleInputChange}
            value={this.state.newImg}
            placeholder="image"
          />
          <input
            id="newPrice"
            onChange={this.handleInputChange}
            value={this.state.newPrice}
            placeholder="price"
            type="number"
          />
          <input
            id="newSize"
            onChange={this.handleInputChange}
            value={this.state.newSize}
            placeholder="size"
            type="number"
          />
          <button onClick={this.handleCreate}>Create</button>
        </div>
        <div className="products-container">{this.paintShoes()}</div>
      </div>
    );
  }
}
export default Products;
