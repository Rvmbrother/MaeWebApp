import React from "react";
import "./NavBar.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useRef, useContext } from "react";
import Menu from "./Menu/Menu";
import VectorIcon from "../assets/SVGs/Vector.svg";
import { ScrollContext } from "../Contexts/ScrollProvider";

//There is an issue, when you scroll to fast down,namely the Menu button will not dissapear.

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const { setHomeBtnScrollPosition } = useContext(ScrollContext);
  const menu = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".homeBtn",
      start: "bottom bottom",
      end: "top top",
      scrub: true,
      onUpdate: (self) => {
        // Update the scroll position in the context
        setHomeBtnScrollPosition(self.progress);
      },
    });

    return () => {
      ScrollTrigger.getById("home-scroll")?.kill();
    };
  }, [setHomeBtnScrollPosition]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    // Create a GSAP timeline for animations
    gsap.fromTo(
      ".homeBtn",
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power4.out",
      }
    );

    let tl = gsap.timeline({
      defaults: { duration: 1, ease: "power1.inOut" },
    });

    // Animate characters, including spaces

    tl.to(".navBar", {
      y: "-35rem", // Use a string or negative number without quotes
      scrollTrigger: {
        trigger: ".homeBtn", // Adjust as needed
        start: "bottom bottom",
        end: "top top",
        scrub: true,
      },
    });
    tl.to(".homeBtn", {
      transformOrigin: "left top",
      scale: 0.285,
      scrollTrigger: {
        trigger: ".homeBtn", // Adjust as needed
        start: "bottom bottom",
        end: "top top",
        scrub: true,
      },
      scrub: true,
    });

    gsap.set(".menuBtn", { opacity: 0, y: 10 });
    gsap.to(".menuBtn", {
      onStart: () => {
        console.log("onStart");
      },
      opacity: 1,
      y: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".homeBtn",
        start: "top top+=20%", // Start when scroll reaches 200px

        id: "menuBtn",
        onEnter: () => {
          gsap.to(".menuBtn", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          // Make the menu button reappear on reverse scroll
          gsap.to(".menuBtn", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          // Ensure menu button disappears when scrolling back past trigger
          gsap.to(".menuBtn", {
            opacity: 0,
            y: 10,
            duration: 0.5,
            ease: "power2.in",
          });
        },
      },
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(".homeBtn");
      gsap.killTweensOf(".navBar");
      gsap.killTweensOf(".menuBtn");
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  // NEW useEffect for animating the Menu component
  useEffect(() => {
    // Get fixed viewport values
    const scrollerStart = window.innerHeight * 0.2; // 20% of the viewport height
    const scrollerEnd = window.innerHeight * 0.05; // Top of the page
    if (isMenuOpen && menu.current) {
      // Animate the menu when it opens
      gsap.fromTo(
        menu.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".homeBtn",
            start: "top-=5% top+=20%",

            onEnter: () => {
              gsap.to(menu.current, {
                opacity: 1,
                y: 0,
                duration: 0.2,
                ease: "power2.out",
              });
            },
            onEnterBack: () => {
              gsap.to(menu.current, {
                opacity: 1,
                y: 0,
                duration: 0.2,
                ease: "power2.out",
              });
            },
            onLeaveBack: () => {
              gsap.to(menu.current, {
                opacity: 0,
                y: 10,
                duration: 0.2,
                ease: "power2.in",
              });
            },
          },
        }
      );
    } else if (!isMenuOpen && menu.current) {
      // Optionally, animate the menu when it closes
      gsap.to(menu.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.in",
      });
    }
    return () => {
      gsap.killTweensOf(menu.current);
    };
  }, [isMenuOpen]); // Dependency on isMenuOpen

  return (
    <>
      <div className="nav">
        <div className="navBar">
          <a className="homeBtn">Filipa Roseta</a>
          <button
            className={`menuBtn ${isMenuOpen ? "menuOpen" : ""}`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <img src={VectorIcon} alt="Menu Icon" /> : "MENU"}
          </button>
        </div>
        {isMenuOpen && <Menu ref={menu} />}
      </div>
    </>
  );
}
