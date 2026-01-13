
var tl = gsap.timeline();
var cursor = document.querySelector("#cursor");
var page7 = document.querySelector("#page7");
var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");


// custom cursor animation
page7.addEventListener("mousemove", function(dets){
 
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.5
  })

})


//scroll text animation
gsap.from("#page1 h1", {
  opacity: 0,
  y: -300,
  duration: 2,
  ease: "back.out"
})

//arrow animation
gsap.to("#page1 p", {
  y: 10,
  duration: 0.5,
  repeat: -1,
  yoyo: 1
  
})

//EXPERIENCE, the horizontal scroll
gsap.to("#page2 h1", {
  transform: "translateX(-210%)",
  scrollTrigger:{
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -250%",
    scrub: 2,
    pin:true,
  
  }
})


//The three box animations
gsap.to("#page3 #box1", {
  x: 1200,
  rotate: 360,
  borderRadius: "50%",
  scrollTrigger:{
    trigger: "#page3",
    scroller: "body",
    start: "top 0%",
    end: "top -200%",
    scrub: 2,
    pin: true
  }
})

gsap.to("#page3 #box2", {
  x: 1200,
  rotate: 360,
  backgroundColor: "green",
  scrollTrigger:{
    trigger: "#page3",
    scroller: "body",
    start: "top 0%",
    end: "top -200%",
    scrub: 2,
  }
})

gsap.to("#page3 #box3", {
  x: 1200,
  backgroundColor: "blue",
  scale: 0.5,
  scrollTrigger:{
    trigger: "#page3",
    scroller: "body",
    start: "top 0%",
    end: "top -200%",
    scrub: 2,
    
  }
})

//The yoyo box animation
gsap.to("#page4 #box", {
  x: 1200,
  rotate: 360,
  backgroundColor: "red",
  duration: 2,
  delay: 1,
  repeat: -1,
  yoyo: true
  
  }
)
  
//News headline animation
gsap.to("#page5 h1", {
  x: "-100%",
  duration: 20,
  delay: 1,
  repeat: -1,
  ease: "linear"
})



//Guitar String animation
var path = `M 10 50 Q 250 50 490 50`

var finalPath = `M 10 50 Q 250 50 490 50`


var string = document.querySelector("#page6 svg")

string.addEventListener("mousemove", function(dets){
    path =`M 10 50 Q 250 ${dets.y} 490 50`
    gsap.to("svg path",{
      attr: {d:path},
      duration: 0.3,
      ease: "power3.out"
    })
})

string.addEventListener("mouseleave", function(){
  gsap.to("svg path", {
    attr: {d:finalPath},
    duration: 1.5,
    ease: "elastic.out"
  })
})


//Ham menu open and close animation
tl.to("#full",{
  right: 0,
  duration: 0.3
})

tl.from("#full i", {
  opacity: 0,
  scale: 0.2,
  duration: 0.3
})

tl.from("#full h4", {
  x: 100,
  duration:0.5,
  stagger: 0.2,
  opacity: 0
})

tl.pause();


menu.addEventListener("click", function(){
  tl.play();
})

cross.addEventListener("click",function(){
  tl.reverse();
})




