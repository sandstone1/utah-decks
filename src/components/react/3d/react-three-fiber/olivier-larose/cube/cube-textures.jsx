




// ==============================
// notes
// ==============================

// ==============================
// how to add textures to a cube
// ==============================

// ==============================
// please see the following video for details on how to add textures to a cube in your RTF
// project : " https://www.youtube.com/watch?v=9XvZ3ChtT9M&t=3s " and the name of this video
// is " Build a 3D Animated Cube using Three.js, Next.js and Framer Motion "
// ==============================

// ==============================
// 1 - create a basic RTF cube and then
// 2 - create textures for each side of the cube and to do that we will import in
// useLoader from RTF and then
// 3 - we need to pair the useLoader with the right drei loader and in this case we will
// use the TextureLoader from three.js and then
// 4 - we define our textures by doing :
// " const texture_1 = useLoader( TextureLoader, '/images/8.png' ); " and then
// 5 - we can include texture_1 in the meshStandardMaterial by doing : " map={ texture_1 } "
// and then
// 6 - do that for all 6 sides of the cube and then
// 7 - use the attach property or " attach="material-0" " for each meshStandardMaterial
// to tell RTF to attach that specific texture to a specified face of the cube 
// ==============================

// ==============================
// files for the steps above
// ==============================

// ==============================
// 1 - components/3d/react-three-fiber/olivier-larose/cube-textures.js
// 1 - components/3d/react-three-fiber/olivier-larose/cube-textures.module.scss
// 1 - components/3d/react-three-fiber/olivier-larose/mesh.js
// ==============================













// import in Suspense component, useEffect, useState hooks
import { Suspense, useEffect, useState } from 'react';
// import in the Canvas component and the useFrame hook
import { Canvas } from '@react-three/fiber';
// import in the OrbitControls, Perspective Camera, Stage components
// and the useProgress drei hook
import {
    OrbitControls,
    PerspectiveCamera,
    Stage,
    useProgress
} from '@react-three/drei';
// import in the Mesh component
import Mesh from './mesh';
// import in our stylesheet
import styles from './cube-textures.module.scss';



// remember we are passing down props from the parent or the 3d-objects.js file and
// " passParentToChildProgressBarHandlerFunction " is a function being passed from
// the parent to the child as a prop
export default function CubeTexturesComponent( { passParentToChildProgressBarHandlerFunction } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ progressBarDone, setProgressBarDone ] = useState( false );

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
    // useEffect(); 1
    // ==============================

    // ==============================
    // purpose : useEffect 1 will run on page load and once the progressBarDone state
    // changes from false to true and the passParentToChildProgressBarHandlerFunction
    // will pass to the parent component or 3d objects component the progressBarDone
    // state and once the progressBarDone state changes from false to true then this
    // will trigger a state change in the parent component, which will then cause the
    // custom built progress bar to run from 0% to 100% over a period of 1 second
    // ==============================

    useEffect( () => {

        // test
        console.log( progressBarDone );
        // test
        console.log( document.location.pathname );

        // make sure we are on the right page before we pass up the state
        // to the parent or 3d object file since on the home page this will
        // create an error
        if ( window.location.pathname !== '/' ) {

            // pass progressBarDone value up to the parent component or the
            // 3d objects component
            passParentToChildProgressBarHandlerFunction( progressBarDone );

        } // end of if

    }, [ progressBarDone ] ); // end of useEffect 1

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
    // purpose : get access to the the progress variable through the drei
    // useProgress() hook and once that variable reaches to 100 or reaches
    // completion then that will cause the if statement below to run, which
    // will then set the progressBarDone state to true, thereby causing the
    // useEffect 1 hook above to run again and inside useEffect we will pass
    // in the new progressBarDone state as a parameter to the
    // passParentToChildProgressBarHandlerFunction and this function will send
    // the progressBarDone state up to parent component where it will trigger
    // a series of events
    // ==============================

    // ==============================
    // see the following anwser in stackoverflow for a good description of
    // the useProgress hook : 
    // " https://stackoverflow.com/questions/72234193/how-to-create-website-loader-that-shows-the-progress-of-initial-request-in-nextj "
    // ==============================

    function Loader() {

        // get progress
        let { active, progress, errors, item, loaded, total } = useProgress();

        // return <Html center>{ progress } % loaded</Html>

        // test
        console.log( progress );
        // test
        // console.log( 'In Loader' );

        // when proress reaches 100 then set progressBarDone state to true
        if ( progress === 100 ) {

            setProgressBarDone( true );

        } // end of if

        // for some reason, when testing the app on BrowserStack, the progress
        // event, on occasion, would not reach 100 and therefore on page load
        // the 3d objects page would be stuck with a progress bar at 0%

        // let's use setTimeout to make sure we send an updated state value to
        // the parent component or the 3d objects component
        setTimeout( () => {

            // test
            console.log( 'In Loader setTimeout' );

            if ( progress < 100 ) {

                setProgressBarDone( true );

            } // end of if

        }, 1500 ); // end of setTimeout

    } // end of Loader function


    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.cubeTexturesContainer } >

            <div>

                {
                    /*

                        // ==============================
                        // container > div1 > div1 ( wrapper div )
                        // ==============================
                    */
                }

                <div>

                    <Canvas>

                        <PerspectiveCamera
                            makeDefault
                            fov={ 75.0 }
                            position={ [ 0, 0, 2.0 ] }
                        />

                        <ambientLight
                            intensity={ 3.0 }
                            color="#ffffff"
                        />

                        <directionalLight
                            position={ [ 2, 1, 1 ] }// this is a vector and a vector is just an array
                            // and these position points represent the x axis, y axis and z axis
                            intensity={ 1 }
                            color="#ffffff"
                        />

                        <OrbitControls
                            enableZoom={ false }
                            enablePan={ false }
                            enableRotate={ true }
                            // rotateSpeed={ 1.0 }
                            // autoRotate={ true } // no need for autoRotate since I'm rotating the
                            // object based on the useFrame hook
                        />

                        <Suspense fallback={ <Loader /> }>

                            <Mesh />

                        </Suspense>

                    </Canvas>

                </div>

            </div>

        </div>

    );

} // end of CubeTexturesComponent


