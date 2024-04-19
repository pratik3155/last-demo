import React from "react";
import "./Test.css";
export default function Secone(props) {
  const { seconedata } = props;
  const data = seconedata[0];
  return (
    <section className="row container-fluid ps-0 pe-0 ms-0 me-0 ">
      <div className="col-4 col-md-3  col-lg-1 bg-primary d-flex justify-content-center border-end">
        <div className="bg-primary pt-4">
          <button
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#myOffCanvas"
            className="bg-primary border-0"
          >
            <a href="#" className="text-light border-0">
              <img src={data.menuicon} alt="" />
            </a>
          </button>
        </div>
        <div id="myOffCanvas" className="offcanvas offcanvas-start w-25">
          <div className="offcanvas-body">
            <button className=" bg-dark float-end" data-bs-dismiss="offcanvas">
              <i className="fa-solid fa-arrow-left bg-dark text-light"></i>
            </button>
            <ul className="nav flex-column mt-5">
              <li className="nav-item bg-primary ">
                <a href="#" className="nav-link text-light h6">
                  {data.nav[0]}
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link  h6">
                  {data.nav[1]}
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link  h6">
                  {data.nav[2]}
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link  h6">
                  {data.nav[3]}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-8 col-md-9  col-lg-11 ps-0 pe-0 border-start border-4 ">
        <div className="cta">
          <div className="d-flex justify-content-around">
            <div className=" pt-4 ">
              <img src={data.logo} alt="img" />
            </div>
            <div className="btn d-none d-md-block pt-4 ">
              <button className="rounded ps-5 pe-5  pt-2 pb-2 border-0  logbtn">
                <a href="" className="text-decoration-none fs-5  fw-light ">
                  Login
                </a>
              </button>
              <button className=" bg-transparent border-0 ms-5 me-5">
                <a
                  href=""
                  className="text-decoration-none text-light fs-5 fw-light"
                >
                  Sign Up
                </a>
              </button>
              <button className="bg-transparent border-0 ">
                <a href="" className="text-light">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="mt-5 pt-5 text-center ">
            <h1 className="text-center text-light display-1 fw-bold mt-5">
              {data.head_1}
            </h1>
            <p className="text-light text-center w-75 mx-auto d-none d-md-block">
              {data.p}
            </p>
            <button className="pt-3 pb-3 ps-5 pe-5 mt-5 mt-md-0 fw-light border-0 readmorebtn ">
              {data.btn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
