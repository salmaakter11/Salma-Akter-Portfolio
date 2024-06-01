import React from "react";
import Profile from "./Profile";
import About from "./About";
import Project from "./Project";
import Thesis from "./Thesis";
import Contact from "./Contact";
const Home = () => {
  return (
    <>

      <main className="wrapper">
        <Profile />
        <About />
        <Project />
        <Thesis />
        <Contact />
      </main>

    </>

  )
}
export default Home;