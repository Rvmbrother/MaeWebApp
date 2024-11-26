import React, { useEffect, useRef } from "react";
import Home from "./Home/Home";
import HorizontalSections from "./HorizontalSections/HorizontalSections";
import PersonalNotes from "./PersonalNotes/PersonalNotes";
import NavBar from "./NavBar/NavBar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollProvider } from "./Contexts/ScrollProvider";

export default function App() {
  return (
    <>
      <ScrollProvider>
        <Home />
        <NavBar />
      </ScrollProvider>
      <HorizontalSections />
      <PersonalNotes />
    </>
  );
}
