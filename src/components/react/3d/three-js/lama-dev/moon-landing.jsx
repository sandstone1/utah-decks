






// ==============================
// notes
// ==============================

// ==============================
// notes for making the 3d models responsive
// ==============================

// ==============================
// notes are located in the following file : components/3d/3d-models/moon-landing.js
// ==============================

// ==============================
// create 3d animations using the
// three.js library,
// @react-three/fiber package and the
// @react-three/drei package
// ==============================

// ==============================
// through trail and error, I was able to make the moon-landing.js 3D object
// responsive and the main steps were ( I realize there is probably a better way
// but need to increase my skill set first ) :
// ==============================

// ==============================
// 1 - in the 3d-models.module.scss I had to manually increase or decrease the
// row heights based on screen sizes and then
// 2 - in the moon-landing.module.scss, I had to set the
/*
    width  : 100%; 
    height : 100%;
*/
// at 2560 pixels in order for the object to appear correctly and
// 3 - to make the object appear correctly on page load, in the moon-landing.js
// file I had to manually adjust the fov and z-index :
/*
    <Canvas
        camera={ { fov : 50, position : [ 1, 1, 750 ] } } // remember, the fov and
        // position control the inital position of the 3D object
    >
*/
// and then
// 4 - in the moon-landing.module.scss, I had to set the following key value pairs
// for the bp-1920 breakpoint :
/*
    @media all and ( max-width : $bp-1920 ) {

        position : absolute;
        top      : 15%;
        left     : -5%;

        transform : scale( 1.1 );

    } // end of container > bp-1920
*/
// and then
// 5 - I had to continue these sames adjustments all the way to $bp-375
// and then
// 6 - I had to make the same adjustments to the polaroid-camera.js,
// polaroid-camera.module.scss, product-design.js and product-design.module.scss
// files
// ==============================

// ==============================
// 1 - components/3d/3d-models/3d-models.js
// 2 - components/3d/3d-models/3d-models.module.scss
// 3 - components/3d/3d-models/moon-landing.js
// 4 - components/3d/3d-models/moon-landing.module.scss
// 5 - components/3d/3d-models/apollo-11.jsx
// 6 - /models/apollo-11.glb
// 7 - components/3d/3d-models/polaroid-camera.js
// 8 - components/3d/3d-models/polaroid-camera.module.scss
// 9 - components/3d/3d-models/polaroid-camera-3d.jsx
// 10 - /models/polaroid-camera.glb
// 11 - components/3d/3d-models/product-design.js
// 12 - components/3d/3d-models/product-design.module.scss
// 13 - components/3d/3d-models/show-product-design.jsx
// 14 - /models/show.gltf
// ==============================










// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the OrbitControls, Stage components
import { 
    OrbitControls,
    Stage,
    Loader
} from '@react-three/drei';
// import in the Apollo 11 jsx component
import Apollo11Component from './apollo-11';
// import in our stylesheet
import styles from './moon-landing.module.scss';



export default function MoonLandingComponent() {

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

    // use browserWidth inside the useEffect hook below
    let browserWidth;

    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing the following useRef variables
    const containerRef = useRef();

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

    useEffect( () => {

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // reference the specified DOM element below

        if ( containerRef.current ) {

            containerRef.current.style.opacity = 1;

        } // end of if

    }, [] ); // end of useEffect 1

    // ==============================
    // useEffect 2
    // ==============================

    // the useEffect hook will run after the initial page load
    useEffect( () => {

        // ==============================
        // code block #1
        // ==============================

        // ==============================
        // calculate browser width
        // ==============================

        // get the browser width so that I can either show or hide the " schedule a demo "
        // button based on the window size
        browserWidth = window.innerWidth;

        // ==============================
        // code block #2
        // ==============================

        // ==============================
        // add an event listener for the browser resize event
        // ==============================

        // ==============================
        // remember, we are doing this so that as we test the app by making the browser
        // window smaller or larger we can see the correct 3D models
        // ==============================

        // if browserWidth exist then call the handleResize function
        if ( browserWidth ) {

            window.addEventListener( 'resize', handleResize, false );

            // make sure we remove the event listener after we call the handleResize
            // function
            return () => {

                window.removeEventListener( 'resize', handleResize, false );

            };

        } // end of if

    }, [] ) // end of useEffect 2

    // ==============================
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function 1
    // ==============================

    // ==============================
    // handleResize function
    // ==============================

    async function handleResize( e ) {

        // ==============================
        // code block #1
        // ==============================

        // ==============================
        // remember, we had to define browserWidth inside this function in order
        // to the get the if statements below to work
        // ==============================

        // define browserWidth
        browserWidth = window.innerWidth;

        // ==============================
        // code block #2
        // ==============================

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // reference the specified DOM element below

        if (
            containerRef.current &&
            browserWidth > 1920
        ) {

            // if the browser window or screen size is greater than to 1920px
            containerRef.current.style.display   = 'block';
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '-4.0%';
            containerRef.current.style.left      = '-5.0%';
            containerRef.current.style.transform = 'scale( 1.1 )';
            containerRef.current.style.opacity   = 1;

        } // end of if

        if (
            containerRef.current &&
            browserWidth <= 1920
        ) {

            // if the browser window or screen size is less that or eqaul to 1920px
            containerRef.current.style.display   = 'block';
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '-8.0%';
            containerRef.current.style.left      = '-5.0%';
            containerRef.current.style.transform = 'scale( 1.1 )';
            containerRef.current.style.opacity   = 1;

        } // end of if

        if (
            containerRef.current &&
            browserWidth <= 1440
        ) {

            // if the browser window or screen size is less that or eqaul to 1440px
            containerRef.current.style.display   = 'block';
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '-9.0%';
            containerRef.current.style.left      = '-5.0%';
            containerRef.current.style.transform = 'scale( 1.1 )';
            containerRef.current.style.opacity   = 1;

        } // end of if

        if (
            containerRef.current &&
            browserWidth <= 1280
        ) {

            // if the browser window or screen size is less that or eqaul to 1280px
            containerRef.current.style.display = 'none';

        } // end of if

/*
        if (
            containerRef.current &&
            browserWidth <= 1032
        ) {

            // if the browser window or screen size is less that or eqaul to 1032px
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '25%';
            containerRef.current.style.left      = '-5%';
            containerRef.current.style.transform = 'scale( 1.1 )';
            containerRef.current.style.opacity   = 1;

        } // end of if

        if (
            containerRef.current &&
            browserWidth <= 768
        ) {

            // if the browser window or screen size is less that or eqaul to 768px
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '28%';
            containerRef.current.style.left      = '-5%';
            containerRef.current.style.transform = 'scale( 1.1 )';
            containerRef.current.style.opacity   = 1;

        } // end of if

        if (
            containerRef.current &&
            browserWidth <= 480
        ) {

            // if the browser window or screen size is less that or eqaul to 480px
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '38%';
            containerRef.current.style.left      = '0%';
            containerRef.current.style.transform = 'scale( 1.0 )';
            containerRef.current.style.opacity   = 1;

        } // end of if

        if (
            containerRef.current &&
            browserWidth <= 375
        ) {

            // if the browser window or screen size is less that or eqaul to 375px
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '42%';
            containerRef.current.style.left      = '2%';
            containerRef.current.style.transform = 'scale( 0.95 )';
            containerRef.current.style.opacity   = 1;

        } // end of if
*/

    } // end of handleResize function



    return (

        // ==============================
        // container
        // ==============================

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2 ( see below )

        // tie the initialized useRef variable from above into a specific DOM element so
        // that we can reference that DOM element in our code

        <div
            className={ styles.moonLandingContainer }
            ref={ containerRef }
        >

            {
                // ==============================
                // Canvas component
                // ==============================
            }
            <Canvas
                camera={ { fov : 50, position : [ 1, 1, 750 ] } } // remember, the fov and
                // position control the inital position of the 3D object
            >

                <OrbitControls enableZoom={ false } />

                <Stage environment='city' intensity={ 0.6 } >

                    <Apollo11Component />

                </Stage>

            </Canvas>

            <Loader />

        </div>

    );

} // end of MoonLandingComponent



