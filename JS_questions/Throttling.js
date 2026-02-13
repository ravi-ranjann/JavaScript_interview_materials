// Throttling – Throttling is a technique in which, no matter how many times
// the user fires the event, the attached function will be executed only once in
// a given time interval.

const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const throttling = (func, limit) => {
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
      timer = true;
      setTimeout(() => (timer = false), limit);
    }
  };
};
