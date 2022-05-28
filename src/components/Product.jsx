import React, { Component } from "react";
import "./style.css";
export default class Product extends Component {
  state = { value: "", Price: "", inputshow: false, Size: "" };
  handleOnChange = ({ target }) => {
    this.setState({ value: target.value });
  };
  handleOnChangePrice = ({ target }) => {
    this.setState({ Price: target.value });
  };
  handleOnChangeSize = ({ target }) => {
    this.setState({ Size: target.value }, () => {
      console.log(this.state.Size);
    });
  };

  handleUpdateClick = () => {
    this.props.handleUpdate(
      this.props.id,
      this.state.value,
      this.state.Price,
      this.state.Size
    );
    this.setState({ value: "", inputshow: !this.state.inputshow });
  };
  render() {
    return (
      <div className="items">
        <div className="shoeCard" style={{ margin: "1rem" }}>
          <img className="mainImg" alt="#" src={this.props.img} />
          <div>
            <h3>{this.props.name}</h3>
            <h4>
              Size: {this.props.size} || Price: {this.props.price}$
            </h4>
            <div>
              {this.state.inputshow && (
                <input
                  onChange={this.handleOnChange}
                  value={this.state.value}
                  placeholder="change name"
                />
              )}
              {this.state.inputshow && (
                <input
                  onChange={this.handleOnChangePrice}
                  value={this.state.Price}
                  placeholder="change price"
                />
              )}
              {this.state.inputshow && (
                <input
                  onChange={this.handleOnChangeSize}
                  value={this.state.Size}
                  placeholder="change Size"
                />
              )}
            </div>
            <div>
              <button onClick={() => this.props.handleDelete(this.props.id)}>
                Delete
              </button>
              <button onClick={this.handleUpdateClick}>Update</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
