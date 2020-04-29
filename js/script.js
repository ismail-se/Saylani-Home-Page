

const counters = document.querySelectorAll(".counter");
const speed = 300;


const counter = counters.forEach((counter) => {
  const countUpdate = () => {
    const count = +counter.innerText;
    const target = +counter.getAttribute("data-target");

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.floor(count + inc);
      setTimeout(countUpdate, 1);
    } else {
      counter.innerText = target;
    }
  };

  countUpdate();
});
