document.addEventListener("DOMContentLoaded", () => {
  const detailsElements = document.querySelectorAll("#categories details");
  detailsElements.forEach((el) => {
    el.addEventListener("toggle", () => {
      if (el.open) {
        detailsElements.forEach((other) => {
          if (other !== el) other.open = false;
        });
      }
    });
  });
});
