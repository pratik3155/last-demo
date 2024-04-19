import React from "react";
export default function Secthree(props) {
  let { secthreedata } = props;
  const data = secthreedata[0];
  return (
    <section className="pt-5 shadow mb-5">
      <h4 className="display-4 fw-bold text-center mb-5 mt-5">
        {data.one} <span className="text-primary">{data.classified}</span>{" "}
      </h4>
      <div>
        {data.info.map(function (items) {
          return (
            <div className="row container mx-auto mb-4 mt-4">
              <div className="col-12 col-md-2 text-center mb-5 ">
                <span className="display-3 fw-bolder pt-4 d-block">
                  0<span className="text-primary">{items.id}</span>.
                </span>
              </div>
              <div className="col-12 col-md-10 ">
                <h3 className="h3 fw-bold">{items.heading}</h3>
                <p className="fs-5">{items.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
