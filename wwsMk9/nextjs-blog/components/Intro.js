import Head from 'next/head'
import classes from '../styles/Intro.module.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import React, { useState } from "react";

const SliderData = [
  {
      image: "https://cdn.pixabay.com/photo/2017/12/11/22/09/helicopter-3013409_960_720.jpg",
      // header:
      //   "Wildfire Warning System (WWS) is a network of towers that detect wildfire in forests and updates the status of each tower on a map on this website to detect the start of wildfires and follow its progration."
    
      },
    {
  
      image: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/2/e/92ea51706b_50159258_consequences-feux-australie.jpg",
      // altText: "Photo2",
      // caption:"",
      // header:"",
      //   // "It gives to the team in charge of the surveillance, a good overview of the situation and guide the team more efficently toward the important points."
      // key: "2"
    },
    {
      image: "https://cdn.pixabay.com/photo/2020/01/10/10/47/wildfire-4755030_960_720.jpg",
      // altText: "Photo3",
      // caption:"",
      // header:"",
      //   // "Nowadays, for the same result, an officer in charge of the wildfire fly over the forest in an helicopter. This methode cost a lost of money, only one person can have the overview and can be dangerous and not so accurate."+ 
      //   // "Moreover, WWS will include a fire forecast, based on the wind, humidity and rain forcast in the zone covered, from another website.",
      // key: "3"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/06/04/12/55/the-forest-fell-2370996_960_720.jpg",
      // altText: "Photo4",
      // caption:"",
      // header:"",
      //   // "It gives to the team in charge of the surveillance, a good overview of the situation and guide the team more efficently toward the important points."
      // key: "4"
    }
];

export default function Home() {
  const [current, setCurrent] = useState(0)
  const length  = SliderData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1  : current - 1);
  };

  //console.log(current);

  if(!Array.isArray(SliderData) || length <= 0){
    return null
  }
  return (
    <>
      <p className={classes.title}>Introduction</p>
      <p className={classes.p}>
        Welcome on the web page to present my final year project. I am Simon and
        this will demonstrate the web part of my project.
      </p>
      <p className={classes.p}>
        Wildfire Warning System (WWS) is a network of towers that detect
        wildfire in forests and updates the status of each tower on a map on
        this website to detect the start of wildfires and follow its progression.
      </p>
      <section className={classes.slider}>
        <FaArrowAltCircleLeft className={classes.leftArrow} onClick = {prevSlide}/>
        <FaArrowAltCircleRight className={classes.rightArrow} onClick = {nextSlide}/>
        {SliderData.map((slide, index) => {
          return (
            <div 
            className={index === current ? classes.slideActive : classes.slide} 
            key={index}
            >
              {index === current && (
                <img src={slide.image} alt='Intro slide' className={classes.image}/>
              )}
              
            </div>
          )
        })}
      </section>
      <p className={classes.p}>
        It gives to the team in charge of the surveillance, a good overview of
        the situation and guide the team more efficiently toward the important
        points.
      </p>
      <p className={classes.p}>
        Nowadays, for the same result, an officer in charge of the wildfire fly
        over the forest in an helicopter or plane. This method cost a lost of money,
        only one person can have the overview and can be dangerous and not
        accurate.
      </p>
      <p className={classes.p}>
        Moreover, WWS will include a fire forecast, based on the wind direction, strength and humidity
        forecast in the zone covered, from another website.
      </p>
    </>
    
  )
}
