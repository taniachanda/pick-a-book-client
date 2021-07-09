import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import Sidebar from "./../Sidebar/Sidebar";

const ManageBookList = () => {
  const [manageBooks, setManageBooks] = useState([]);

  useEffect(() => {
    fetch("https://gentle-beach-04354.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setManageBooks(data));
  }, []);

  const deleteBook = (id) => {
    console.log(id);
    fetch("https://gentle-beach-04354.herokuapp.com/deleteBook/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result, "deleted");
      });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-5">
          <h3
            className="text-center mt-5"
            style={{ color: "#072f58", fontWeight: "bold" }}
          >
            Manage Books List
          </h3>
          <div className="row d-flex justify-content-center align-items-center mt-3">
            <Table
              striped
              bordered
              hover
              style={{ height: "400px", width: "700px" }}
            >
              <thead className="t-head">
                <tr>
                  <th>Cover</th>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {manageBooks.map((mb) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          style={{ height: "50px", width: "60px", margin: "0" }}
                          className=""
                          src={mb.imageURL}
                          alt=""
                        />
                      </td>
                      <td style={{ fontWeight: "bold" }}>{mb.name}</td>
                      <td>{mb.authorName}</td>
                      <td>{mb.price}</td>
                      <td>
                        {" "}
                        <Fab
                          onClick={() => deleteBook(mb._id)}
                          size="small"
                          color="secondary"
                        >
                          <DeleteIcon />
                        </Fab>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBookList;
