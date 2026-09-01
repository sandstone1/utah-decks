



// import in Fragment, useRef, useEffect hooks
import { Fragment, useRef, useEffect } from 'react';
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
// import in Bootstrap people fill
import { BsFillPeopleFill } from 'react-icons/bs';
// import in GitHub awareness
import { GiAwareness } from 'react-icons/gi';
// import in the scss file
import styles from './why-work-with-us-image-calc.module.scss';



// remember we are passing down props from the parent or the index.js file and
// the prop being passed down is called " passParentToChildHeroContainerHeightValue "
export default function WhyWorkWithUsComponent( { passParentToChildHeroContainerHeightValue } ) {

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
    const containerRef = useRef();
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
    // purpose - fade in and slide up the 6 badges
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // determine browser width
        // ==============================

        browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // intersection observer 1
        // ==============================

        // ==============================
        // slide up the 6 badges
        // ==============================

        // ==============================
        // create an intersection observer to slide up the 6 badge elements
        // ==============================

        // options object
        const badgesRefOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0, // this value can be between 0 and 1 and 0 is the default and
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
        // badge1RefObserver
        const badgesRefObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, badgesRefObserver ) { 

                entries.forEach( ( entry ) => {

                    // if our element is outside the viewport then do nothing
                    if ( !entry.isIntersecting ) {

                        return;

                    } else {

                        // ==============================
                        // remember, on page load we need to run the if else statement below
                        // so that we can change the transition delay for browser widths
                        // less than or equal to 620px
                        // ==============================

                        // reference the specified DOM element below

                        if (
                            browserWidth > 620
                        ) {

                            // log the entry to console so that we can see the 
                            // IntersectionObserverEntry object and what we are concerned
                            // with is the isIntersecting value
                            console.log( entry );

                            // to make this work :
                            // step 1 - we need to add " opacity : 0; " and
                            // " transform : translateY( 50% ); " and
                            // " transition : opacity 300ms ease-in delay, transform 400ms ease-in delay; "
                            // to the element in the css file
                            badge1Ref.current.style.opacity   = 1;
                            badge1Ref.current.style.transform = 'translateY( 0 )';
                            badge2Ref.current.style.opacity   = 1;
                            badge2Ref.current.style.transform = 'translateY( 0 )';
                            badge3Ref.current.style.opacity   = 1;
                            badge3Ref.current.style.transform = 'translateY( 0 )';
                            badge4Ref.current.style.opacity   = 1;
                            badge4Ref.current.style.transform = 'translateY( 0 )';
                            badge5Ref.current.style.opacity   = 1;
                            badge5Ref.current.style.transform = 'translateY( 0 )';
                            badge6Ref.current.style.opacity   = 1;
                            badge6Ref.current.style.transform = 'translateY( 0 )';
                            blobRef.current.style.opacity     = 1;
                            // blobRef.current.style.transform   = 'translateY( 0 )';

                            // once the observation happens then we want to unobserve the DOM element
                            badgesRefObserver.unobserve( badge1Ref.current );
                            badgesRefObserver.unobserve( badge2Ref.current );
                            badgesRefObserver.unobserve( badge3Ref.current );
                            badgesRefObserver.unobserve( badge4Ref.current );
                            badgesRefObserver.unobserve( badge5Ref.current );
                            badgesRefObserver.unobserve( badge6Ref.current );
                            badgesRefObserver.unobserve( blobRef.current );

                        } else {

                            // log the entry to console so that we can see the 
                            // IntersectionObserverEntry object and what we are concerned
                            // with is the isIntersecting value
                            console.log( entry );

                            // to make this work :
                            // step 1 - we need to add " opacity : 0; " and
                            // " transform : translateY( 50% ); " and
                            // " transition : opacity 300ms ease-in delay, transform 400ms ease-in delay; "
                            // to the element in the css file
                            badge1Ref.current.style.opacity         = 1;
                            badge1Ref.current.style.transform       = 'translateY( 0 )';
                            badge1Ref.current.style.transitionDelay = '0ms'; // override the css value
                            badge2Ref.current.style.opacity         = 1;
                            badge2Ref.current.style.transform       = 'translateY( 0 )';
                            badge2Ref.current.style.transitionDelay = '200ms'; // override the css value
                            badge3Ref.current.style.opacity         = 1;
                            badge3Ref.current.style.transform       = 'translateY( 0 )';
                            badge3Ref.current.style.transitionDelay = '400ms'; // override the css value
                            badge4Ref.current.style.opacity         = 1;
                            badge4Ref.current.style.transform       = 'translateY( 0 )';
                            badge4Ref.current.style.transitionDelay = '600ms'; // override the css value
                            badge5Ref.current.style.opacity         = 1;
                            badge5Ref.current.style.transform       = 'translateY( 0 )';
                            badge5Ref.current.style.transitionDelay = '800ms'; // override the css value
                            badge6Ref.current.style.opacity         = 1;
                            badge6Ref.current.style.transform       = 'translateY( 0 )';
                            badge6Ref.current.style.transitionDelay = '1000ms'; // override the css value
                            blobRef.current.style.opacity           = 1;
                            // blobRef.current.style.transform         = 'translateY( 0 )';
                            blobRef.current.style.transitionDelay   = '1200ms'; // override the css value

                            // once the observation happens then we want to unobserve the DOM element
                            badgesRefObserver.unobserve( badge1Ref.current );
                            badgesRefObserver.unobserve( badge2Ref.current );
                            badgesRefObserver.unobserve( badge3Ref.current );
                            badgesRefObserver.unobserve( badge4Ref.current );
                            badgesRefObserver.unobserve( badge5Ref.current );
                            badgesRefObserver.unobserve( badge6Ref.current );
                            badgesRefObserver.unobserve( blobRef.current );

                        }

                    } // end of else if

                } ) // end of entries.forEach()

            }, // end of function( entries, badgeRefObserver )

            badgesRefOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        badgesRefObserver.observe( badge1Ref.current );
        badgesRefObserver.observe( badge2Ref.current );
        badgesRefObserver.observe( badge3Ref.current );
        badgesRefObserver.observe( badge4Ref.current );
        badgesRefObserver.observe( badge5Ref.current );
        badgesRefObserver.observe( badge6Ref.current );
        badgesRefObserver.observe( blobRef.current );

        // ==============================
        // end of intersection observer 1
        // ==============================

    }, [] ); // end of useEffect 1

    // ==============================
    // useEffect(); 2
    // ==============================

    // ==============================
    // purpose : set the top margin for the container div and use the value passed in from
    // the parent component or the index.js file as a prop
    // ==============================

    // ==============================
    // remember, to rerun useEffect every time the prop
    // " passParentToChildHeroContainerHeightValue " changes so that we keep changing
    // the container div top margin as the hero container height changes
    // ==============================

    useEffect( () => {

        // testing
        console.log( `the hero container height : ${ passParentToChildHeroContainerHeightValue } in the useEffect 3 function in the why-work-with-us-image-calc.js file` );

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // calculate browser width
        // ==============================

        // determine browser width
        browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        if (
            div2h1Ref.current &&
            browserWidth <= 1280
        ) {

            // if div2h1Ref exist and the browser width is less that or equal to 1280px
            // then adjust the container > div 1 > h2 margin top by the value below
            div2h1Ref.current.style.marginTop = `${ passParentToChildHeroContainerHeightValue }px`;

        } // end of if

        else {

            // replace any derived margin top value with the default css value if
            // the browser width is greater than 1280px since at that point we want
            // to use the css value
            div2h1Ref.current.style.marginTop = 'calc( 100vh - 160px )';

        } // end of else

    }, [ passParentToChildHeroContainerHeightValue ] ); // end of useEffect 2

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
            <div 
                className={ styles.whyWorkWithUsContainer }
                ref={ containerRef }
            >

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div )
                        // ==============================
                    */
                }
                <div>

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
                        people that are searching for businesses like your business.
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
                                <FaShieldHalved style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Gain online visibility and authority</span>

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
                                <FaSearch style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Rank higher in local organic search</span>

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
                                <BsFillPeopleFill style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Build relationships with potential customers</span>

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
                                <GiAwareness style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                            </span>
                            <span></span>
                            <span>Achieve a higher perceived value in the market</span>

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


