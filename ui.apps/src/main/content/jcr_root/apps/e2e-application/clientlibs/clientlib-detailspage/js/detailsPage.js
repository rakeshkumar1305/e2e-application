(() => {
  function init() {
    let logo = document.getElementsByClassName("logo")[0];
    let section = document.getElementsByClassName("section-1")[0];
    let status = true;
    if (!logo) return;

    logo.addEventListener("click", () => {
        
        if (status) {
        section.style.backgroundColor = "blue";
        
      } else {
        section.style.backgroundColor = "pink";
      }

      status=!status
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
