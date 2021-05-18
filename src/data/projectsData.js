import landingheader from '../images/landingheader.png'
import posts from '../images/posts.png'
import currentWeather from '../images/current-weather.png'
import forecast from '../images/forecast.png'
import lodgeLanding from '../images/ll-landing.png'
import timeline from '../images/ll-timeline.png'

const projectsArray = [
  {
    id: 1,
    title: 'LodgeLog',
    github: <a href="https://github.com/tatia-burdett/lodgelog-app">Github App Repo</a>,
    githubAPI: <a href="https://github.com/tatia-burdett/lodgelog-api">Github Server Repo</a>,
    liveLink: <a href="https://lodgelog-app-tatia-burdett.vercel.app/">Live Link</a>,
    img1: <img src={lodgeLanding} alt='' className='proj-image'/>,
    img2: <img src={timeline} alt='' className='proj-image'/>,
    description: 'LodgeLog is a web app that allows users to save personal previous address history. Users can create an account, log in, and store personal data.'
  },
  {
    id: 2,
    title: 'Hello World - Group Journal',
    github: <a href="https://github.com/tatia-burdett/hello-world-app">Github App Repo</a>,
    githubAPI: <a href="https://github.com/tatia-burdett/hello-world-api">Github Server Repo</a>,
    liveLink: <a href="https://hello-world-app-tatia-burdett.vercel.app/">Live Link</a>,
    img1: <img src={landingheader} alt='' className='proj-image'/>,
    img2: <img src={posts} alt='' className='proj-image' />,
    description: 'Hello World is a client-side React web app that allows users to view and post comments. This project utilizes a GET and POST endpoint only. A nickname, option location, category and some content are received from the user, and a date is created and formatted using react-moment.'
  },
  {
    id: 3,
    title: 'Simply Weather',
    github: <a href="https://github.com/tatia-burdett/simply-weather">Github App Repo</a>,
    githubAPI: 'N/A',
    liveLink: <a href="https://tatia-burdett.github.io/simply-weather/">Live Link</a>,
    img1: <img src={currentWeather} alt='' className='proj-image'/>,
    img2: <img src={forecast} alt='' className='proj-image'/>,
    description: 'The IP address is retrieved from the user to find their current location. Then the weather API uses the zipcode to gather data on the current weather in that location. Users can search for weather in a different city by zipcode or city name. Finally, a 5 day forecast is offered showing a brief snapshot (temperature and conditions) of these days.'
  }
]

export default projectsArray