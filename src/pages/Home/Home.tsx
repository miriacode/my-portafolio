import React from 'react'
import { HomeSection } from './Home.style'
import mainImage from './../../assets/images/home-image.jpg'

const Home = () => {
  return (
    <HomeSection id="home">
      <div>
        <h1>Hi! I'm Miriam Acuña</h1>
        <h3>Front-End Engineer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, id nesciunt cupiditate aliquid maxime libero veniam eum exercitationem 
          aliquam numquam velit atque necessitatibus maiores quibusdam odit sint laboriosam perspiciatis sunt!
        </p>
      </div>
      <div>
        <img src={mainImage} alt="k"/>
      </div>
      
    </HomeSection>
  )
}

export default Home