import React from "react";
import "./main.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import pic1 from "../../Assets/pic1.jpg";
import pic2 from "../../Assets/pic2.jpg";
import pic3 from "../../Assets/pic3.jpg";
import pic4 from "../../Assets/pic4.jpg";
import pic5 from "../../Assets/pic5.jpg";
import pic6 from "../../Assets/pic6.jpg";
import pic7 from "../../Assets/pic7.jpg";
import pic8 from "../../Assets/pic8.jpg";

const Data = [
  {
    id: 1,
    imgSrc: pic1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTERAL RELAX",
    fees: "$700",
    description: "Nice place",
  },

 {
  id:2,
  imgSrc: pic2,
  destTitle:'Bali Island',
  location:'Indosia',
  grade:'Culteral Relax',
  fees:'$500',
  description:'Nice place'
  },

 {
    id:3,
    imgSrc:pic3,
    destTitle:'abc',
    location:'abc',
    grade:'abc',
    fees:100,
    description:'abc',
    },

    {
      id:4,
      imgSrc:pic4,
      destTitle:'abc',
      location:'abc',
      grade:'abc',
      fees:200,
      description:'abc',
      },

      {
        id:5,
        imgSrc:pic5,
        destTitle:'abc',
        location:'abc',
        grade:'abc',
        fees:400,
        description:'abc',
        },

        {
          id:6,
          imgSrc:pic6,
          destTitle:'abc',
          location:'abc',
          grade:'abc',
          fees:500,
          description:'abc',
          },

          {
            id:7,
            imgSrc:pic7,
            destTitle:'abc',
            location:'abc',
            grade:'abc',
            fees:600,
            description:'abc',
            },

            {
              id:8,
              imgSrc:pic8,
              destTitle:'abc',
              location:'abc',
              grade:'abc',
              fees:700,
            description:'abc',
             }
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {/*here,higher order array method are using*/}

        {Data?.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                {/*here it will return single id from map array*/}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
