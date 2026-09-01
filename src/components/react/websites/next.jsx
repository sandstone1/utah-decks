



// import in Fragment, the useEffect, useRef, useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the scss file
import styles from './next.module.scss';



export default function NextWebsiteComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ showApp1, setShowApp1 ] = useState( false );

    // ==============================
    // zustand state
    // ==============================

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // define variables
    // ==============================

    // define browserWidth
    let browserWidth;
    
    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element(s)
    const featuredWebsitesH2Ref = useRef();

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
    // purpose - lazy load the " Featured Websites " title using the intersection observer
    // ==============================

    useEffect( () => {

        // ==============================
        // calculate browser width
        // ==============================

        // get the browser width so that I can change the side menu width based on the
        // window size
        browserWidth = window.innerWidth;

        // ==============================
        // intersection observer 1
        // ==============================

        // ==============================
        // lazy load background image
        // ==============================

        // ==============================
        // create an intersection observer for the featured websites h1 element
        // ==============================

        // options object
        const featuredWebsitesH2Options = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px 300px 0px' // this works like margin in css and this
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
        // featuredWebsitesH2Observer
        const featuredWebsitesH2Observer = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, featuredWebsitesH2Observer ) { 

                entries.forEach( ( entry ) => {

                    // if our element is outside the viewport then do nothing
                    if ( entry.isIntersecting ) {

                        // log the entry to console so that we can see the
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        console.log( entry );

                        // to make this work :
                        // step 1 - I had to import in the color-8 image above
                        // step 2 - then I had to get the base url
                        // step 3 - then I had to concat both strings together using template
                        // literals
                        // featuredWebsitesH2Ref.current.style.backgroundImage = `url( ${ import.meta.env.NEXTAUTH_URL }${ color8Image.src } )`;
                        featuredWebsitesH2Ref.current.style.backgroundImage = `url( /colors/color-8.jpeg )`;

                        // remember, this was the url nextjs was giving me
                        // featuredWebsitesH2Ref.current.style.backgroundImage = 'url( http://localhost:3016/_next/static/media/color-8.353d2a45.jpeg )';
    
                        // they both work
                        // console.log( `${ import.meta.env.NEXTAUTH_URL + color8Image.src}` );
                        // console.log( `${ import.meta.env.NEXTAUTH_URL }${ color8Image.src }` );

                        // remember, part of the solution above came from this answer :
                        // " https://stackoverflow.com/questions/51842419/next-js-background-image-css-property-cant-load-the-image "

                        // once the observation happens then we want to unobserve the DOM
                        // element and we want to do this when were lazy loading images
                        featuredWebsitesH2Observer.unobserve( featuredWebsitesH2Ref.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, featuredWebsitesH2Observer )

            featuredWebsitesH2Options // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        featuredWebsitesH2Observer.observe( featuredWebsitesH2Ref.current );

        // and after adding the above line of code I see our DOM element appear
        // or lazy load so this is working as expected, which is great

        // ==============================
        // end of intersection observer 1
        // ==============================

    }, [] ); // end of useEffect 1

    // ==============================
    // functions
    // ==============================



    return (

        <div className={ styles.nextWebsiteContainer }>

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
                    // container > div 2
                    // ==============================
                */
            }
            <div>

                <h2
                    ref={ featuredWebsitesH2Ref }
                >
                    Featured Websites
                </h2>

                <h3>Ecommerce Applications</h3>

                <h5>Next (custom app under development)</h5> 

                <ul>
                    <li>Purpose of app: increase online sales, communicate with customers, build an email list and provide backend administrative analytics and services</li>
                    <li>Type of website: ecommerce site</li>

                    {
                        /*
                            // ==============================
                            // click event for showing technical details
                            // ==============================
                        */
                    }
                    <span
                        onClick={ () => setShowApp1( ( prevStatus ) => !prevStatus ) }
                    >
                        { !showApp1 ? `Click here to see the app's technical details` : `Click here to hide the app's technical details` }
                    </span>

                    {
                        /*
                            // ==============================
                            // if showApp1 is true then show the tech details
                            // ==============================
                        */
                    }
                    {
                        showApp1 && (

                            <Fragment>

                                <li>Languages: JavaScript ( ES6+ )</li>
                                <li>Frameworks: Next.js</li>
                                <li>Libraries: React</li>
                                <li>Database: MongoDB</li>
                                    <ul>
                                        <li>users, events, orders and comments are saved in the database</li>
                                    </ul>
                                <li>State manager: Zustand</li>
                                <li>API integration:</li>
                                    <ul>
                                        <li>ability to accept various payment methods, including saved payment methods, using the Stripe Elements API</li>
                                        <li>upload, store, manage, manipulate and deliver images and video using the Cloudinary API</li>
                                        <li>provide custom online maps for specified events using the Mapbox API</li>
                                        <li>ability to send transactional emails using the Postmark API</li>
                                        <li>send and receive data from both internal and external APIs using the JSON data transfer format</li>
                                    </ul>
                                <li>Authentication using the NextAuth.js library to provide for:</li>
                                    <ul>
                                        <li>user registration, sign in, sign out, user authentication and change password</li>
                                        <li>change the user interface based on the authentication status of the user</li> 
                                        <li>client and server side user validation</li>
                                        <li>server side page guards to protect pages from unauthorized access</li>
                                        <li>protected API routes</li>
                                    </ul>
                                <li>Next.js features:</li>
                                    <ul>
                                        <li>create REST API endpoints using API routes</li>
                                        <li>file based routing</li> 
                                        <li>catch all routes</li>
                                        <li>data fetching with server side rendering</li>
                                        <li>pre rendering and data fetching with static site generation</li>
                                    </ul>
                                <li>React features:</li>
                                    <ul>
                                        <li>client side data fetching using the Fetch API</li>
                                    </ul> 
                                <li>Admin functionality:</li>
                                    <ul>
                                        <li>admin users can create, edit and delete events by using the custom built admin dashboard</li>
                                    </ul>
                                <li>Styling:</li>
                                    <ul>
                                        <li>custom design using SASS, CSS Grid, Flexbox, CSS Modules and Styled JSX</li>
                                    </ul>
                                <li>Other features:</li>
                                    <ul>
                                        <li>custom shopping cart</li>
                                        <li>search events by words or date using custom search functionality</li> 
                                        <li>user comment system using API routes and MongoDB</li>
                                        <li>reponsive web design</li>
                                        <li>custom animation</li>
                                        <li>custom error handling</li>
                                        <li>custom loaders</li>
                                        <li>app is optimized for SEO</li>
                                    </ul>
                                <li>Deployment: Vercel (the site is not yet live)</li>

                            </Fragment>

                        )

                    }
                        
                    <li>Please see below for two images from the app:</li>


                        <a href="#/">
                        {
                            /*
                                <a target="_blank"> // comment out until we get a live image on Netlify
                            */
                        }
                            <img
                                src={ '/images/next-home-page-small-size.jpg' }
                                className={ styles.nextWebsiteContainerImage1 }
                                loading={ 'lazy' }
                                alt={ 'Next home page' }
                            />
                        {
                            /*
                                </a>
                            */
                        }
                        </a>

                        <a href="#/">
                        {
                            /*
                                <a target="_blank"> // comment out until we get a live image on Netlify
                            */
                        }
                            <img
                                src={ '/images/next-event-specific-page-small-size.jpg' }
                                className={ styles.nextWebsiteContainerImage2 }
                                loading={ 'lazy' }
                                alt={ 'Next event page' }
                            />
                        {
                            /*
                                </a>
                            */
                        }
                        </a>

                    <li>
                        <a href="#/">Link coming soon</a>
                    </li>
                </ul>

            </div>

        </div>

    );

} // end of NextWebsiteComponent

