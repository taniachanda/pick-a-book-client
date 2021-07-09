import React, { useContext, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../../App";
import Header from "./../Header/Header";
import "./CheckOut.css";

const CheckOut = () => {
  const [loggedInUser] = useContext(UserContext);
  const handleCheckOut = () => {
    const orderDetails = {
      ...loggedInUser,
      productName: pd?.name,
      productPrice: pd?.price,
      productAuthor: pd?.authorName,
      orderTime: new Date(),
    };
    fetch("https://gentle-beach-04354.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const { _id } = useParams();
  console.log(_id);
  const [product, setDetail] = useState([]);
  useEffect(() => {
    fetch("https://gentle-beach-04354.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);
  const pd = product.find((pdq) => pdq?._id === _id);
  console.log(pd?.name);

  return (
    <>
      <Header></Header>
      <div className="container">
        <h3 className="text-center m-5 heading">Checkout</h3>
        <Table striped bordered hover size="sm">
          <thead className="t-head">
            <tr>
              <th>#</th>
              <th>Cover</th>
              <th>Book</th>
              <th>Author</th>
              <th>Quantity</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                {" "}
                <img
                  style={{ height: "50px", width: "60px", margin: "0" }}
                  className=""
                  src={pd?.imageURL}
                  alt=""
                />
              </td>
              <td>{pd?.name}</td>
              <td>{pd?.authorName}</td>
              <td>1</td>
              <td>{pd?.price}</td>
            </tr>
          </tbody>
        </Table>
        <div className=" row justify-content-end mr-5">
          <Link to="/orderedBook">
            <Button onClick={handleCheckOut} className="b-btn" size="large">
              Check Out{" "}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
