import { useRef } from "react"
import { Link } from "react-router-dom"
import Header from "/src/components/header"
import About from "/src/components/about"
import Services from "/src/components/services"
import Technology from "/src/components/technologies"
import Message from "/src/components/message"

export default function Main() {
  // Refs for header navigation bar
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const technologyRef = useRef(null);
  const messageRef = useRef(null);

  const sectionRefs = {
    about: aboutRef,
    services: servicesRef,
    technology: technologyRef,
    message: messageRef,
  };

  return (
    <main>
      <Header sectionRefs={sectionRefs} type="main"/>
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Technology  ref={technologyRef}/>
      <Message ref={messageRef} />
    </main>
  )
};