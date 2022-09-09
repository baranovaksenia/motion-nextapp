export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      // задержка каждого элемента (один за другим через 0.6 сек)
      staggerChildren: 0.6,
      staggerDelay: 0.6,
    },
  },
};

export const fadeItDown = {
  initial: {
    opacity: 0,
    y: -70,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    type: 'tween',
    duration: 1.5,
  },
};

export const girlAnim = {
  initial: { x: 900, opacity: 0 },
  animate: {
    x: 700,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 3,
    },
  },
};

export const boyAnim = {
  initial: { x: -150, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 4 },
  },
};

export const heroTruckAnim = {
  initial: { x: -700 },
  animate: {
    x: 0,
    transition: { type: 'spring', duration: 3 },
  },
};

export const cloudAnim = {
  initial: { x: 900, opacity: 0 },
  animate: {
    x: 800,
    opacity: 1,
    transition: {
      type: 'just',
      duration: 3,
    },
  },
};
