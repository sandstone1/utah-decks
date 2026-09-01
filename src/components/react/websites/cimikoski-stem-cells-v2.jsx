



// import in Fragment, useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the scss file
import styles from './cimikoski-stem-cells-v2.module.scss';



export default function CimikoskiStemCellsWebsiteComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ showApp7, setShowApp7 ] = useState( false );

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
            rootMargin : '0px 0px 1500px 0px' // this works like margin in css and this
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
                        // console.log( entry );

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

        <div className={ styles.cimikoskiStemCellsWebsiteContainer }>

            {
                /*
                    // ==============================
                    // tilt shape
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

                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>

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
                
                <h3>More Coming Soon!</h3>
    
                {
                    /*
                        // ==============================
                        // remember, we turned off the content below until we have our first site
                        // built
                        // ==============================
                    */
                }

                <h3>Regenerative Medical Clinic Application</h3>

                <h5>Cimikoski Stem Cells (custom app under development)</h5> 

                <ul>
                    <li>Purpose of app:</li>
                        <ul>
                            <li>increase traffic, leads and sales</li>
                            <li>rank higher in AI and local search results</li>
                            <li>rank higher in the Google Map Pack</li>
                            <li>build a strong and memorable brand</li>
                            <li>build online visibility and authority</li>
                            <li>connect with potential customers</li>
                            <li>build an email list</li>
                            <li>provide for custom marketing automations</li>
                        </ul>
                    <li>Type of website: business site</li>

                    {
                        /*
                            // ==============================
                            // click event for showing technical details
                            // ==============================
                        */
                    }
                    <span
                        onClick={ () => setShowApp7( ( prevStatus ) => !prevStatus ) }
                    >
                        { !showApp7 ? `Click here to see the app's technical details` : `Click here to hide the app's technical details` }
                    </span>

                    {
                        /*
                            // ==============================
                            // if showApp1 is true then show the tech details
                            // ==============================
                        */
                    }
                    {
                        showApp7 && (

                            <Fragment>

                                <li>Languages: JavaScript ( ES6+ )</li>
                                <li>Frameworks: Next.js</li>
                                <li>Libraries: React</li>
                                <li>Database: SQLite</li>
                                    {
                                        /*
                                            <ul>
                                                <li>users, events, orders and comments are saved in the database</li>
                                            </ul>
                                        */
                                    }
                                <li>State manager: Zustand</li>
                                <li>API integration:</li>
                                    <ul>
                                        <li>ability to accept various payment methods, including saved payment methods, using the Stripe Elements API</li>
                                        <li>upload, store, manage and deliver images and video using the Cloudinary API</li>
                                        <li>provide custom online maps for specific use cases using the Mapbox API</li>
                                        <li>send transactional emails using the Postmark API</li>
                                        <li>send marketing emails using the MailerLite API</li>
                                        <li>send and receive data from both internal and external APIs using the JSON data transfer format</li>
                                    </ul>
                                <li>User authentication using the NextAuth.js library:</li>
                                    <ul>
                                        <li>user registration, sign in, sign out and change password</li>
                                        <li>change the user interface based on the authentication status of the user</li> 
                                        <li>client and server side user validation</li>
                                        <li>server side page guards to protect pages from unauthorized access</li>
                                        <li>protected API routes</li>
                                    </ul>
                                <li>Next.js features:</li>
                                    <ul>
                                        <li>create REST API endpoints using server actions and API routes</li>
                                        <li>file based routing</li> 
                                        <li>catch all routes</li>
                                        <li>data fetching with server side rendering</li>
                                    </ul>
                                <li>React features:</li>
                                    <ul>
                                        <li>client side data fetching using the Fetch API</li>
                                    </ul> 
                                <li>Admin functionality:</li>
                                    <ul>
                                        <li>admin users can create, edit and delete marketing posts by using a custom built dashboard</li>
                                    </ul>
                                <li>Styling:</li>
                                    <ul>
                                        <li>custom design using SASS, CSS Grid, Flexbox and CSS Modules</li>
                                    </ul>
                                <li>Other features:</li>
                                    <ul>
                                        {
                                            /*
                                                <li>custom shopping cart</li>
                                                <li>search events by words or date using custom search functionality</li> 
                                                <li>user comment system using API routes and MongoDB</li>
                                            */
                                        }
                                        <li>reponsive web design</li>
                                        <li>custom branding</li>
                                        <li>custom animation</li>
                                        <li>custom digital art</li>
                                        <li>custom error handling</li>
                                        <li>custom loaders</li>
                                        <li>app is optimized for SEO</li>
                                    </ul>
                                <li>Deployment: Netlify</li>

                            </Fragment>

                        )

                    }

                    <li>Please see below for an image from the home page:</li>

                    {
                        /*
                            // when I get a new site built that I can use as a demo, replace
                            // the img element below with the new site ( see old code below )
                            <a href="" target="_blank" >
                                <img
                                    src={ '/images/cimikoski_stem_cells_home_3.jpg' }
                                    className={ styles.cimikoskiStemCellsWebsiteContainerImage1 }
                                    loading={ 'lazy' }
                                    alt={ 'Cimikoski Stem Cells home page' }
                                />
                            </a>
                        */
                    }

                    <img
                        src={ '/images/cimikoski_stem_cells_home_3.jpg' }
                        className={ styles.cimikoskiStemCellsWebsiteContainerImage1 }
                        loading={ 'lazy' }
                        alt={ 'Cimikoski Stem Cells home page' }
                    />

                    {
                        /*
                            // when I get a new site built that I can use as a demo, add the li
                            // element below into the html code for this page ( see old code below )
                            <li>
                               <a href="" target="_blank">Link to the website</a>
                            </li>
                        */
                    }

                </ul>

            </div>

        </div>

    );

} // end of CimikoskiStemCellsWebsiteComponent

