import React from "react";
import "./Test.css";
export default function Sectwo(props) {
  const { sectwodata } = props;
  const data = sectwodata[0];
  return (
    <section className="shadow mb-5 pb-5">
      <div className="row container mx-auto mt-5 mb-5 pt-5">
        <div className="col-12 col-md ">
          <div className="">
            <img
              src={data.sectwoimg}
              alt="about_img"
              className="about_img d-block mx-auto w-100 h-100 object-fit-contain"
            />
          </div>
        </div>
        <div className="col-12 col-md text-end pt-3 pt-md-0 pt-lg-5">
          <h2 className="display-4 fw-bold pt-lg-5">
            {data.about}
            <span className="text-primary"> {data.us}</span>
          </h2>
          <p className="fs-5 fw-light">{data.aboutp}</p>
          <button className="rounded-pill border-0  abbtn  pt-3 pb-3 ps-5 pe-5 ">
            {data.btntext}
          </button>
        </div>
      </div>
    </section>
  );
}
