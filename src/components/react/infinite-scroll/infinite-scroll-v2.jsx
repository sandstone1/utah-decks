

// import in Fragment, useEffect, useRef hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the scss file
import styles from './infinite-scroll-v2.module.scss';



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

    const wrapperRef = useRef();
    const group1Ref  = useRef( null );
    const group2Ref  = useRef( null );


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
            rootMargin : '0px 0px -80px 0px' // this works like margin in css and this
            // can help us control when the intersection observer fires ( remember, this
            // component has 0 extra rem on the top so -80 - 0 = -80 )

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
                    // if ( entry.isIntersecting ) {
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
    // purpose - create an infinite scroller
    // ==============================

    useEffect(() => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // define variables
        // ==============================

        let groupWidth;
        let animationId;

        let position = 0;
        let lastTime = null;
        const speed  = 60; // pixels per second

        const group1 = group1Ref.current;
        const group2 = group2Ref.current;

        let lastWidth = window.innerWidth;
    
        // return if needed
        if ( !group1 || !group2 ) return;

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // get groupWidth
        // ==============================

        groupWidth = group1.offsetWidth;

        // ==============================
        // code block 3
        // ==============================

        // save this function to the const animate

        // timestamp is a high-precision time value automatically passed by requestAnimationFrame
        // and it represents the current time in milliseconds since the page loaded
        const animate = ( timestamp ) => {

            // on the very first frame lastTime is null ( we declared let lastTime = null above )
            // so on first frame we set lastTime = timestamp and this records when the animation
            // started and on every subsequent frame lastTime already has a value so this block
            // is skipped
            if ( !lastTime ) {

                lastTime = timestamp;

            } // end of if ()

            // " timestamp - lastTime " calculates how many milliseconds have passed since the
            // last frame and on a 60fps screen that's roughly 16.67ms per frame and on a 120fps
            // iPhone Pro screen that's roughly 8.33ms per frame and Math.min caps the delta at
            // 50ms to prevent large jumps when frames are dropped

            // use the real time between frames, but never more than 50ms and therefore dropped
            // frames don't cause a big visible jump
            const delta = Math.min( timestamp - lastTime, 50 ); // time since last frame in ms

            // updates lastTime to the current timestamp so that on the next frame we can
            // calculate the next delta
            lastTime = timestamp;
        
            // move based on time not frames and this results in the same speed on 60fps
            // and 120fps devices
            position -= ( speed * delta ) / 1000;
    
            // ==============================
            // code block 4
            // ==============================

            // when position reaches the width of one group reset by exactly one group width
            // - imperceptible jump

            // whenever position is equal or greater than groupWidth, reset position
            if ( Math.abs( position ) >= groupWidth ) {

                // this is the reset but instead of jumping back to 0 like with our css approach
                // this approach jumps back by exactly one group width

                /* 
                    Instead of teleporting all the way back to the start, we only move back
                    one group width — which lands us at the exact same visual position since
                    group 2 is identical to group 1.

                    That's why there's no flash — the content looks identical at that point.
                */
                position += groupWidth;

            } // end of if ()

            // ==============================
            // code block 5
            // ==============================

            // once we have a new position move both groups the same distance to the left on
            // every frame
            group1.style.transform = `translate3d( ${ position }px, 0, 0 )`;
            group2.style.transform = `translate3d( ${ position }px, 0, 0 )`;

            // this keeps the animation going

            /*
                Breaking it down :

                requestAnimationFrame( animate )

                Tells the browser "run the animate function on the next screen refresh"
                Browser runs it at 60fps ( or whatever the display refresh rate is )
                Syncs with the display so animation is smooth — no tearing

                animationId =

                Saves the ID that requestAnimationFrame returns
                This ID is used later to cancel the animation
            */

            // this schedules the next frame or this keeps the animation going and is
            // called 60 times per second forever
            animationId = requestAnimationFrame( animate );
    
        }; // end of the animate function

        // ==============================
        // code block 6
        // ==============================

        // trigger the animation and remember, requestAnimationFrame
        // eliminated the flash on my iPhone by controlling the reset mathematically instead
        // of letting CSS handle it
        animationId = requestAnimationFrame( animate );

        // ==============================
        // code block 7
        // ==============================

        // the handleResize function

        // if the user resizes his browser then this function will keep the animation loop in sync
        const handleResize = () => {

            // currentWidth is declared here - fresh value on every resize
            const currentWidth = window.innerWidth;

            // only reset if width changed - not height
            
            // remmeber, before the changes below, on mobile, whenever a user would scroll away the position
            // would get reset to 0 causing the infinite scroll to not work as it should
            if ( currentWidth !== lastWidth ) {
    
                /*
                    - Updates lastWidth to the new width after a resize
                    - So next time handleResize fires it compares against the new width not the old one
                    - Without this it would reset position on every resize event even if width didn't change
                */
                lastWidth  = currentWidth;
                /*
                    - Recalculates the group width at the new screen size
                    - When screen resizes the cards reflow and group1 may be a different width
                    - Without this the animation reset point would be wrong after resize
                */
                groupWidth = group1.offsetWidth;
                position   = 0; // reset position on resize

            } // end of if ()

        }; // end of handleResize function

        // call the handleResize function on the resize event
        window.addEventListener( 'resize', handleResize );

        // ==============================
        // code block 8
        // ==============================

        // cleanup
        return () => {

            cancelAnimationFrame( animationId );
            window.removeEventListener( 'resize', handleResize );

        }; // end of return

    }, [] ); // end of useEffect 2


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
                            Cities where the local business <span>ranked #1</span>
                        </h2>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 ( infinite scroller )
                            // ==============================
                        */
                    }
                    <div>

                        <div ref={ group1Ref }>

                            {/* original items */}
                            <div className={ styles.cards }>Sandy</div>
                            <div className={ styles.cards }>Park City</div>
                            <div className={ styles.cards }>Lehi</div>
                            <div className={ styles.cards }>Draper</div>
                            <div className={ styles.cards }>Tooele</div>
                            <div className={ styles.cards }>South Jordan</div>
                            <div className={ styles.cards }>American Fork</div>
                            <div className={ styles.cards }>Herriman</div>
                            <div className={ styles.cards }>Saratoga Springs</div>
                            <div className={ styles.cards }>Holladay</div>
                            <div className={ styles.cards }>Orem</div>
                            <div className={ styles.cards }>West Jordan</div>
                            <div className={ styles.cards }>Alpine</div>
                            <div className={ styles.cards }>Heber</div>

                        </div>

                        <div ref={ group2Ref } aria-hidden>

                            { /* dupdivcates hardcoded items */ }
                            <div className={ styles.cards }>Sandy</div>
                            <div className={ styles.cards }>Park City</div>
                            <div className={ styles.cards }>Lehi</div>
                            <div className={ styles.cards }>Draper</div>
                            <div className={ styles.cards }>Tooele</div>
                            <div className={ styles.cards }>South Jordan</div>
                            <div className={ styles.cards }>American Fork</div>
                            <div className={ styles.cards }>Herriman</div>
                            <div className={ styles.cards }>Saratoga Springs</div>
                            <div className={ styles.cards }>Holladay</div>
                            <div className={ styles.cards }>Orem</div>
                            <div className={ styles.cards }>West Jordan</div>
                            <div className={ styles.cards }>Alpine</div>
                            <div className={ styles.cards }>Heber</div>

                        </div>

                    </div>

                </div>

            </div>

        </Fragment>

    );

} // end of InfiniteScrollComponent

