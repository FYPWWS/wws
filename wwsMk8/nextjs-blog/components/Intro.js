import Head from 'next/head'
import classes from '../styles/Intro.module.css'
import Slider from "react-animated-slider";
import "../styles/slider-animations.module.css";


const slides = [
  {
    title: "Photo1",
    description:
      "Welcome on the web page to present my final year project. I am Simon and this will demonstrate the web part of my project.",
    image:
      "https://france3-regions.francetvinfo.fr/image/ykCsYGH-1yG2S-B9NOk1RaD3bbw/600x400/regions/2020/06/09/5edf95362792e_maxnewsworldfour310188-4509659.jpg"
  },
  {
    title: "Photo2",
    description:
      "Wildfire Warning System (WWS) is a network of towers that detect wildfire in forests and updates the status of each tower on a map on this website to detect the start of wildfires and follow its progration.",
    image: 
      "https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/2/e/92ea51706b_50159258_consequences-feux-australie.jpg"

  },
  {
    title: "Photo3",
    description:
      "It gives to the team in charge of the surveillance, a good overview of the situation and guide the team more efficently toward the important points.",
    image: 
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Deerfire.jpg/350px-Deerfire.jpg"

  },
  {
    title: "Photo3",
    description:
      "Nowadays, for the same result, an officer in charge of the wildfire fly over the forest in an helicopter. This methode cost a lost of money, only one person can have the overview and can be dangerous and not so accurate."+ 
      "Moreover, WWS will include a fire forecast, based on the wind, humidity and rain forcast in the zone covered, from another website.",
    image: 
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/The_Rim_Fire_in_the_Stanislaus_National_Forest_near_in_California_began_on_Aug._17%2C_2013-0004.jpg/350px-The_Rim_Fire_in_the_Stanislaus_National_Forest_near_in_California_began_on_Aug._17%2C_2013-0004.jpg"

  }
];

export default function Home() {
  return (
    <div>
      <Head/>
      <Slider className={classes.sliderWrapper}>
        {slides.map((item, index) => (
          <div
            key={index}
            className={classes.sliderContent}
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className={classes.inner}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
