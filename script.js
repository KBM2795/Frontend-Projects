

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function page1(){
     var tl1 = gsap.timeline()
     
     tl1.from("nav .logo , nav ",{
         y: -30,
         duration: 0.6,
         delay : 0.5,
         opacity : 0,
         stagger: 0.15
     })

     tl1.from("#profile .section__pic-container img",{
      x: -200,
      duration: 0.8,
      opacity : 0,
  },"-=0.7")

  tl1.from(".section__text p , .section__text h1"  ,{
    y: 30,
    duration: 0.6,
    opacity : 0,
    
},"-=0.7")

 tl1.from(".btn-container"  ,{
    x: -30,
    opacity : 0,
    duration: 0.6,
  
},"-=0.7")

 

tl1.from("#socials-container"  ,{
    y: 30,
    duration: 0.6,
    opacity : 0,
  
},"-=0.7")
}

function page2(){

  var tl2= gsap.timeline({
    scrollTrigger : {
      trigger: ".about",
      scroller:"body",
      start: "top 5%",
      end : "top -90%",
      scrub:2,
  
    },
  })


  tl2.from("#about .section__text__p1,#about .title",{
    y : -50,
    opacity: 0,
    duration: 1.6,
  })

  tl2.from(".section-container .section__pic-container",{
    x : -200,
    opacity: 0,
    duration: 1.6,
  },'-=0.5')

  tl2.from("#about .about-containers",{
    y : -50,
    opacity: 0,
    duration: 1.3,
  },"abc1")

  tl2.from("#about .text-container",{
    y : 50,
    opacity: 0,
    duration: 1.3,
  },"abc1")


}

function page3() {
  // Create a timeline for the #experience section
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#experience", // The section to trigger the animation
      start: "top 80%", // When the top of #experience reaches 80% of the viewport
      end: "bottom 90%", // When the bottom of #experience reaches 20% of the viewport
      scrub: 2, // Smooth animation on scroll
      
    },
  });

  // Animate the title and paragraph
  tl3.from("#experience .section__text__p1, #experience .title", {
    y: 50, // Move upwards
    opacity: 0, // Start transparent
    duration: 0.5, // Animation duration
    stagger: 0.2, // Delay between animations
  });

  // Animate the sub-titles
  tl3.from("#experience .experience-sub-title", {
    x: -50, // Slide in from the left
    opacity: 0, // Start transparent
    duration: 0.5,
    stagger: 0.3, // Delay between sub-titles
  });

  // Animate the articles
  tl3.from("#experience .article-container article", {
    scale: 0.9, // Slightly smaller at start
    opacity: 0, // Start transparent
    duration: 0.8,
    stagger: 0.2, // Animate articles one after another
  });
}

function page4() {
  // Create a timeline for the #projects section
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects", // The section to trigger the animation
      start: "top 80%", // Animation starts when the top of #projects reaches 80% of the viewport
      end: "bottom 90%", // Ends when the bottom of #projects reaches 20% of the viewport
      scrub: 2, // Smooth scrolling animation
    },
  });

  // Animate the section title and description
  tl4.from("#projects .section__text__p1, #projects .title", {
    y: 50, // Move up from below
    opacity: 0, // Start fully transparent
    duration: 1,
    stagger: 0.2, // Stagger the animations slightly
  });

  // Animate each project container
  tl4.from("#projects .details-container", {
    y: 100, // Slide in from below
    opacity: 0, // Start fully transparent
    duration: 1,
    stagger: 0.3, // Animate containers one after another
  });

  // Animate the buttons
  tl4.from("#projects .btn-container", {
    scale: 0.7, // Slightly shrink at the start
 
    duration: 0.8,
    stagger: 0.2, // Animate buttons one after another
  });
}

function page5() {
  // Create a timeline for the #contact section
  const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact", // The section to trigger the animation
      start: "top 80%", // Animation starts when the top of #contact reaches 80% of the viewport
      end: "bottom 75%", // Ends when the bottom of #contact reaches 20% of the viewport
      scrub: 2, // Smooth scrolling animation
      markers: true, // Debug markers (remove in production)
    },
  });

  // Animate the section title and description
  tl5.from("#contact .section__text__p1, #contact .title", {
    y: 50, // Move up from below
    opacity: 0, // Start fully transparent
    duration: 1,
    stagger: 0.2, // Animate title and text one after another
  });

  // Animate the contact info containers
  tl5.from("#contact .contact-info-container", {
    x: -50, // Slide in from the left
    opacity: 0, // Start fully transparent
    duration: 1,
    stagger: 0.3, // Animate each container one after another
  });

  // Animate the footer navigation links
  tl5.from("footer .nav-links li", {
    y: 20, // Move up from below
    opacity: 0, // Start fully transparent
    duration: 0.5,
    stagger: 0.2, // Animate each list item one after another
  });

  // Animate the copyright text
  tl5.from("footer p", {
    scale: 0.9, // Slightly shrink at the start
    opacity: 0, // Start fully transparent
    duration: 0.8,
  });
}
page1()
page2()
page3()
page4()
page5()


