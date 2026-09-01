


// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in the Contact Form Postmark Badge component
import ContactFormPostmarkComponent from '../contact/contact-form-other-postmark-badge-long-v5';
// import in the Contact Information component
import ContactInformationComponent from '../contact/contact-information-v4';
// import in the Blob Blue background component
import BlobComponentOne from '../animations/blob/blob-v12';
// import in our stylesheet
import styles from './contact-us-v1.module.scss';



export default function ContactUsComponent() {

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

    // ==============================
    // useRef();
    // ==============================

    const wrapperRef = useRef( null );
    const h2Ref      = useRef( null );
    const div1Ref    = useRef( null );
    const div3Ref    = useRef( null );

    // ==============================
    // useEffect 1
    // ==============================

    // ==============================
    // purpose - fade in and slide in our badges and h2
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // get the browser width
        // ==============================

        let browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // need setTimeout in order to give the container time to set marginTop in
        // useEffect 1
        // ==============================

        // ==============================
        // comment this out now that this section is moved down one div but keep the code
        // in case I ever need to apply it to the section above
        // ==============================

        // setTimeout( () => {

            // ==============================
            // intersection observer
            // ==============================

            // ==============================
            // use the web animations api for the animation
            // ==============================

            // options object
            const servicesOptions = {

                root : null, // this is the default and this means our viewport is the canvas
                // we are working with here
                threshold : 0.0, // this value can be between 0 and 1 and 0 is the default and
                // 0 means that as soon as any little piece enters the defined viewport the
                // intersection observer will fire
                rootMargin : '0px 0px -200px 0px' // this works like margin in css and this
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
            // servicesObserver
            const servicesObserver = new IntersectionObserver( 

                // we pass in 2 arguments to the IntersectionObserver : a function and an
                // options object

                // the first argument ( i.e. the function )
                function( entries, servicesObserver ) { 

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
                                // animation - opacity and slide in
                                // ==============================
                                // ==============================
                                // browserWidth > 768 && browserWidth <= 1728
                                // ==============================

                                if ( 
                                    wrapperRef.current &&
                                    ( browserWidth > 1728 )
                                ) {

                                    // ==============================
                                    // h2
                                    // ==============================

                                    h2Ref.current.animate(

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

                                    ); // end of h2Ref.current.animate()

                                    // ==============================
                                    // div 1
                                    // ==============================

                                    div1Ref.current.animate(

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
                                    // div 3
                                    // ==============================

                                    div3Ref.current.animate(

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

                                    ); // end of div3Ref.current.animate()

                                } // end of if ( browserWidth > 1728 )

                                // ==============================
                                // browserWidth > 768 && browserWidth <= 1728
                                // ==============================

                                if ( 
                                    wrapperRef.current &&
                                    ( browserWidth > 768 && browserWidth <= 1728 )
                                ) {

                                    // ==============================
                                    // h2
                                    // ==============================

                                    h2Ref.current.animate(

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

                                    ); // end of h2Ref.current.animate()

                                    // ==============================
                                    // div 1
                                    // ==============================

                                    div1Ref.current.animate(

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
                                            delay      : 0,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of div1Ref.current.animate()

                                    // ==============================
                                    // div 3
                                    // ==============================

                                    div3Ref.current.animate(

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

                                    ); // end of div3Ref.current.animate()

                                } // end of if ( browserWidth > 768 && browserWidth <= 1728 )

                                // ==============================
                                // browserWidth <= 768
                                // ==============================

                                if ( 
                                    wrapperRef.current &&
                                    ( browserWidth <= 768 )
                                ) {

                                    // ==============================
                                    // h2
                                    // ==============================

                                    h2Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateY( 4.0rem )"
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

                                    ); // end of h2Ref.current.animate()

                                    // ==============================
                                    // div 1
                                    // ==============================

                                    div1Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateY( 4.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateY( 0 )"
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

                                    ); // end of div1Ref.current.animate()

                                    // ==============================
                                    // div 3
                                    // ==============================

                                    div3Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateY( 4.0rem )"
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

                                    ); // end of div3Ref.current.animate()

                                } // end of if ( browserWidth <= 768 )

                                // ==============================
                                // end of animation
                                // ==============================

                            } // end of if ( entry.boundingClientRect.top > 0 ) {}

                            // once the observation happens then we want to unobserve the DOM
                            // element
                            servicesObserver.unobserve( wrapperRef.current );

                        } // end of if

                    } ) // end of entries.forEach()

                }, // end of function( entries, servicesObserver )

                servicesOptions // the second argument

            ); // end of new IntersectionObserver()

            // let's have the observer observe our selected DOM element and then do something
            // once the DOM element enters the viewport and remember the criteria for when a
            // DOM element enters the viewport or triggers entry.isIntersecting is determined
            // by the options object above
            servicesObserver.observe( wrapperRef.current );

            // ==============================
            // end of intersection observer
            // ==============================

        // }, 100 );

    }, [] ); // end of useEffect 1

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
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================


    return (

        // ==============================
        // container
        // ==============================
        <div className={ styles.contactUsContainer }>
    
            {
                /*
                    // ==============================
                    // container > div 1
                    // ==============================
                */
            }
            <div ref={ wrapperRef }>
    
                {
                    /*
                        // ==============================
                        // container > div 1 > div 1 ( section title )
                        // ==============================
                    */
                }
                <div>

                    <h2 ref={ h2Ref }>
                        Schedule Your <span style={ { color : 'var( --blue-77 )' } }>Free Consultation</span>
                    </h2>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 1 > div 2 ( wrapper div )
                        // ==============================
                    */
                }
                <div>
    
                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 1 ( blue box )
                            // ==============================
                        */
                    }
                    <div ref={ div1Ref }>
        
                        <h3>We&apos;re Here to Help</h3>
    
                        <p>Fill out the form below and we'll reach out within the hour
                        to find a time that works for you.</p>

                        {
                            /*
                                // ==============================
                                // container > picture ( picture of postcards )
                                // ==============================
        
                                // ==============================
                                // remember, add the width and height to the image tag so
                                // that the content below this div does not appear for a
                                // split second on page load
                                // ==============================
        
                                // ==============================
                                // remember, in order to make the width and height responsive,
                                // we had to set the width figure in the css file
                                // ==============================
                            */
                        }
                        <picture>
                            <source 
                                srcset="/images/mj_postcards_01_580.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_postcards_01_580.png"
                                width={ 580 }
                                height={ 325 }
                                loading="eager"
                                fetchpriority="high"
                                alt="Picture of postcards"
                            />
                        </picture>
        
                        <picture>
                            <source 
                                srcset="/images/arrow_01_512.png"
                                type="image/png"
                            />
                            <img
                                src="/images/arrow_01_512.png"
                                width={ 125 }
                                height={ 125 }
                                loading="eager"
                                fetchpriority="high"
                                alt="Down arrow"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 2 ( contact form )
                            // ==============================
                        */
                    }
                    <div>

                        <ContactFormPostmarkComponent client:visible />

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 3 ( contact information )
                            // ==============================
                        */
                    }
                    <div ref={ div3Ref }>

                        <ContactInformationComponent />             

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 4 ( orange background circle )
                            // ==============================
                        */
                    }
                    <div></div>

                </div>

            </div>

            {
                /*
                    // ==============================
                    // container ( square or blob )
                    // ==============================
                */
            }
            <BlobComponentOne client:visible />

        </div>

    );

} // end of ContactUsComponent

