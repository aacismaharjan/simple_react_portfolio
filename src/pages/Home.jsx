import React, { Component } from "react";
import { Hero, About, Skills, Projects, Blogs, Contact } from "../components/";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        {/* <Skills /> */}
        {/* <Projects /> */}
        <Blogs />
        {/* <Contact /> */}
      </div>
    );
  }
}
