import Head from 'next/head'
import classes from '../styles/Intro.module.css'


const Intro = [
  {
    id: "id1",
    welcome:
      "Welcome on the web page to present my final year project. I am Simon and this will demonstrate the web part of my project.",
    description:
      "Wildfire Warning System (WWS) is a network of towers that detect wildfire in forests and updates the status of each tower on a map on this website to detect the start of wildfires and follow its progration.",
    use: "It gives to the team in charge of the surveillance, a good overview of the situation and guide the team more efficently toward the important points.",
    current:
      "Nowadays, for the same result, an officer in charge of the wildfire fly over the forest in an helicopter. This methode cost a lost of money, only one person can have the overview and can be dangerous and not so accurate.",
    advantages:
      "Moreover, WWS will include a fire forecast, based on the wind, humidity and rain forcast in the zone covered, from another website.",
    helicopter:
      "https://france3-regions.francetvinfo.fr/image/ykCsYGH-1yG2S-B9NOk1RaD3bbw/600x400/regions/2020/06/09/5edf95362792e_maxnewsworldfour310188-4509659.jpg",
    wildfire1:
      "https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/2/e/92ea51706b_50159258_consequences-feux-australie.jpg",
    wildfile2:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Deerfire.jpg/350px-Deerfire.jpg",
    wildfire3:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/The_Rim_Fire_in_the_Stanislaus_National_Forest_near_in_California_began_on_Aug._17%2C_2013-0004.jpg/350px-The_Rim_Fire_in_the_Stanislaus_National_Forest_near_in_California_began_on_Aug._17%2C_2013-0004.jpg",
  },
];

export default function Home() {
  return (
    <section>
      <h1>Introduction</h1>
      <p>
        Welcome on the web page to present my final year project. I am Simon and
        this will demonstrate the web part of my project.
      </p>
      <p>
        Wildfire Warning System (WWS) is a network of towers that detect
        wildfire in forests and updates the status of each tower on a map on
        this website to detect the start of wildfires and follow its progration.
      </p>
      <div>
        <img
          className={classes.photo1}
          src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/2/e/92ea51706b_50159258_consequences-feux-australie.jpg"
        />
      </div>
      <p>
        It gives to the team in charge of the surveillance, a good overview of
        the situation and guide the team more efficently toward the important
        points.
      </p>
      <p>
        Nowadays, for the same result, an officer in charge of the wildfire fly
        over the forest in an helicopter. This methode cost a lost of money,
        only one person can have the overview and can be dangerous and not so
        accurate.
      </p>
      <div>
        <img
          className={classes.photo2}
          src="https://france3-regions.francetvinfo.fr/image/ykCsYGH-1yG2S-B9NOk1RaD3bbw/600x400/regions/2020/06/09/5edf95362792e_maxnewsworldfour310188-4509659.jpg"
        />
      </div>
      <p>
        Moreover, WWS will include a fire forecast, based on the wind, humidity
        and rain forcast in the zone covered, from another website.
      </p>
      <div>
        <img
          className={classes.photo3}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Deerfire.jpg/350px-Deerfire.jpg"
        />
      </div>
      <div>
        <img
          className={classes.photo4}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/The_Rim_Fire_in_the_Stanislaus_National_Forest_near_in_California_began_on_Aug._17%2C_2013-0004.jpg/350px-The_Rim_Fire_in_the_Stanislaus_National_Forest_near_in_California_began_on_Aug._17%2C_2013-0004.jpg"
        />
      </div>
    </section>
  )
}
