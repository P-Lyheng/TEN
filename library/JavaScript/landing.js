const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-item-header");
  const body = item.querySelector(".accordion-item-body");

  header.addEventListener("click", () => {
    accordionItems.forEach((accItem) => {
      const accBody = accItem.querySelector(".accordion-item-body");
      if (accItem !== item && !accBody.classList.contains("collapsed")) {
        accBody.classList.add("collapsed");
        accBody.style.height = "0";
      }
    });

    body.classList.toggle("collapsed");
    if (body.classList.contains("collapsed")) {
      body.style.height = "0";
    } else {
      body.style.height = body.scrollHeight + "px";
    }
  });
});
