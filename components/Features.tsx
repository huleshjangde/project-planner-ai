"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      },
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  const advantages = [
    {
      title: "Time and Effort Saving",
      image: "time",
      description:
        "Save valuable time and effort with AI-generated project overviews and planning guides, allowing you to focus more on execution rather than the initial planning phase.",
    },
    {
      title: "Customized Project Ideas",
      image: "idea",
      description:
        "Receive personalized project suggestions tailored to your interests, skills, and goals, ensuring that the ideas you get are not only innovative but also achievable.",
    },
    {
      title: "Streamlined Project Planning",
      image: "planning",

      description:
        "Simplify the project planning process with AI-driven insights on milestones, key objectives, and potential strategies, making project management more efficient.",
    },
    {
      title: "Collaboration Made Easy",
      image: "simple",
      description:
        "Facilitate collaboration with team members through an intuitive platform that allows for easy sharing, discussion, and modification of project plans.",
    },
  ];

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          {advantages.map((advantage, index) => (
            <div key={index} className="scroll-section flex flex-col">
              <Image
                src={`/${advantage.image}.gif`}
                width={300}
                height={300}
                className="rounded-md shadow-md mb-10"
                alt="Picture of the author"
              />
              <h3 className="text-3xl sm:text-6xl">{advantage.title}</h3>
              <p className="w-4/6 text-base sm:text-2xl mt-3 text-gray-400 text-center">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
