


// import in Fragment, useEffect, useRef, useState hooks
import { Fragment, useRef, useEffect, useState } from 'react';
// import in Animating Gradient Blur Component
import AnimatingGradientBackground from '../animations/animating-gradient/animating-gradient-background-v8';
// import in the Circle component
import CircleComponent from '../animations/circle/circle-v5';
// import in the Tabler number one icon
import { TbCircleNumber1Filled } from "react-icons/tb";
// import in the scss file
import styles from './case-study-v1.module.scss';



export default function CaseStudyComponent() {

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
    const wrapperRef = useRef();

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
    // purpose - slide up the wrapper div content and fade in the blob
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
        const wrapperOptions = {

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
        // wrapperObserver
        const wrapperObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, wrapperObserver ) { 

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

                            } // end of if ( browserWidth > 620 )

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

                        } // end of if ( entry.boundingClientRect.top <= 0 ) {}


                        // once the observation happens then we want to unobserve the DOM
                        // element
                        wrapperObserver.unobserve( wrapperRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, wrapperObserver )

            wrapperOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        wrapperObserver.observe( wrapperRef.current );

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
            <div className={ styles.caseStudyContainer }>

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

                    <h2>
                        Case Study
                    </h2>

                    {
                        /*
                            <span>#1</span>
                        */
                    }

                    <p>
                        By focusing on local SEO, we ranked a local business{' '}
                        number <TbCircleNumber1Filled style={ { verticalAlign: '-11.5px', fontSize: '4.0rem', margin: '0 auto', color: 'var( --gray-225)' } } />{' '}
                        for their primary service category keyword across the greater Salt Lake City area.
                    </p>

                    <p>
                        Each circle on the map below represents the business&apos;s position in the
                        Google Map Pack for that location. From north to south, the map runs from just
                        north of downtown Salt Lake City to Provo. From east to west, the map runs
                        from Park City to Tooele. The combined service area population is roughly
                        2 million people.
                    </p>

                    <p>
                        By dominating their local market, we estimate the business generated
                        approximately <span>$50k-$100k in additional revenue per month.</span>
                    </p>

                    <div>

                        <picture>
                            <source 
                                srcSet={ '/images/underline_yellow_6_512_56.png' }
                                type={ 'image/png' }
                            />
                            <img
                                src={ '/images/underline_yellow_6_512_56.png' }
                                loading={ 'lazy' }
                                alt={ 'Yellow underline' }
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 ( wrapper div ) > div 5 > picture ( picture of Utah Stem
                            // Cells Google Map Pack Ranking for stem cell therapy on 8-13-25 )
                            // ==============================

                            // ==============================
                            // remember, add the width and height to the image tag so that the content
                            // below this div does not appear for a split second on page load
                            // ==============================

                            // ==============================
                            // remember, in order to make the width and height responsive, we had to
                            // set the width percentage in the css file and on the parent div
                            // ==============================
                        */
                    }
                    <picture>
                        <source 
                            srcSet={ '/images/google_map_pack_ranking_04.webp' }
                            type={ 'image/webp' }
                        />
                        <img
                            src={ '/images/google_map_pack_ranking_04.webp' }
                            width={ '800px' }
                            height={ '826px' }
                            loading={ 'lazy' }
                            // fetchPriority={ 'high' }
                            alt={ 'Google Map Pack ranking' }
                        />
                    </picture>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 2 ( circle component )
                        // ==============================
                    */
                }
                {
                    /*
                        <CircleComponent />
                    */
                }
                <CircleComponent />

                {
                    /*
                        // ==============================
                        // container > div 3 ( animating backgrounds )
                        // ==============================
                    */
                }
                {
                    /*
                        <AnimatingGradientBackground />
                    */
                }
                <div>

                    <AnimatingGradientBackground />
    
                </div>

            </div>

        </Fragment>

    );

} // end of CaseStudyComponent


