import Radium from 'radium';

const styles = {
  animationGenerator: (duration = 1, type, animationName) => ({
    animation: `x ${duration}s`,
    animationName: Radium.keyframes(type, animationName),
  }),
};

export default styles;
