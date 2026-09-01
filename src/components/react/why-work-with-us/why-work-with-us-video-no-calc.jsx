



// import in Fragment, useEffect, useRef hooks
import { Fragment, useEffect, useRef } from 'react';
// import in Sphere Mesh Distort Blob from lama dev
import SphereMeshDistortBlob from '../3d/react-three-fiber/lama-dev/sphere-2/sphere-mesh-distort-blob';
// import in Bootstrap chart
import { BsFillBarChartFill } from "react-icons/bs";
// import in Font Awesome half shield
import { FaShieldHalved } from "react-icons/fa6";
// import in Font Awesome map marker
import { FaMapMarkerAlt } from "react-icons/fa";
// import in Font Awesome search icon
import { FaSearch } from "react-icons/fa";
// import in Font Awesome building
import { FaBuilding } from "react-icons/fa";
// import in Bootstrap people fill
import { BsFillPeopleFill } from 'react-icons/bs';
// import in GitHub awareness
// import { GiAwareness } from 'react-icons/gi';
// import in the scss file
import styles from './why-work-with-us-video-no-calc.module.scss';



export default function WhyWorkWithUsComponent() {

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
    const blobRef      = useRef();

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
            rootMargin : '0px 0px -50px 0px' // this works like margin in css and this
            // can help us control when the intersection observer fires

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

                        // test
                        // ==============================
                        // important comment
                        // ==============================
                        // log the entry to console so that we can see the 
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        // console.log( entry );

                        // ==============================
                        // animation - fade in and slide up
                        // ==============================

                        // ==============================
                        // browserWidth > 620
                        // ==============================

                        if ( 
                            wrapperRef.current &&
                            ( browserWidth > 620 )
                        ) {

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

                        } // end of if ( browserWidth > 620 )

/*
                        // ==============================
                        // animation - fade in and slide in from the left
                        // ==============================

                        // ==============================
                        // browserWidth > 620
                        // ==============================

                        if ( 
                            wrapperRef.current &&
                            ( browserWidth > 620 )
                        ) {

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
                                    delay      : 1000,
                                    iterations : 1, // this is the default but leave for reference purposes
                                    fill       : "forwards" // this lets the " element retain the style values
                                    // from the last keyframe when the animation ends "
                
                                }

                            ); // end of badge6Ref.current.animate()

                            // ==============================
                            // blob
                            // ==============================

                            blobRef.current.animate(

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

                            ); // end of blobRef.current.animate()

                        } // end of if ( browserWidth > 620 )
*/
                        // ==============================
                        // animation - fade in and slide in from the left
                        // ==============================

                        // ==============================
                        // browserWidth <= 620
                        // ==============================

                        if ( 
                            wrapperRef.current &&
                            ( browserWidth <= 620 )
                        ) {

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

                        } // end of if ( browserWidth <= 620 )

                        // ==============================
                        // end of animation
                        // ==============================

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
            <div className={ styles.whyWorkWithUsContainer }>

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
                        Why Work With Us?
                    </h2>

                    <p>
                        {
                            /*  
                                Research shows that 97% of the people that want to learn
                                more about a local company do so via the internet. According
                                to Google, 76% of people who conduct a local search on their
                                smartphone visit a store within 24 hours and 28% of those
                                visits results in a purchase.
                            */
                        }
                    </p>

                    <p>
                        Our digital marketing solutions and custom websites help reach those
                        people that are searching for businesses like yours.
                    </p>

                    <p>We can help your business:</p>

                    {
                        /*
                            // ==============================
                            // container > div1 ( wrapper div ) > div1 ( wrapper div )
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
                                <BsFillBarChartFill style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Increase traffic, leads and sales</span>

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
                                <FaSearch style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Rank higher in organic search results</span>

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
                                <FaMapMarkerAlt style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Rank higher in the Google Map Pack</span>

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
                                <FaShieldHalved style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Gain online visibility and authority</span>


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
                                <FaBuilding style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Build relationships with referral partners</span>

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
                                <BsFillPeopleFill style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Build relationships with potential customers</span>

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
                                // 3d blob
                                // ==============================
                            */
                        }
                        <div
                            ref={ blobRef } 
                        >
                            <SphereMeshDistortBlob />
                        </div>

                    </div>

                </div>

            </div>

        </Fragment>

    );

} // end of WhyWorkWithUsComponent


