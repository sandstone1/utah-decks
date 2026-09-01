

// import in Fragment, useEffect, useRef hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the scss file
import styles from './infinite-scroll.module.scss';



export default function InfiniteScrollComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ isIntersecting, setIsIntersecting ] = useState( false );

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

    const wrapperRef       = useRef();
    const outerScrollerRef = useRef();
    const innerScrollerRef = useRef();
    const hasAnimatedRef   = useRef( false );

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
                        // setIsIntersecting to true and use in useEffect 2
                        // ==============================

                        setIsIntersecting( true );
    
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
                                            transform : "translateY( 6.0rem )"
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
    // useEffect 2
    // ==============================

    // ==============================
    // purpose - create an infiniate scroller
    // ==============================
/*
    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // if already run once, exit immediately
        if ( hasAnimatedRef.current ) return;
        if ( !innerScrollerRef.current ) return;

        // mark as run
        hasAnimatedRef.current = true;

        // ==============================
        // code block 2
        // ==============================

        // make sure innerScrollRef exist
        if ( innerScrollerRef.current ) {

            // get the direct children of the inner scroller element and convert
            // them into a JavaScript array
            const scrollContent = Array.from( innerScrollerRef.current.children );

            // now we can loop over the array and do something to each item in the
            // array
            scrollContent.forEach( ( item ) => {

                // create an exact copy of each <li> element and true means deep clone
                // - copies the element and all its children / text inside the li item
                const duplicatedItem = item.cloneNode( true );
                // tells screen readers to ignore the duplicated items
                duplicatedItem.setAttribute( 'aria-hidden', 'true' );
                // adds the cloned <li> to the end of the <ul> so if we have 10 cities
                // to start with, after this code runs we now have 20 cities and the
                // animation scrolls through all 20 but since it's the same content it
                // looks infinite
                innerScrollerRef.current.appendChild( duplicatedItem );

            } ) // end of scrollContent.forEach()

        } // end of if ()
    
    }, [] ); // end of useEffect 2
*/


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
            <div className={ styles.infiniteScrollContainer }>

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

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 1 ( the h2 )
                            // ==============================
                        */
                    }
                    <div>

                        <h2>
                            Cities where the local business ranked #1
                        </h2>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 ( infinite scroller )
                            // ==============================
                        */
                    }
                    <div ref={ outerScrollerRef }>

                        <ul ref={ innerScrollerRef }>
                        
                            {/* original items */}
                            <li>Sandy</li>
                            <li>Park City</li>
                            <li>Lehi</li>
                            <li>Draper</li>
                            <li>Tooele</li>
                            <li>South Jordan</li>
                            <li>American Fork</li>
                            <li>Herriman</li>
                            <li>Saratogo Springs</li>
                            <li>Holladay</li>
                            <li>Orem</li>
                            <li>West Jordan</li>
                            <li>Alpine</li>
                            <li>Heber</li>

                            { /* duplicates hardcoded items */ }
                            <li aria-hidden="true">Sandy</li>
                            <li aria-hidden="true">Park City</li>
                            <li aria-hidden="true">Lehi</li>
                            <li aria-hidden="true">Draper</li>
                            <li aria-hidden="true">Tooele</li>
                            <li aria-hidden="true">South Jordan</li>
                            <li aria-hidden="true">American Fork</li>
                            <li aria-hidden="true">Herriman</li>
                            <li aria-hidden="true">Saratogo Springs</li>
                            <li aria-hidden="true">Holladay</li>
                            <li aria-hidden="true">Orem</li>
                            <li aria-hidden="true">West Jordan</li>
                            <li aria-hidden="true">Alpine</li>
                            <li aria-hidden="true">Heber</li>


                        </ul>

                    </div>

                </div>

            </div>

        </Fragment>

    );

} // end of InfiniteScrollComponent

