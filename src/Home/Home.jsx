import React, { useEffect } from "react";
import "./Home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextInfo from "./TextInfo/TextInfo";
import { useRef, useContext } from "react";
import { ScrollContext } from "../Contexts/ScrollProvider";
import { text } from "@fortawesome/fontawesome-svg-core";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { homeBtnScrollPosition } = useContext(ScrollContext); // Access the context
  const textInfoRef = useRef(null);

  gsap.set(textInfoRef.current, { opacity: 0, y: 50 });

  useEffect(() => {
    if (homeBtnScrollPosition === 1) {
      // Animate the TextInfo component when homeBtn animation completes
      gsap.to(textInfoRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(
        textInfoRef.current,
        {
          yPercent: -100,
          scrollTrigger: {
            markers: true,
            trigger: textInfoRef.current,
            start: "top center",
            end: "bottom top",
            scrub: 1,
          },
        },
        ">"
      );
    }
  }, [homeBtnScrollPosition]); // Re-run the effect when the scroll position changes

  useEffect(() => {
    ScrollTrigger.create({
      id: "home-pin",
      trigger: ".main",
      start: "top top",
      end: "+=1600",
      pin: true,
      anticipatePin: 1,
    });

    return () => {
      ScrollTrigger.getById("home-pin")?.kill();
    };
  }, []);

  return (
    <>
      <div className="main">
        <TextInfo ref={textInfoRef} />
      </div>
    </>
  );
}
