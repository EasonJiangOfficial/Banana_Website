import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function TypedEffect() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["like a banana\"", "Creamy\"", "Amazing\"", "like heaven\""], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className="TypeAnimation" ref={el}></span>
    </div>
  );
}
