import { Fragment, useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Fullstack Developer", "Software Engineer", "React Enthusiast", "Node.js Developer"], 
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Fragment>
      <span id="type-it" className="subtitle subtitle-typed" ref={el}></span>
    </Fragment>
  );
};

export default TypingAnimation;