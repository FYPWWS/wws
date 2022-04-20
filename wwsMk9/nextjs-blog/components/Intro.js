import { useState } from "react";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'



const slides = [
  
  {
    image: "https://france3-regions.francetvinfo.fr/image/ykCsYGH-1yG2S-B9NOk1RaD3bbw/600x400/regions/2020/06/09/5edf95362792e_maxnewsworldfour310188-4509659.jpg",
    // altText: "Photo1",
    // caption:"",
    // header:"",
    //   // "Wildfire Warning System (WWS) is a network of towers that detect wildfire in forests and updates the status of each tower on a map on this website to detect the start of wildfires and follow its progration."
    // key: "1" 
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Deerfire.jpg/350px-Deerfire.jpg",
    // altText: "Photo3",
    // caption:"",
    // header:"",
    //   // "Nowadays, for the same result, an officer in charge of the wildfire fly over the forest in an helicopter. This methode cost a lost of money, only one person can have the overview and can be dangerous and not so accurate."+ 
    //   // "Moreover, WWS will include a fire forecast, based on the wind, humidity and rain forcast in the zone covered, from another website.",
    // key: "3"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/The_Rim_Fire_in_the_Stanislaus_National_Forest_near_in_California_began_on_Aug._17%2C_2013-0004.jpg/350px-The_Rim_Fire_in_the_Stanislaus_National_Forest_near_in_California_began_on_Aug._17%2C_2013-0004.jpg",
    // altText: "Photo4",
    // caption:"",
    // header:"",
    //   // "It gives to the team in charge of the surveillance, a good overview of the situation and guide the team more efficently toward the important points."
    // key: "4"
  }
];

export default function Home() {
  const [current, setCurrent] = useState(0)
  const length  = slides.length
  return (
    <section className="slider">
      
      {slides.map((slide, index) => {
        return <img src={slide.image} alt='Intro slide'/>
      })}
    </section>
  )
}
