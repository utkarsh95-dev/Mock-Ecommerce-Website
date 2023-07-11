import '../styles/Intro.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger from gsap
import { useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll'; // Import LocomotiveScroll
// import introimg from '../assets/intro-img.png';
import Main from '../assets/intro-main.jpg';
// import intropng from '../assets/intro-sm1.png';
// import intropng1 from '../assets/intro-sm2.png';
// import intropng2 from '../assets/intro-sm3.png';
import intropng3 from '../assets/product1.webp';
// import mob1 from '../assets/product2.webp';
import mob2 from '../assets/product3.webp';
import mob3 from '../assets/product4.webp';
// import mob4 from '../assets/product5.webp';
import mob5 from '../assets/product6.webp';
import mob6 from '../assets/product7.webp';
// import spanimg from '../assets/image.jpg';
import LaunchIcon from '@mui/icons-material/Launch';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Instagram } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline'; 
import Navigation from './Navigation';

const Intro = () => {
  const targetRef = useRef(null);

 
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: targetRef.current,
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "intro-main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".intro-main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".intro-main").style.transform ? "transform" : "fixed"
// });

 

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
//   }
// , []);

   
  //   useEffect(()=>{
  //     gsap.to("#intro-img",{
  //       scrollTrigger:{
  //           trigger:`.intro-div1`,
  //           start:`bottom top`,
  //           end:`center top`,
  //           pin:true,
  //           scroller:`.intro-main`,
  //           scrub:.5,
  //       },
  //       stagger:.2,
  //       x:-1250,
  //       y:-200,
  //       duration:3,
  //       ease: "circ"
  //   })


  //   gsap.to("#intro-img0",{
  //     scrollTrigger:{
  //       trigger:`.intro-div1`,
  //       start:`bottom top`,
  //       end:`center top`,
  //         pin:true,
  //         scroller:`.intro-main`,
  //         scrub:.5,
  //     },
  //     stagger:.2,
  //     x:550,
  //     ease: "circ",
  //     // y:100,
  //     duration:3
  // })
  //   })

  //   useEffect(()=>{
  //     gsap.to(".intro-div1 #png1", { x: 800,y:100, duration: 0.8})
  //     gsap.to(".intro-div1 #png2", { x:900, y:100,duration: 0.8,delay:0.5})
  //     gsap.to(".intro-div1 #png3", { x: 670, y:300, duration: 0.8,delay:1})
  //     gsap.to(".intro-div1 #png4", { x: 750, y:300, duration: 0.8,delay:1.5})
  //     // gsap.to("#intro-img", { x: 50, duration: 1})

  //   },[]);


  return (
    <>
    <Navigation/>
    <div className="intro-main" ref={targetRef}>
      <div className="intro-div1" data-scroll data-scroll-speed="-4">
       <h1>ECOMMERCE STORE</h1>
      <p style={{color:"#444",lineHeight:"25px",fontSize:"12px"}}>This Ecommmerce Store Application is Part of a Open Source Project & This is a FullStack Web Project Made Using The Following Technologies, it has a backend and an front end integrated in it also has a fully functional ecommerce webstore, All rights are reserved for this website please Go ahead & <b style={{color:"#000"}}>SHOP IN OUT STORE</b></p>

        {/* <p id="intro-p1"></p> */}
          
      </div>
      <div className="intro-main-abs">
        <div className="intro-wrapper">
          <img src={Main} alt="Main Image" />
          <div className="intro-wrapper-text">
            <span><h1>Shop Latest Trends</h1> <LaunchIcon/></span>
          </div>
        </div>
      </div>
      <div id="intro-page2">
      <div id="intro-sub1-p2">
        <img src={intropng3} alt="image" id="intropng3" />
        <img src={mob2} alt="image" id="mob2"/>
      </div>
      <div id="intro-sub2-p2">
        <img src={mob3} alt="image" id="mob3" style={{width:"400px",height:"250px", aspectRatio:"16/9"}}/>
        <img src={mob5} alt="image" id="mob5" style={{width:"130px",height:"170px"}}/>
        <img src={mob6} alt="prouduct"id="mob6" style={{width:"240px", height:"180px"}}/>
      </div>
      </div>

      <div className="intro-abs-new">
        <h1>
          CHOOSE FROM WIDE RANGE OF PRODUCTS 
        </h1>
        <p style={{fontFamily:`'Roboto', sans-serif`, color:"#999"}}>Lifestyle, Technology, Health & Wellness, Gadgets, Gaming, Groceries & <b><span style={{color:'#666'}}>Much More...</span></b></p>

      </div>
       <footer className='intro-footer'>
        <div className="intro-footer-1 intro-foo">
          <h1 className='intro-foo-head'>Contact Us</h1>
           <span><FacebookIcon/>Facebook<LaunchIcon/></span>
            <span><TwitterIcon/>Twitter<LaunchIcon/></span> 
           <span> <LinkedInIcon/>LinkedIn<LaunchIcon/></span>
           <span> <Instagram/>Instagram<LaunchIcon/></span>
        </div>
        <div className="intro-footer-2 intro-foo">
          <h1 className='intro-foo-head'>Products</h1>
          <p>Free delivery</p>
          <p>Shipped the same day</p>
          <p>Lowest prices</p>
          <p>Highest Discounts</p>
          <p>Ecommerce Dropshipping</p>
        </div>
        <div className="intro-footer-3 intro-foo">
          <h1 className='intro-foo-head'>Sign Up for Newsletter</h1>
          <p>Our vision of the future</p>
          <p>Work At Ecommerce</p>
          <span><p>SignUp for our weekly news letter <MailOutlineIcon/></p></span>
        </div>
        <div className="intro-footer-4 intro-foo"></div>
       </footer>
    </div>
    </>
  );
};

export default Intro;
