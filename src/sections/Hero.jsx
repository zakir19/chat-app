import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const caption = section.querySelector('.caption');
    const heading = section.querySelector('h1');
    const paragraph = section.querySelector('p');
    const button = buttonRef.current;

    gsap.set([caption, heading, paragraph, button], { opacity: 0 });

    const tl = gsap.timeline();

    tl.to(caption, {
      opacity: 1,
      duration: 0.5,
      text: {
        value: "Video Editing",
        delimiter: " "
      },
      ease: "none",
    })
    .to(heading, {
      opacity: 1,
      duration: 0.5,
      text: {
        value: "Amazingly simple",
        delimiter: " "
      },
      ease: "none",
    })
    .to(paragraph, {
      opacity: 1,
      duration: 2,
      text: {
        value: "We designed XORA AI Video Editor to be an easy to use, quick to learn, and surprisingly powerful.",
        delimiter: " "
      },
      ease: "none",
    })
    .to(button, {
      opacity: 1,
      duration: 0.5,
      text: "Try it now",
      ease: "none",
    })
    .to(button, {
      scale: 1.1,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    }, "+=0.5")
    .to(button, {
      boxShadow: "0 0 15px rgba(255,255,255,0.7)",
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    }, "<");

  }, []);

  return (
    <section ref={sectionRef} className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button ref={buttonRef} icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;