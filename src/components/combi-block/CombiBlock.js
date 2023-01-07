import React from "react";
import { link } from "react-router-dom"
import "./CombiBlock.css";

function CombiBlock(prop) {

    return (
   
          // <div className="combi-block-container" right>
          <div
            className={
              "combi-block-container" + (prop.right ? "-img-right" : "-img-left")
            }
          >
            <img className="combi-block-image-container" src={prop.imageSrc} alt="" />
            <div className="combi-block-text-container">
              <h3 className="combi-block-heading">{prop.title}</h3>
              <p className="combi-block-text">{prop.text}</p>
            </div>
          </div>
        
        )}



  


export default CombiBlock