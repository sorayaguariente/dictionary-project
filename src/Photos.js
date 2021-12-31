import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="container">
          <div className="row justify-content-around">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-lg-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      alt={photo.src.original}
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
