
// TODO: Scroll Animation
const scrollTime = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.classList.add("show");
    entry.classList.remove("hdn");
  });
});

// FIXME: getting all the elements with hdn class
const elements = document.querySelector(".hdn");

// Observing the elements
scrollTime.observe(elements);
