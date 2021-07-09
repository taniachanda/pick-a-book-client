import React, { useEffect, useState } from "react";
import Books from "../Books/Books";
import "./Home.css";
// import Header from "./../Header/Header";
import toggle from "../../images/Dual Ball-1.9s-244px.gif";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://gentle-beach-04354.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="container-fluid book-collection">
      <h2
        className="text-center pt-5"
        style={{ color: "#cc0fc8", fontWeight: "bold" }}
      >
        Book Collection
      </h2>
      <div className="container" style={{ marginTop: "20px" }}>
        {books.length > 0 ? (
          <div className="row mb-5">
            {books.map((book) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <Books key={book._id} book={book}></Books>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <img src={toggle} alt="Pich-a-book" className="img-fluid" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
