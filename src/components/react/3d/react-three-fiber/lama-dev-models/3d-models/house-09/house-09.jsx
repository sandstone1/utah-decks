

// ==============================
// on how to cast shawdows, see the following article :
// " https://sbcode.net/react-three-fiber/shadows/ "
// ==============================




// import in the Suspense, useEffect, useRef component
import { Suspense, useEffect, useRef } from 'react';
// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the CameraControls, Perspective Camera and Stage components
import { CameraControls, PerspectiveCamera, Stage } from '@react-three/drei';
// import in the House 09 jsx model
import House09Model from './house-09-v2';
// import in our stylesheet
import styles from './house-09.module.scss';



export default function House09Component() {

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

    const cameraControlsRef = useRef();

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
    // purpose : make sure we do not get uncontroled zooming on 3d models and do so while
    // preserving the single-finger horizontal dragging to orbit the model
    // ==============================

    useEffect(() => {

        if ( !cameraControlsRef.current ) return;

        const controls = cameraControlsRef.current;

        // this kills pinch / wheel zooming while preserving the single-finger
        // horizontal dragging to orbit the model
        controls.mouseButtons.wheel = 0;    // kills trackpad scroll zooming on desktop
        controls.touches.two        = 0;    // kills two-finger pinch zooming on mobile      
        controls.touches.three      = 0;    // kills three-finger zooming

    }, []); // end of useEffect 1


    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.house09Container }>

            <div>

                {
                    /*
                        in Astro, my model was increasing to the default size when
                        scrolling and to stop that I to do the following :
                        
                        1 - set resize =({ scroll:false }) on the Canvas component
                        
                        2 - add adjustCamera={ false } on the stage component and
                        
                        3 - then remove the OrbitCOntrols component

                        4 - to re enable gesture events on mobile, I had to use
                        style={ { touchAction : 'pan-y' } } to force the canvas
                        to pass gestures properly on mobile devices
                    */
                }
                <div>

                    <Canvas
                        shadows
                        resize={
                            { 
                                scroll : false
                            }
                        }
                        style={ { touchAction : 'pan-y' } } // ensures that users can drag sideways to
                        // spin our custom shapes, while vertical swipes slide smoothly down the page
                    >

                        <PerspectiveCamera
                            makeDefault
                            fov={ 75.0 }
                            position={ [ 1000.0, 0, 1100.0 ] } // remember, I had to rotate
                            // the camera on the x axis by 1000 to give it a front side view,
                            // which looked better as its initial position; however, after
                            // some thought I decided to keep it at 0 since it looked bigger
                            // at its initial position
                        />

                        <CameraControls 
                            ref={ cameraControlsRef }   // need this so we can run useEffect above
                            dollySpeed={ 0 }            // blocks camera forward / backward tracking
                            polarRotateSpeed={ 1.0 }
                        />

                        <directionalLight
                            position={ [ 3, 3, 2 ] }// this is a vector and a vector is just an array
                            // and these position points represent the x axis, y axis and z axis
                            intensity={ 2.5 }
                            color="#ffffff"
                            castShadow
                        />

                        <Suspense fallback={null}>

                            {
                                /*
                                    by setting adjustCamera={false}, you are telling the Stage :
                                    "Do not touch my camera. Center the model, set up the lighting,
                                    but leave my [ 0, 0, 8.0 ] camera position exactly where it
                                    is.
                                    
                                    "This single property stabilized your layout, kept your models
                                    at their true code-defined sizes, and completely blocked the
                                    mobile scrolling glitch.
                                */
                            }
                            <Stage environment='city' intensity={ 0.6 } adjustCamera={ false }>

                                <House09Model />

                            </Stage>

                        </Suspense>

                    </Canvas>

                </div>

            </div>

        </div>

    );

} // end of House09Component



