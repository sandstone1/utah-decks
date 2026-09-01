






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










// import in the Suspense component, useEffect, useRef hooks
import { Suspense, useEffect, useRef } from 'react';
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

    // ==============================
    // useRef();
    // ==============================

    // STEP 1

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
                camera={ { fov : 50, position : [ 1, 1, 600 ] } } // remember, the fov and
                // position control the inital position of the 3D object
            >

                <Suspense fallback={null}>

                    <OrbitControls enableZoom={ false } />

                    <Stage environment='city' intensity={ 0.6 } >

                        <Apollo11Component />

                    </Stage>

                </Suspense>

            </Canvas>

            <Loader
                containerStyles={
                    { 
                        background : 'transparent'
                    }
                }
                barStyles={
                    {
                        width   : '12.0rem',
                        height  : '0.5rem',
                        color   : '#f5f5f5'
                    }
                }
                dataStyles={
                    {
                        fontFamily : 'Roboto Flex, sans-serif',
                        fontSize   : '1.85rem',
                        color      : '#f5f5f5'
                    }
                }
                dataInterpolation={
                    ( p ) => `Loading ${p.toFixed( 2 ) }%`
                }
            />

        </div>

    );

} // end of MoonLandingComponent



