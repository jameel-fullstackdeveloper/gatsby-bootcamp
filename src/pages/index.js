import React from "react"
import { Link } from 'gatsby'

const Index = () => {
  return (
    <>
      <h1>Hello Gatsby Bootcamp</h1>
      <p><Link to="about" > About Developer </Link></p>
      <p><Link to="contact" > Contact Developer</Link></p>
    </>
  )
}


export default Index;