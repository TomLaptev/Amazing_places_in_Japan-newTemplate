window.onload = function() {
  /*----------------Menu dropdown---------------------*/
  const btnMenu = document.querySelector(".header-hamburger");
  const dropDownMenu = document.querySelector(".header-hamburger-menu");

  btnMenu.addEventListener("click", function() {
    dropDownMenu.classList.toggle("menuIsVisible");
  });
  dropDownMenu.addEventListener("click", function() {
    dropDownMenu.classList.toggle("menuIsVisible");
  });

  /*----------------loginForm dropdown---------------------*/
  const del = document.querySelector(".hide-form");
  const collForm = document.querySelectorAll(".coll-form");
  const loginForm = document.querySelector(".login-container__outer");
  collForm.forEach(el => {
    el.addEventListener("click", function() {
      loginForm.classList.toggle("login-form-appear");
    });
  });
  del.addEventListener("click", function() {
    loginForm.classList.remove("login-form-appear");
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
    const toTop = document.querySelector(".go-up");    

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
