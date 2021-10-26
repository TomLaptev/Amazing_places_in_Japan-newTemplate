window.onload = function() {
  /*----------------Menu dropdown---------------------*/
  const btnMenu = document.querySelector(".header-hamburger");
  const dropDownMenu = document.querySelector(".header-hamburger-menu");

  btnMenu.addEventListener("click", function() {
    dropDownMenu.classList.toggle("isOpen");
  });
  dropDownMenu.addEventListener("click", function() {
    dropDownMenu.classList.toggle("isOpen");
  });

  /*----------------loginForm dropdown---------------------*/
  const del = document.querySelector(".delete");
  const collForm = document.querySelectorAll(".coll-form");
  const loginForm = document.querySelector(".login-form__outer");
  collForm.forEach(el => {
    el.addEventListener("click", function() {
      loginForm.classList.toggle("formOpen");
    });
  });
  del.addEventListener("click", function() {
    loginForm.classList.remove("formOpen");
  });

  /*----------------Sticky element-----------*/

  function mySticky() {
    const header = document.querySelector(".header-sticky-content");
    if (window.pageYOffset > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  /*----------------Functions on scroll---------------------*/
  window.onscroll = function() {
    mySticky();
    myToTop();
  };

  /*----------------Smooth scroll to Top-----------*/
  function myToTop() {
    const toTop = document.querySelector(".btnGoTop");
    if (window.pageYOffset > 200) {
      toTop.classList.add("go-top");
    } else {
      toTop.classList.remove("go-top");
    }
  }
  /*----------------Smooth scroll to element-----------*/

  const scrollLinks = document.querySelectorAll(".scroll");
  scrollLinks.forEach(el => {
    el.addEventListener("click", () => {
      const section = document.getElementById(el.dataset.scroll);
      if (section) {
        scrollToElement(section, {
          offset: -90,
          ease: "linear",
          duration: 1000
        });
      }
    });
  });
};
