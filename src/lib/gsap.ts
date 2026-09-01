

// ==============================
// imports
// ==============================

// import in gsap
import gsap from 'gsap';
// import in ScrollTrigger
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import in SplitText
import { SplitText } from 'gsap/SplitText';
// import in SplitText
import { CustomEase } from 'gsap/CustomEase';
// register ScrollTrigger, SplitText, CustomEase
gsap.registerPlugin( 
    ScrollTrigger, 
    SplitText, 
    CustomEase 
);


// ==============================
// exports
// ==============================

export { gsap, ScrollTrigger, SplitText, CustomEase };

