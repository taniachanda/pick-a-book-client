import React from "react";
import Button from "@material-ui/core/Button";

const HeaderMain = () => {
  return (
    <div
      className="container-fluid px-0 hpme-page"
      style={{
        paddingTop: "30px",
        paddingBottom: "50px",
      }}
    >
      <div className="container mt-5">
        <div className="row gx-5 mb-5 row justify-content-end">
          <div
            className="col-md-6 d-flex mt-5 py-5 justify-content-center"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            // style={{ background: "#381F30" }}
          >
            <div>
              <h1
                className=""
                style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}
              >
                <span className="h-book"> Book</span> is simply the best way to{" "}
                <span> read.</span>
              </h1>
              <p className=" py-3 hm-text">
                Sell E-BookLorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nulla eget porta mi, sit amet volutpat ipsum. Sed in nisi
                non
              </p>
              <Button
                className="btn px-5 py-3 b-btn"
                variant="contained"
                size="large"
                color="secondary"
              >
                EXPLORE NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
