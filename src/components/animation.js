import Radium, { StyleRoot } from "radium";

const styles = {
  animationGenerator: (duration = 1, type, animationName) => {
    return {
      animation: `x ${duration}s`,
      animationName: Radium.keyframes(type, animationName),
    };
  },
};

export default styles;
