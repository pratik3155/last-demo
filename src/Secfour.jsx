import React from "react";
export default function Secfour(props) {
  let { secfourdata } = props;
  let data = secfourdata[0];
  return (
    <section className="mt-5 mb-5">
      <div className="pt-5 container ">
        <h4 className="display-4  fw-bold text-center">
          {data.secfourhead} <span className="text-primary">{data.review}</span>
        </h4>
        <p className="text-center fs-5">{data.secfourpara}</p>
      </div>
      <section
        className="carousel slide z-3 container mx-auto mt-5"
        id="myCarousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators bottom-0 ">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active bg-primary ps-3 pt-2  "
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            className=" bg-primary ps-3 pt-2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            className=" bg-primary ps-3 pt-2"
          ></button>
        </div>
        <div className="carousel-inner mb-5 pb-5 ">
          {data.details.map(function (item) {
            return (
              <div className="carousel-item bg-primary active">
                <div className="pb-5">
                  <img
                    src={item.carimg}
                    alt="test-img"
                    className="d-block mx-auto mt-5"
                  />
                  <h4 className="h3 text-center text-light fw-light pt-3">
                    {item.testname}
                  </h4>
                  <span className="text-center d-block text-light">
                    {item.fourspan}
                  </span>
                  <p className="text-center text-light w-75 mx-auto fs-5">
                    {item.fourpara}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          className="carousel-control-prev d-none d-lg-block"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        ></button>
        <button
          type="button"
          className="carousel-control-next d-none d-lg-block"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        ></button>
      </section>
    </section>
  );
}
