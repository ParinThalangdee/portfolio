import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '../Card'


const Work = () => {
  let projects = [{
    title: "PokeStats",
    tech: "Javascript, HTML, CSS, Express",
    github: "https://github.com/Godoflaugh/OG-Pokemon-Cards",
    deployed: "https://damp-meadow-22664.herokuapp.com/",
    image: "../../Assets/photos/pokestats.png",
    description: "Data Reference for the Pokemon Trading Card game using Express Server to store and render data to our front end."
  },
  {
    title: "Dinner For Schmucks",
    tech: "Javascript, HTML, CSS",
    github: "https://github.com/DesertCow/DinnerWithSchmucks",
    deployed: "https://desertcow.github.io/DinnerWithSchmucks/index.html",
    image: "../Assets/DinnerForSchucks.png",
    description: "A fun interactive quiz that walks you through the process of picking out a meal with the talking point of a funny quote from a fictional character."
  },
  {
    title: "Weather Dashboard",
    tech: "Javascript, HTML, CSS",
    github: "https://github.com/ParinThalangdee/06-WeatherDashboard",
    deployed: "https://parinthalangdee.github.io/06-WeatherDashboard/",
    image: "",
    description: "An app using a weather API that allows users to input their location via zip to find relevant weather data."
  },
  {
    title: "Work Day Scheduler",
    tech: "Javascript, HTML, CSS",
    github: "https://github.com/ParinThalangdee/05-WorkDayScheduler",
    deployed: "https://parinthalangdee.github.io/05-WorkDayScheduler/",
    image: "",
    description: "An app allowing users to manage their daily task by submitting new task, deleting completed task, and rescheduling current task."
  },
  {
    title: "Javascript Quiz",
    tech: "Javascript, HTML, CSS",
    github: "https://github.com/ParinThalangdee/04-JavascriptQuiz",
    deployed: "https://parinthalangdee.github.io/04-JavascriptQuiz/",
    image: "",
    description: "A timed quiz utilizing Javascript to test and score users with the added function of saving their score locally."
  },
  {
    title: "Send Foodz",
    tech: "React, MongoDB, Express Server",
    github: "https://github.com/Godoflaugh/Project-3",
    deployed: "",
    image: "",
    description: "A social sharing app that allows users to submit their own food recipes with photos while being able to view, like, and share recipes from other users."
  }]

  return (
    <>
      <Grid container justifyContent="center">
        <h1>My Work</h1>
      </Grid>
      <Grid container spacing={4} padding={2} justifyContent="center">
        {projects.map(project =>
          <Grid item>
            <Card title={project.title} github={project.github} image={project.image} tech={project.tech} description={project.description}></Card>
          </Grid>
        )}

      </Grid>
    </>
  )
}

export default Work