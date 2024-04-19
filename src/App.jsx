import React from "react";
import Secone from "./Secone";
import Sectwo from "./Sectwo";
import Secthree from "./Secthree";
import Secfour from "./Secfour";
import Secfive from "./Secfive";
const seconedata = [
  {
    nav: ["Home", "About", "Review", "Contact"],
    logo: "./src/assets/images/logo.png",
    head_1: "Classified Ads",
    p: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in",
    btn: "READ MORE",
    menuicon : "./src/assets/images/menu_icon.png"
  },
];
const sectwodata = [
  {
    sectwoimg: "./src/assets/images/about_img.jpg",
    aboutp:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    about: "ABOUT",
    us: "US",
    btntext: "READ MORE",
  },
];
const secthreedata = [
  {
    info: [
      {
        id: "1",
        heading: "FRONT END MULTICURRENCY",
        des: "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model",
      },
      {
        id: "2",
        heading: "MOST INTELLIGENT SEARCH SYSTEM",
        des: "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model",
      },
      {
        id: "3",
        heading: "MOST INTELLIGENT SEARCH SYSTEM",
        des: "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model",
      },
    ],
    one: "ONE OF THE BEST",
    classified: "CLASSIFIED",
  },
];
const secfourdata = [
  {
    secfourhead: "OUR CLIENT",
    review: " REVIEW",
    secfourpara:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it",
    details: [
      {
        carimg: "./src/assets/images/te1.png",
        testname: "JOHN DUE",
        fourspan: "(adiuser)",
        fourpara:
          "It is a long established fact that a reader will be distracted by the readable content of a pagewhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norm distribution of letters, as opposed to",
      },
      {
        carimg: "./src/assets/images/te1.png",
        testname: "JOHN DUE 2",
        fourspan: "(adiuser)",
        fourpara:
          "It is a long established fact that a reader will be distracted by the readable content of a pagewhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norm distribution of letters, as opposed to",
      },
      {
        carimg: "./src/assets/images/te1.png",
        testname: "JOHN DUE 3",
        fourspan: "(adiuser)",
        fourpara:
          "It is a long established fact that a reader will be distracted by the readable content of a pagewhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norm distribution of letters, as opposed to",
      },
    ],
  },
];
const secfivedata = [
  {
    contact: "CONTACT US",
    listdata: [
      {
        icon: "fa-solid fa-location-dot  fs-3 pe-3 iconhover",
        content: "Location",
      },
      {
        icon: "fa-solid fa-phone  fs-3 pe-3 iconhover",
        content: "39493092039",
      },
      {
        icon: "fa-solid fa-envelope  fs-3 pe-3 iconhover",
        content: "demogmai.com",
      },
    ],
    formdata: [
      {
        type: "text",
        placeholder: "Full Name",
      },
      {
        type: "email",
        placeholder: "Email",
      },
      {
        type: "tel",
        placeholder: "Phone Nmber",
      },
      {
        type: "textarea",
        placeholder: "Massage",
      },
    ],
    social: [
      {
        social: "fa-brands fa-facebook fs-4",
      },
      {
        social: "fa-brands fa-twitter fs-4",
      },
      {
        social: "fa-brands fa-linkedin fs-4",
      },
      {
        social: "fa-brands fa-instagram fs-4",
      },
    ],
    mapimg: "./src/assets/images/map.jpg",
    newsletter: "Newsletter",
    SUBSCRIBE: "SUBSCRIBE",
    copyright: "Copyright 2019 All Right Reserved By Free html Templates",
  },
];
function App() {
  return (
    <React.Fragment>
      <Secone seconedata={seconedata} />
      <Sectwo sectwodata={sectwodata} />
      <Secthree secthreedata={secthreedata} />
      <Secfour secfourdata={secfourdata} />
      <Secfive secfivedata={secfivedata} />
    </React.Fragment>
  );
}
export default App;
