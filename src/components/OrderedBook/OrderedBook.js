import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "../Header/Header";
import { UserContext } from "./../../App";
import "./OrderedBook.css";

const OrderedBook = () => {
  const [orderBook, setOrderBook] = useState([]);
  const [loggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(
      "https://gentle-beach-04354.herokuapp.com/orders?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrderBook(data));
  });
  return (
    <>
      <Header></Header>
      <div className="container mt-5">
        <h3
          className="text-center mt-5"
          style={{ color: "#072f58", fontWeight: "bold" }}
        >
          Your Ordered Books
        </h3>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <Table responsive striped bordered hover>
            <thead className="t-head">
              <tr>
                <th>Book Name</th>
                <th>Coustomer Name</th>
                {/* <th>Email Address</th> */}
                <th>Date & Time</th>
                <th>Price</th>
              </tr>
            </thead>
            {orderBook.map((order) => {
              return (
                <tbody>
                  <tr>
                    <td className="o-text">{order.productName}</td>
                    <td className="o-text">{order.name}</td>
                    {/* <td>{order.email}</td> */}
                    <td>{order.orderTime}</td>
                    <td>{order.productPrice}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    </>
  );
};

export default OrderedBook;
