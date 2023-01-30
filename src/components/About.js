import React, { useState } from "react";



export default function About(props) {


  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "#042743",
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <>
    
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                //style={myStyle}
                style={{ 
                  backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyzing Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              style={{ color: props.mode === "dark" ? "white" : "#042743" }}
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ 
                  backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}>
                <strong>What is TextUtils</strong>The TextUtils is all about to make your script perfect & bug free. In this app you got features like to do Uppercase, Lowercase, clear your extra spaces, copy text, or clear your text. 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={{ 
                  backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
               <strong>Free To Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              style={{ 
                backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ 
                  backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}>
                <strong>Usage</strong> It is free Platform completely.We made it to make your life simplier.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={{ 
                  backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible </strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              style={{ color: props.mode === "dark" ? "white" : "#042743" }}
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ 
                  backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}>
                <strong>Easy to Use</strong> It is easy to use, fast & smooth experience for user. You fall in love after using it once.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
