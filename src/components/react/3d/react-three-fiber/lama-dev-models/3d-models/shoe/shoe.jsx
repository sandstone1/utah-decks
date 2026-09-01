




// import in the Suspense, useEffect, useRef, useState component
import { Suspense, useEffect, useRef, useState } from 'react';
// import in the Canvas, useFrame component
import { Canvas, useFrame } from '@react-three/fiber';
// import in the CameraControls, Perspective Camera and Stage components
import { CameraControls, PerspectiveCamera, Stage } from '@react-three/drei';
// import in the Shoe jsx model
import ShoeModel from "./shoe-v2";
// import in our stylesheet 
import styles from './shoe.module.scss';



// pass down the color property to the shoe.jsx model ( child component of the ShoeComponent )
// and we are doing this so that we can dynamically change the color of the shoe
export default function ShoeComponent( { color } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ showColor, setShowColor ] = useState( 'white' );

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

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function 1
    // ==============================

    // ==============================
    // handleChangeColor function
    // ==============================

    async function handleChangeColor( e ) {

        e.preventDefault();

        // ==============================
        // code block #1
        // ==============================

        if ( e.target.style.backgroundColor === 'var( --white )' ) {

            setShowColor( 'rgba( 255, 255, 255, 1 )' );

        } // end of if

        else if ( e.target.style.backgroundColor === 'var( --blue-78 )' ) {

            setShowColor( 'rgba( 0, 125, 240, 1 )' );

        } // end of else if

        else if ( e.target.style.backgroundColor === 'var( --red-100 )' ) {

            setShowColor( 'rgba( 210, 53, 69, 1 )' );

        } // end of else if

        else if ( e.target.style.backgroundColor === 'var( --purple )' ) {

            setShowColor( 'rgba( 111, 66, 193, 1 )' );

        } // end of else if

        else if ( e.target.style.backgroundColor === 'var( --green-200 )' ) {

            setShowColor( 'rgba( 37, 117, 98, 1 )' );

        } // end of else if

    } // end of handleChangeColor function

    // ==============================
    // components
    // ==============================

    // create a tiny inline wrapper for our custom shoe model and we had to do it this
    // way so that we could use the useFrame hook and thereby auto rotate the shoe
    const RotatingShoeComponent = () => {

        const meshRef = useRef();

        useFrame( ( state, delta ) => {

            if ( !meshRef.current ) return;

            const elapsedTime = state.clock.getElapsedTime();
            
            // rotate the model on its Y axis
            meshRef.current.rotation.y = elapsedTime * 0.250;

        } ); // end of useFrame

        return (

            <group ref={ meshRef }>
    
                <ShoeModel color={ showColor } />
    
            </group>

        ); // end of return

    }; // end of the RotatingShow component


    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.shoeContainer } >

            <div>

                <div>

                    <p>Choose a color and hold and drag the shoe to rotate</p>

                    <ul>

                        <button
                            style={ { backgroundColor : 'var( --white )' } }
                            onClick={ handleChangeColor }
                        />
                        <button
                            style={ { backgroundColor : 'var( --blue-78 )' } }
                            onClick={ handleChangeColor }
                        />
                        <button
                            style={ { backgroundColor : 'var( --red-100 )' } }
                            onClick={ handleChangeColor }
                        />
                        <button
                            style={ { backgroundColor : 'var( --purple )' } }
                            onClick={ handleChangeColor }
                        />
                        <button
                            style={ { backgroundColor : 'var( --green-200 )' } }
                            onClick={ handleChangeColor }
                        />

                    </ul>

                </div>

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
                            fov={ 13.0 }
                            position={ [ 0, 0, 10.0 ] }
                        />

                        <CameraControls 
                            ref={ cameraControlsRef }   // need this so we can run useEffect above
                            dollySpeed={ 0 }            // blocks camera forward / backward tracking
                            polarRotateSpeed={ 1.0 }
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

                                <RotatingShoeComponent />

                            </Stage>

                        </Suspense>

                    </Canvas>

                </div>

            </div>

        </div>

    );

} // end of ShoeComponent


