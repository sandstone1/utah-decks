


// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in Animating Gradient Blur component
import AnimatingGradientBackground from '../animations/animating-gradient/animating-gradient-background-v14';
// import in the scss file
import styles from './pricing-radial-gradient-v4.module.scss';


export default function PricingComponent() {

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

    // use the useRef(); hook to create a reference to a DOM element
    const wrapperDivRef = useRef();

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
    // purpose - fade in and slide up our section
    // ==============================

    useEffect( () => {

        // ==============================
        // intersection observer
        // ==============================

        // ==============================
        // use the web animations api for the animation
        // ==============================

        // options object
        const sectionOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px -50px 0px' // this works like margin in css and this
            // can help us control when the intersection observer fires

            // remember, it's the bottom rootMargin that controls when the element
            // isIntersecting

            // from one of the anwsers in stackoverflow : " I think you may be confusing
            // the rootMargin properties. From you question, it sounds like you want the
            // observed element to trigger 50px before it comes into view. If that is the
            // case, then you want to increase the root bottom margin: 0px 0px 50px 0px
            // if you want to trigger the element only when it reaches 50px inside the
            // root, then use: 0px 0px -50px 0px. "

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
        // sectionObserver
        const sectionObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, sectionObserver ) { 

                entries.forEach( ( entry ) => {

                    // if our element is in the viewport then do something
                    if ( entry.isIntersecting ) {

                        // log the entry to console so that we can see the 
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        // console.log( entry );

                        // ==============================
                        // animation - opacity and slide up
                        // ==============================

                        wrapperDivRef.current.animate(

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

                                duration   : 350,
                                easing     : "ease-out",
                                delay      : 0,
                                iterations : 1, // this is the default but leave for reference purposes
                                fill       : "forwards" // this lets the " element retain the style values
                                // from the last keyframe when the animation ends "
            
                            }

                        ); // end of wrapperDivRef.current.animate()

                        // ==============================
                        // end of animation
                        // ==============================

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        sectionObserver.unobserve( wrapperDivRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, sectionObserver )

            sectionOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        sectionObserver.observe( wrapperDivRef.current );

        // ==============================
        // end of intersection observer
        // ==============================

    }, [] ); // end of useEffect 1

    // ==============================
    // functions
    // ==============================


    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.pricingContainer }>

            {
                /*
                    // ==============================
                    // container > div 1
                    // ==============================
                */
            }
            <div
                ref={ wrapperDivRef }
            >

                <h2>
                    Digital Marketing & Website Package for Growing Businesses
                </h2>

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
                            // container > div 1 > div 2 ( wrapper div ) > div 1
                            // ==============================
                        */
                    }
                    <div>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 ( wrapper div ) > div 1 > picture 1 ( gray-225 picture of Benjamin Franklin )
                                // ==============================
        
                                // ==============================
                                // remember, add the width and height to the image tag so
                                // that the content below this div does not appear for a
                                // split second on page load
                                // ==============================
        
                                // ==============================
                                // remember, in order to make the width and height responsive,
                                // we had to set the width percentage in the css file and on
                                // the parent div
                                // ==============================
                            */
                        }
                        <picture>
                            <source 
                                srcSet={ '/images/ben_franklin_11_200.webp' }
                                type={ 'image/webp' }
                            />
                            <img
                                src={ '/images/ben_franklin_11_200.png' }
                                width={ '200px' }
                                height={ '200px' }
                                loading={ 'lazy' }
                                // fetchpriority={ 'high' }
                                alt={ 'Benjamin Franklin' }
                            />
                        </picture>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 ( wrapper div ) > div 1 > picture 2 ( black picture of Benjamin Franklin )
                                // ==============================
        
                                // ==============================
                                // remember, add the width and height to the image tag so
                                // that the content below this div does not appear for a
                                // split second on page load
                                // ==============================
        
                                // ==============================
                                // remember, in order to make the width and height responsive,
                                // we had to set the width percentage in the css file and on
                                // the parent div
                                // ==============================
                            */
                        }
                        <picture>
                            <source 
                                srcSet={ '/images/ben_franklin_01.webp' }
                                type={ 'image/webp' }
                            />
                            <img
                                src={ '/images/ben_franklin_01.png' }
                                width={ '200px' }
                                height={ '200px' }
                                loading={ 'lazy' }
                                // fetchpriority={ 'high' }
                                alt={ 'Benjamin Franklin' }
                            />
                        </picture>

                        <p>&quot;Well done is better than well said&quot;<br />Benjamin Franklin,
                        1737</p>

                    </div>

                    <h3>Package Details</h3>

                    <ul>

                        <li>Local SEO</li>
                        <li>Custom lead generation website</li>
                        <li>Revenue-generating AI agent</li>
                        <li>Digital marketing:
                            <ul>
                                <li>Google Business Profile management</li>
                                <li>Email marketing</li>
                                <li>Text marketing</li>
                                <li>Social media</li>
                                <li>Local answer engine optimization</li>
                                <li>Online ad campaigns</li>
                                <li>On page and technical SEO</li>
                                <li>Proprietary check-in app</li>
                            </ul>
                        </li>
                        <li>Traditional marketing:
                            <ul>
                                <li>TV and radio ad campaigns</li>
                            </ul>
                        </li>
                        <li>Analytics:
                            <ul>
                                <li>Google Analytics 4</li>
                                <li>Google Tag Manager</li>
                                <li>Google Search Console</li>
                                <li>Ahrefs</li>
                                <li>Looker Studio</li>
                                <li>Comprehensive tracking system</li>
                            </ul>
                        </li>
                        <li>Set up and management:
                            <ul>
                                <li>OpenAI API</li>
                                <li>AI evaluation platform</li>
                                <li>Vector database</li>
                                <li>SQLite database</li>
                                <li>MailerLite</li>
                                <li>Postmark</li>
                                <li>Analytics listed above</li>
                                <li>Cloudinary</li>
                                <li>Calendly</li>
                            </ul>
                        </li>
                        <li>Website features:
                            <ul>
                                <li>Hand-crafted animation and digital art</li>
                                <li>Email opt-in forms and gated content</li>
                                <li>Booking automation</li>
                                <li>Performance optimization</li>
                                <li>Ongoing support, hosting, and maintenance</li>
                            </ul>
                        </li>

                        {
                            /*
                                <li>Custom branding</li>
                                <li>Proprietary reputation management app</li>
                                <li>National organic SEO</li>
                                <li>Mobile responsive</li>
                                <li>Google Maps</li>
                                <li>Professional copywriting</li>
                                <li>Custom contact forms</li>
                                <li>Monthly reports on website analytics</li>
                            */
                        }

                    </ul>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 ( wrapper div ) > div 4 ( 4 color boxes )
                            // ==============================
                        */
                    }
                    <div>
                            
                        <div></div>
        
                        <div></div>
        
                        <div></div>
        
                        <div></div>
                    
                    </div>

                </div>

            </div>

            <AnimatingGradientBackground />

        </div>

    );

} // end of PricingComponent



