import React from "react";
import "./Test.css";
export default function Secfive(props) {
  let { secfivedata } = props;
  let data = secfivedata[0];
  return (
    <section className="secf pt-5">
      <div className="row container mx-auto pt-5">
        <div className="col-12 col-md-3 ">
          <h4 className="h1 text-light">{data.contact}</h4>
        </div>
        {data.listdata.map(function (item) {
          return (
            <d className="col-12 col-md-3 pt-3">
              <a className="text-light fs-5 text-decoration-none ">
                <i className={item.icon}></i>
                {item.content}
              </a>
            </d>
          );
        })}
      </div>
      <div className="row container mx-auto mb-5 pb-5">
        <div className="col-12 col-md-6 pt-5">
          {data.formdata.map(function (item) {
            return (
              <div>
                <input
                  type={item.type}
                  placeholder={item.placeholder}
                  className=" mt-3 bg-transparent border-0 border-bottom pb-4 footform rounded-0 w-100 ps-3 "
                />
              </div>
            );
          })}
          <div className="row mt-5 pt-5">
            <div className="col-12 col-md-6">
              <button className=" rounded-pill ps-5 pe-5 pt-3 pb-3 border-0 sendbtn">
                Send
              </button>
            </div>
            <div className="col-12 col-md-6">
              <ul className="d-flex list-unstyled column-gap-3">
                {data.social.map(function (ele) {
                  return (
                    <li>
                      <a
                        href="#"
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle d-flex justify-content-center align-content-center  flex-wrap text-decoration-none socialanc"
                      >
                        <i className={ele.social}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div>
            <img
              src={data.mapimg}
              alt=""
              className=" object-fit-contain"
              style={{ width: "90%" }}
            />
          </div>
          <div>
            <label className="text-light h5">{data.newsletter}</label>
            <div className="d-md-flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="d-block w-75 pt-2 pb-2"
              />
              <span className=" d-inline-block ps-5 pe-5 pt-2 btnnew mt-3 mt-md-0">
                {data.SUBSCRIBE}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5 pt-5 border-top">
        <h4 className="text-center text-light fs-5  fw-light">
          {data.copyright}
        </h4>
      </div>
    </section>
  );
}
