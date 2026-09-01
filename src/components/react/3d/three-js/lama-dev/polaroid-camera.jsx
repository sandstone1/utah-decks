





// ==============================
// notes
// ==============================

// ==============================
// notes for compressing gltf and glb files
// ==============================

// see this article for details on how to compress your gltf or glb files :
// " https://blog.logrocket.com/configure-3d-models-react-three-fiber/ "

// 1 - move all the unzipped files into the enchanting_apps folder and then

// 2 - run the following command :
// " Home@Mac-Studio enchanting_apps % gltf-pipeline -i scene.gltf -o polaroid_camera_v2.glb --draco.compressionLevel=10 "

// 3 - then we will find a reduced polaroid_camera_v2.glb file from 13.4 MB to 5 MB

// 4 - the other option is to download the glb file and then compress that file by doing :
// " Home@Mac-Studio enchanting_apps % gltf-pipeline -i polaroid-camera.glb -o polaroid_camera.glb --draco.compressionLevel=10 "

// 5 - and the result is the same as 3 above or we we will find a reduced
// polaroid_camera.glb file from 13.4 MB ( i.e. the downloaded polaroid-camera.glb file )
// to 5 MB ( i.e. the compressed polaroid_camera.glb file )











// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the OrbitControls, Stage components
import { 
    OrbitControls,
    Stage
} from '@react-three/drei';
// import in the Polaroid Camera component
import PolaroidCameraComponent from './polaroid-camera-3d';
// import in our stylesheet
import styles from './polaroid-camera.module.scss';



export default function CameraComponent() {

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
            containerRef.current.style.top       = '-10.0%';
            containerRef.current.style.left      = '-8.0%';
            containerRef.current.style.transform = 'scale( 1.20 )';
            containerRef.current.style.opacity   = 1;

        } // end of if

        if (
            containerRef.current &&
            browserWidth <= 1920
        ) {

            // if the browser window or screen size is less that or eqaul to 1920px
            containerRef.current.style.display   = 'block';
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '-20.0%';
            containerRef.current.style.left      = '-12.0%';
            containerRef.current.style.transform = 'scale( 1.25 )';
            containerRef.current.style.opacity   = 1;

        } // end of if

        if (
            containerRef.current &&
            browserWidth <= 1440
        ) {
            // if the browser window or screen size is less that or eqaul to 1440px
            containerRef.current.style.display   = 'block';
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '-20.0%';
            containerRef.current.style.left      = '-12.0%';
            containerRef.current.style.transform = 'scale( 1.25 )';
            containerRef.current.style.opacity   = 1;

        } // end of if


        if (
            containerRef.current &&
            browserWidth <= 1280
        ) {

            // if the browser window or screen size is less that or eqaul to 1440px
            containerRef.current.style.display = 'none';

        } // end of if

/*
        if (
            containerRef.current &&
            browserWidth <= 1032
        ) {

            // if the browser window or screen size is less that or eqaul to 1032px
            containerRef.current.style.display   = 'block';
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '22%';
            containerRef.current.style.left      = '-5%';
            containerRef.current.style.transform = 'scale( 1.15 )';
            containerRef.current.style.opacity   = 1;

        } // end of if

        if (
            containerRef.current &&
            browserWidth <= 768
        ) {

            // if the browser window or screen size is less that or eqaul to 768px
            containerRef.current.style.display   = 'block';
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '23%';
            containerRef.current.style.left      = '-6%';
            containerRef.current.style.transform = 'scale( 1.15 )';
            containerRef.current.style.opacity   = 1;

        } // end of if

        if (
            containerRef.current &&
            browserWidth <= 480
        ) {

            // if the browser window or screen size is less that or eqaul to 480px
            containerRef.current.style.display   = 'block';
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '36%';
            containerRef.current.style.left      = '0%';
            containerRef.current.style.transform = 'scale( 1.05 )';
            containerRef.current.style.opacity   = 1;

        } // end of if

        if (
            containerRef.current &&
            browserWidth <= 375
        ) {

            // if the browser window or screen size is less that or eqaul to 375px
            containerRef.current.style.display   = 'block';
            containerRef.current.style.position  = 'absolute';
            containerRef.current.style.top       = '40%';
            containerRef.current.style.left      = '2.5%';
            containerRef.current.style.transform = 'scale( 1.0 )';
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
            className={ styles.cameraContainer }
            ref={ containerRef }
        >

            {
                // ==============================
                // Canvas component
                // ==============================
            }
            <Canvas
                camera={ { fov : 18, position : [ 8, 1, 40 ] } } // remember, the fov and
                // position control the inital position of the 3D object
            >

                <OrbitControls enableZoom={ false } />

                <Stage environment='city' intensity={ 0.6 }>

                    <PolaroidCameraComponent />

                </Stage>

            </Canvas>

        </div>

    );

} // end of CameraComponent


