import React from 'react';
import './main.css';
import pic1 from '../../Assets/pic1.jpg'
import pic2 from '../../Assets/pic2.jpg'



const Data=[
{
id:1,
imgSrc:pic1.jpg,
destTitle: 'Bora Bora',
location:'New Zealand',
grade:'CULTERAL RELAX',
fees:'$700',
description:'Nice place'
},

{
  id:2,
  imgSrc:pic2.jpg,
  destTitle:'Bali Island',
  location:'Indosia',
  grade:'Culteral Relax',
  fees:'$500',
  description:'Nice place'
  },

{/* {
    id:3,
    imgSrc:pic3.jpg,
    destTitle:
    location:
    grade:
    fees:
    description:
    }

    {
      id:4
      imgSrc:pic4.jpg
      destTitle:
      location:
      grade:
      fees:
      description:
      }

      {
        id:5
        imgSrc:pic5.jpg
        destTitle:
        location:
        grade:
        fees:
        description:
        }

        {
          id:6
          imgSrc:pic6.jpg
          destTitle:
          location:
          grade:
          fees:
          description:
          }

          {
            id:7
            imgSrc:pexels-baskin-creative-studios-1766838.jpg
            destTitle:
            location:
            grade:
            fees:
            description:
            }

            {
              id:8
              imgSrc:road-1072823__340.jpg
              destTitle:
              location:
              grade:
              fees:
            description:*/}
             
            ]



const Main = () => {
  return (
    <section className='main container section'>
      <div className='secTitle'> 
      <h3 className='title'>
        Most visited destinations
      </h3>
      </div>
      <div className='secContent grid'> 
      {/*here,higher order array method are using*/}

      {
        Data.map((id,imgSrc,destTitle,location,grade,fees,description)=>{
          return(
          <div key={id} className='singleDestination'>
            {/*here it will return single id from map array*/}

          </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Main;