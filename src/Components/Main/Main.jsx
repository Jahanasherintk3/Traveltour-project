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
    destTitle: "Positano",
    location: "Italy",
    grade: "CULTERAL RELAX",
    fees: "$700",
    description: "Known for its world-class hotels and iconic pastel buildings, Positano is one of the most charming villages on the Amalfi Coast—and in the world. The numerous shops across the cliff celebrate the craftsmanship of Italian ceramicists, painters, and textile designers. The best part may just be that almost every cafe and hotel comes with idyllic views of the Mediterranean Sea.",
  },

 {
  id:2,
  imgSrc: pic2,
  destTitle:'Machu Picchu, ',
  location:'Peru',
  grade:'Culteral Relax',
  fees:'$500',
  description:'Perched in the Andes Mountains stands the most important discovery from the ancient Inca Empire, Machu Picchu. The imposing citadel along with various structures throughout the 5-mile site are thought to be remnants of either a royal estate for Inca nobles or a religious center. Getting to the site in the mountains is no easy task as it requires quite a hike at a high elevation, but views are unlike anything you will ever see in your life.'
  },

 {
    id:3,
    imgSrc:pic3,
    destTitle:'Jaipur',
    location:'India',
    grade:'India',
    fees:'$100',
    description:'A beloved locale of designers and fashion mavens, Indias Pink City is home to some of the most elaborate and colorful palaces in all of the country. Many of the original structures of the walled city, including the famous Hawa Mahal and Rajmahal Palace, were commissioned during the 1700s, but Jaipurs dusty pink hue appeared in 1876 when the entire city was painted to welcome the arrival of Queen Victorias husband, Prince Albert. Beyond the ornate Hindu Rajput architecture, Jaipur is also home to extraordinary textile markets.',
    },

    {
      id:4,
      imgSrc:pic4,
      destTitle:'Avenue of the Baobabs',
      location:'Madagascar',
      grade:'abc',
      fees:'$200',
      description:'On the west coast of Madagascar, dozens of ancient baobabs trees strikingly frame the dirt path between Morondava and Beloni Tsiribihina. The towering 800-year-old trees extend upwards to the dusty sky, creating a dramatic scene that can be seen from miles away. Its said the rare trees were once a part of a much larger forest, but due to urbanization much of it had been torn down. In an effort to preserve the path, local activists successfully petitioned for the Avenue of the Baobabs to become Madagascars first natural monument.',
      },

      {
        id:5,
        imgSrc:pic5,
        destTitle:'Temples of Bagan',
        location:'Myanmar',
        grade:'abc',
        fees:'$400',
        description:'Over 3,500 breathtaking Buddhist pagodas and temples make up the ancient city of Bagan in Myanmar. Dating back to the 9th century, the former capital served as the cultural, economic, and religious epicenter of the Pagan Empire. Scholars believe that the Bagan rulers constructed upwards of 13,000 religious buildings over 250 years, establishing a Buddhist landmark in the country. However, many of those temples were destroyed over the centuries due to earthquakes. In 2019, UNESCO officially named Myanmars Temples of Bagan a World Heritage site and established efforts to restore many of the ruins and preserve the still-standing structures.',
        },

        {
          id:6,
          imgSrc:pic6,
          destTitle:'Kauai',
          location:'Hawaii',
          grade:'abc',
          fees:'$500',
          description:'Kauai has earned its nickname as Hawaiis “Garden Isle" for a great reason: Its local landscape consists of stunning white sand beaches, astonishing sea cliffs, picturesque waterfalls, and vast plantings. The Nā Pali Coast State Park stretches across the island, allowing visitors the chance to learn all about the native flora and fauna that make the island so uniquebc.',
          },

          {
            id:7,
            imgSrc:pic7,
            destTitle:'Paris',
            location:'France',
            grade:'abc',
            fees:'$600',
            description:'One cant deny the lure of Paris. For centuries, the renowned city acted as the playground for artisans, designers, and writers who often find inspiration in the stunning architecture, gardens, and cafes surrounding them. While the city has fought to preserve much of its historic character, it also welcomes new ideas and innovations that make it stand out year after year.',
            },

            {
              id:8,
              imgSrc:pic8,
              destTitle:'Banff National Park',
              location:'Canada',
              grade:'abc',
              fees:'$700',
              description:'Sparkling glacier waters surrounded by snow-capped mountains and fragrant evergreens make Banff National Park one of the most idyllic natural landmarks in the world. Lake Louise may be the standout attraction, but Canadas first national park has bountiful offerings from scenic gondola rides to exclusive wildlife tours. For those who are not as adventurous, there are also lakeside lounges where you can relax before exploring Victoria Glacier.',
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
