import React from "react"
import { About } from "../pages/About"
import { Videos } from "../pages/Videos"
// import { Contact } from "../pages/Contact"
import { Portfolio } from "../pages/Portfolio"
import { Skills } from "../pages/Skills"
import { Testimonials } from "../pages/Testimonials"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
      
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Videos />
      {/* <Contact /> */}
    </>
  )
}
