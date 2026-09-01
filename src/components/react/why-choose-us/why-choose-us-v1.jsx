



// import in Fragment, useEffect, useRef hooks
import { Fragment, useRef, useEffect } from 'react';
// import in Bootstrap chart
import { BsFillBarChartFill } from "react-icons/bs";
// import in Font Awesome half shield
import { FaShieldHalved } from "react-icons/fa6";
// import in Font Awesome map marker
import { FaMapMarkerAlt } from "react-icons/fa";
// import in Font Awesome search icon
import { FaSearch } from "react-icons/fa";
// import in Game Icons abstract
import { GiAbstract038 } from "react-icons/gi";
// import in the Font Awesome cog icon
// import { FaCog } from "react-icons/fa";
// import in the Font Awesome robot icon
import { FaRobot } from "react-icons/fa6";
// import in the Font Awesome ranking star icon
import { FaRankingStar } from "react-icons/fa6";
// import in the Material Design briefcase icon
import { MdBusinessCenter } from "react-icons/md";
// import in the Font Awesome map icon
import { FaMap } from "react-icons/fa";
// import in the Font Awesome chart line icon
import { FaChartLine } from "react-icons/fa6";
// import in the Font Awesome sun icon
import { FaSun } from "react-icons/fa";
// import in the Font AWesome cash refister icon
import { FaCashRegister } from "react-icons/fa6";
// import in the scss file
import styles from './why-choose-us-v1.module.scss';



export default function WhyChooseUsComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // ==============================
    // zustand state
    // ==============================

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // define variables
    // ==============================

    let browserWidth;
    
    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element(s)
    const wrapperRef   = useRef();
    const div2h1Ref    = useRef();
    const badge1Ref    = useRef();
    const badge2Ref    = useRef();
    const badge3Ref    = useRef();
    const badge4Ref    = useRef();
    const badge5Ref    = useRef();
    const badge6Ref    = useRef();
    // const blobRef      = useRef();
    const pictureRef   = useRef();

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // useEffect 1
    // ==============================

    // ==============================
    // purpose - fade in and slide in from the left our badges and blob
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // get the browser width
        // ==============================

        browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // intersection observer 1
        // ==============================

        // ==============================
        // use the web animations api for the animation
        // ==============================

        // options object
        const badgesOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0.0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px -200px 0px' // this works like margin in css and this
            // can help us control when the intersection observer fires ( remember, this
            // component has 0 extra rem on the top so -50 - 0 = -110 )

            // remember, it's the bottom rootMargin that controls when the element
            // isIntersecting

            // remember, a positive 400px bottom root margin means that isIntersecting
            // will be true once the user gets to a point in the code that is 400px
            // above the ref; in other words, a positive root margin is great for pre
            // loading images

            // remember, a negative 50px bottom root margin means that isIntersecting
            // will be true once the user gets to a point in the code that is 50px
            // below the ref; in other words, a negative root margin is great if want
            // to fade in text or slide up some elements

        } // end of options object

        // create the intersection observer and save the result to the const
        // badgesObserver
        const badgesObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, badgesObserver ) { 

                entries.forEach( ( entry ) => {

                    // if our element is in the viewport then do something
                    if ( entry.isIntersecting ) {

                        // log the entry to console so that we can see the 
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        // console.log( entry );

                        // test
                        // ==============================
                        // important comment
                        // ==============================
                        // if the user ever reloads the page we can use
                        // entry.boundingClientRect.top to tell where the user is at
                        // on the page and then act accordingly
                        // console.log( entry.boundingClientRect.top );

                        // ==============================
                        // TEST 1 ( see TEST 2 below )
                        // ==============================
    
                        // ==============================
                        // entry.boundingClientRect.top > 0 if statement
                        // ==============================

                        // ==============================
                        // additional check
                        //
                        // remember, we want to check and see if the user is scrolling
                        // up or down and depending on the direction we want different
                        // code to run
                        //
                        // remember, this check is only useful if the user had reloaded
                        // the page and happens to be underneth the container and the user
                        // is scrolling up to this container and the reason this
                        // code is useful is because it prevents the opacity and slide up
                        // animation from running a second time as the user is scrolling
                        // up to this container
                        // ==============================

                        // ==============================
                        // entry.boundingClientRect.top definition : " This property tells
                        // you the vertical position of the element relative to the top of
                        // the viewport. If it's less than 0, the element is above the top
                        // edge of the viewport. "
                        // ==============================

                        // determine if the user is scrolling down and if so then run
                        // our opacity and slide up animation
                        if ( entry.boundingClientRect.top > 0 ) {

                            // Element entered from the bottom or when the user is scrolling
                            // down
                            // console.log( 'Element entered from the bottom' );

                            // ==============================
                            // animation - fade in and slide up
                            // ==============================

                            // ==============================
                            // browserWidth > 620
                            // ==============================

                            if ( 
                                wrapperRef.current &&
                                badge1Ref.current &&
                                badge2Ref.current &&
                                badge3Ref.current &&
                                badge4Ref.current &&
                                badge5Ref.current &&
                                badge6Ref.current &&
                                ( browserWidth > 620 )
                            ) {

                                // ==============================
                                // wrapper div
                                // ==============================

                                wrapperRef.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 3.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 0,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of wrapperRef.current.animate()

                                // ==============================
                                // badge 1
                                // ==============================

                                badge1Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 50% )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }


                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 600,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge1Ref.current.animate()

                                // ==============================
                                // badge 2
                                // ==============================

                                badge2Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 50% )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }


                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 600,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge2Ref.current.animate()

                                // ==============================
                                // badge 3
                                // ==============================

                                badge3Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 50% )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }


                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 800,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge3Ref.current.animate()

                                // ==============================
                                // badge 4
                                // ==============================

                                badge4Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 50% )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }


                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 800,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge4Ref.current.animate()

                                // ==============================
                                // badge 5
                                // ==============================

                                badge5Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 50% )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }


                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 1000,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge5Ref.current.animate()

                                // ==============================
                                // badge 6
                                // ==============================

                                badge6Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 50% )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }


                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 1000,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge6Ref.current.animate()

                                // ==============================
                                // blob
                                // ==============================
/*
                                blobRef.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 0 )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 1200,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of blobRef.current.animate()
*/
                                // ==============================
                                // picture
                                // ==============================

                                pictureRef.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            // transform : "translateY( 0 )"
                                        }, 
                                        {
                                            opacity   : 0.15,
                                            // transform : "translateY( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 1200,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of pictureRef.current.animate()

                            } // end of if ( browserWidth > 620 )

                            // ==============================
                            // animation - fade in and slide in from the left
                            // ==============================

                            // ==============================
                            // browserWidth <= 620
                            // ==============================

                            if ( 
                                wrapperRef.current &&
                                badge1Ref.current &&
                                badge2Ref.current &&
                                badge3Ref.current &&
                                badge4Ref.current &&
                                badge5Ref.current &&
                                badge6Ref.current &&
                                ( browserWidth <= 620 )
                            ) {

                                // ==============================
                                // wrapper div
                                // ==============================

                                wrapperRef.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateX( -2.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 0,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of wrapperRef.current.animate()

                                // ==============================
                                // badge 1
                                // ==============================

                                badge1Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateX( -20.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateX( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 200,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge1Ref.current.animate()

                                // ==============================
                                // badge 2
                                // ==============================

                                badge2Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateX( -20.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateX( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 400,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge2Ref.current.animate()

                                // ==============================
                                // badge 3
                                // ==============================

                                badge3Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateX( -20.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateX( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 600,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge3Ref.current.animate()

                                // ==============================
                                // badge 4
                                // ==============================

                                badge4Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateX( -20.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateX( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 800,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge4Ref.current.animate()

                                // ==============================
                                // badge 5
                                // ==============================

                                badge5Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateX( -20.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateX( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 1000,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge5Ref.current.animate()

                                // ==============================
                                // badge 6
                                // ==============================

                                badge6Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateX( -20.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateX( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 1200,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge6Ref.current.animate()
/*
                                // ==============================
                                // blob
                                // ==============================

                                blobRef.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            // transform : "translateX( -20.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            // transform : "translateX( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 1400,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of blobRef.current.animate()
*/
                                // ==============================
                                // picture
                                // ==============================

                                pictureRef.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            // transform : "translateX( -20.0rem )"
                                        }, 
                                        {
                                            opacity   : 0.15,
                                            // transform : "translateX( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 1400,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of pictureRef.current.animate()

                            } // end of if ( browserWidth <= 620 )

                            // ==============================
                            // end of animation
                            // ==============================

                        } // end of if ( entry.boundingClientRect.top > 0 ) {}

                        // ==============================
                        // TEST 2
                        // ==============================

                        // ==============================
                        // entry.boundingClientRect.top <= 0 if statement
                        // ==============================

                        // remember, since we have " position : sticky " we will either get a positive
                        // number ( user scrolling down ) or 0 ( user scrolling up or on top of the
                        // section )
                        if ( entry.boundingClientRect.top <= 0 ) {

                            // Element entered from the bottom or when the user is scrolling
                            // up
                            // console.log( 'Element entered from the top' );

                            // if the user is scrolling up, just show the elements without any animation
                            wrapperRef.current.style.opacity                  = 1;
                            wrapperRef.current.style.transform                = 'translateX( 0 )';
                            wrapperRef.current.style.transitionDuration       = '400ms';
                            wrapperRef.current.style.transitionTimingFunction = 'ease-out';
                            badge1Ref.current.style.opacity                   = 1;
                            badge1Ref.current.style.transform                 = 'translateX( 0 )';
                            badge1Ref.current.style.transitionDuration        = '400ms';
                            badge1Ref.current.style.transitionTimingFunction  = 'ease-out';
                            badge2Ref.current.style.opacity                   = 1;
                            badge2Ref.current.style.transform                 = 'translateX( 0 )';
                            badge2Ref.current.style.transitionDuration        = '400ms';
                            badge2Ref.current.style.transitionTimingFunction  = 'ease-out';
                            badge3Ref.current.style.opacity                   = 1;
                            badge3Ref.current.style.transform                 = 'translateX( 0 )';
                            badge3Ref.current.style.transitionDuration        = '400ms';
                            badge3Ref.current.style.transitionTimingFunction  = 'ease-out';
                            badge4Ref.current.style.opacity                   = 1;
                            badge4Ref.current.style.transform                 = 'translateX( 0 )';
                            badge4Ref.current.style.transitionDuration        = '400ms';
                            badge4Ref.current.style.transitionTimingFunction  = 'ease-out';
                            badge5Ref.current.style.opacity                   = 1;
                            badge5Ref.current.style.transform                 = 'translateX( 0 )';
                            badge5Ref.current.style.transitionDuration        = '400ms';
                            badge5Ref.current.style.transitionTimingFunction  = 'ease-out';
                            badge6Ref.current.style.opacity                   = 1;
                            badge6Ref.current.style.transform                 = 'translateX( 0 )';
                            badge6Ref.current.style.transitionDuration        = '400ms';
                            badge6Ref.current.style.transitionTimingFunction  = 'ease-out';
                            // blobRef.current.style.opacity                     = 1;
                            // blobRef.current.style.transitionDuration          = '400ms';
                            // blobRef.current.style.transitionTimingFunction    = 'ease-out';
                            // blobRef.current.style.transitionDelay             = '400ms';
                            pictureRef.current.style.opacity                     = 1;
                            pictureRef.current.style.transitionDuration          = '400ms';
                            pictureRef.current.style.transitionTimingFunction    = 'ease-out';
                            pictureRef.current.style.transitionDelay             = '400ms';

                        } // end of if ( entry.boundingClientRect.top <= 0 ) {}


                        // once the observation happens then we want to unobserve the DOM
                        // element
                        badgesObserver.unobserve( wrapperRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, badgesObserver )

            badgesOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        badgesObserver.observe( wrapperRef.current );

        // ==============================
        // end of intersection observer 1
        // ==============================

    }, [] ); // end of useEffect 1

    // ==============================
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================


    return (

        <Fragment>

            {
                /*
                    // ==============================
                    // container
                    // ==============================
                */
            }
            <div className={ styles.whyChooseUsContainer }>

                {
                    /*
                        // ==============================
                        // wave shape
                        // ==============================
                    */
                }
                {
                    /*
                        // ==============================
                        // container > div 1
                        // ==============================
                    */
                }
                <div>

                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>

                    </svg>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div )
                        // ==============================
                    */
                }
                <div
                    ref={ wrapperRef }
                >

                    <h2
                        ref={ div2h1Ref }
                    >
                        <span>Why Choose</span> Canyon Sky Stem Cells
                    </h2>

                    {
                        /*
                            // ==============================
                            // container > div1 ( wrapper div ) > div2 ( wrapper div )
                            // ==============================
                        */
                        
                    }
                    <div>

                        {
                            /*
                                // ==============================
                                // badge 1
                                // ==============================
                            */
                        }
                        <div
                            ref={ badge1Ref }
                        >

                            <span>
                                <FaMap style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Rank higher in the Google Map Pack</span>

                        </div>

                        {
                            /*
                                // ==============================
                                // badge 2
                                // ==============================
                            */
                        }
                        <div
                            ref={ badge2Ref }    
                        >

                            <span>
                                <FaRobot style={ { verticalAlign: '-5px', fontSize: '2.6rem' } } />
                            </span>
                            <span></span>
                            <span>Implement AI agents that increase revenue</span>

                        </div>

                        {
                            /*
                                // ==============================
                                // badge 3
                                // ==============================
                            */
                        }
                        <div
                            ref={ badge3Ref }
                        >

                            <span>
                                <MdBusinessCenter style={ { verticalAlign: '-5px', fontSize: '2.5rem' } } />
                            </span>
                            <span></span>
                            <span>Handle the operational tasks that slow you down</span>

                        </div>

                        {
                            /*
                                // ==============================
                                // badge 4
                                // ==============================
                            */
                        }
                        <div
                            ref={ badge4Ref }
                        >

                            <span>
                                <FaCashRegister style={ { verticalAlign: '-5px', fontSize: '2.3rem' } } />
                            </span>
                            <span></span>
                            <span>Manage cash flow so you never miss a critical payment</span>

                        </div>

                        {
                            /*
                                // ==============================
                                // badge 5
                                // ==============================
                            */
                        }
                        <div
                            ref={ badge5Ref }
                        >

                            <span>
                                <FaSun style={ { verticalAlign: '-5px', fontSize: '2.6rem' } } />
                            </span>
                            <span></span>
                            <span>Increase citations and mentions in AI search results</span>

                        </div>

                        {
                            /*
                                // ==============================
                                // badge 6
                                // ==============================
                            */
                        }
                        <div
                            ref={ badge6Ref }
                        >

                            <span>
                                <GiAbstract038 style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Build a brand that stands out in a crowded market</span>

                        </div>

                        {
                            /*
                                {
                                    /*
                                        // ==============================
                                        // badge 7
                                        // ==============================
                                    */ /*
                                }
                                <div
                                    className={ styles.whyWorkWithUsContainerDiv1Div1Badge7 }
                                    ref={ badge7Ref }    
                                >

                                    <span>
                                        <FaBriefcase style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                                    </span>
                                    <span></span>
                                    <span>Unlock productivity gains through AI implementation</span>
                                    <span>Increase traffic, leads and sales</span>
                                    <span>Build online visibility and authority</span>
                                    <span>Build a strong and memorable brand</span>
                                    <span>Connect with potential customers</span>
                                    <span>Increase visibility in AI search results</span>
                                    <span>Achieve a higher perceived value in the market</span>
                                    <span>Provide important information to customers, suppliers and partners</span>
                                    <span>Our websites serve as the hub for digital marketing campaigns</span>
                                    <span>Give you one less thing to worry about</span>
                                    <span>Free up time and resources so that you can focus on the business</span>
                                    <span>Simplify the process of booking appointments online</span>
                                    <span>Build brand awareness</span>
                                    <span>Differentiate itself from competitors</span>

                                </div>

                                {
                                    /*
                                        // ==============================
                                        // badge 8
                                        // ==============================
                                    */ /*
                                }
                                <div 
                                    className={ styles.whyWorkWithUsContainerDiv1Div1Badge8 }
                                    ref={ badge8Ref }
                                >

                                    <span>
                                        <FaAward style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                                    </span>
                                    <span></span>
                                    <span>Increase user engagement with 3D animation and digital art</span>

                                </div>

                                {
                                    /*
                                        // ==============================
                                        // badge 9
                                        // ==============================
                                    */ /*
                                }
                                <div 
                                    // className={ styles.whyWorkWithUsContainerDiv1Div1Badge9 }
                                    // ref={ badge9Ref }
                                >

                                    <span>
                                        <FaBriefcase style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                                    </span>
                                    <span></span>
                                    <span>Help differentiate your business from competitors</span>

                                </div>
                            */
                        }

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 9 ( wave image )
                                // ==============================

                                // ==============================
                                // remember, add the width and height to the image tag so
                                // that the content below this div does not appear for a
                                // split second on page load
                                // ==============================
                            */
                        }
                        <picture
                            ref={ pictureRef }
                        >
                            <source 
                                srcSet={ '/images/mj_rocket_ship_05_612.webp' }
                                type={ 'image/webp' }
                            />
                            <img
                                src={ '/images/mj_rocket_ship_05_612.png' }
                                width={ 612 }
                                height={ 408 }
                                loading={ 'lazy' }
                                // fetchPriority={ 'high' }
                                alt={ 'Rocket Ship' }
                            />
                        </picture>

                    </div>

                </div>

            </div>

        </Fragment>

    );

} // end of WhyChooseUsComponent

