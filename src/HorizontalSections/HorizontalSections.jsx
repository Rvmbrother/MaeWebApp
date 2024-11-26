import React from "react";
import Architecture from "./Architecture/Architecture";
import Politica from "./Politica/Politica";
import Publicacao from "./Publicacao/Publicacao";
import "./HS.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalSections() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${sectionRef.current.offsetWidth - window.innerWidth}px`,
        ease: "none",
        duration: 1,

        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "300% top",
          scrub: true,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <Architecture className="slider" />
          <Politica className="slider" />
          <Publicacao className="slider" />
        </div>
      </div>
    </div>
  );
}
