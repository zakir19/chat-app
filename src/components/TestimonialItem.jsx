import PropTypes from 'prop-types';
import clsx from "clsx";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestimonialItem = ({ item, containerClassName }) => {
  const itemRef = useRef(null);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    const quote = quoteRef.current;
    const author = authorRef.current;

    gsap.set([quote, author], { opacity: 0, y: 50 });

    gsap.to(quote, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.to(author, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <div
      ref={itemRef}
      className={clsx(
        "relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
        containerClassName,
      )}
    >
      <blockquote ref={quoteRef} className="h6 mb-8 text-p4">{item.comment}</blockquote>

      <div ref={authorRef} className="flex items-center max-xl:-mr-8">
        <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-s2 p-1.5">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </div>
        <div>
          <h4 className="body-2 mb-0.5 text-p1">{item.name}</h4>
          <p className="small-compact uppercase text-s3">{item.role}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialItem.propTypes = {
  item: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  containerClassName: PropTypes.string,
};

export default TestimonialItem;