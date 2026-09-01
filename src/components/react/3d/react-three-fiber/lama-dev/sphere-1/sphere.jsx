



// ==============================
// notes
// ==============================

// ==============================
// create 3d animations using the
// three.js library,
// @react-three/fiber package and the
// @react-three/drei package
// ==============================

// ==============================
// please see the following video from Lama Dev for details :
// " https://www.youtube.com/watch?v=qALsVa-V9qo&t=10s " and the video is called :
// " React 3D Portfolio Website with Three.js | Build and Deploy Responsive React Portfolio "
// ==============================

// ==============================
// step 1
// ==============================

// ==============================
// 1 - remember, we have to import in the Canvas component and the Canvas component creates
// its own environment and remember we can not use any html inside the Canvas component and
// 2 - we will create three.js items inside the Canvas component and then
// 3 - include " <mesh></mesh> " inside the Canvas compoennt
// 4 - and inside the <mesh /> component we will be using the <boxGeometry /> component from
// the threejs website : " https://threejs.org/docs/#api/en/geometries/BoxGeometry "
// 5 - and then add an args property to <boxGeometry args={ [ 3.5, 3.5, 3.5 ] } /> to give the box
// some width, height and depth and then
// 6 - add the <OrbitControls /> component so that we can move the 3d cube when we place
// our cursor over the cube and move it and then
// 7 - we need to turn zoom off ( even though I could not get zoom to work ) and then
// rotate the cube automatically by doing " enableZoom={ false } autoRotate " and then
// 8 - add a color to the cube by using three.js <meshStandardMaterial /> component and for
// more information, see " https://threejs.org/docs/#api/en/materials/MeshStandardMaterial "
// and add " <meshStandardMaterial color="red" /> "; however, we will not see the red since
// there is no light on the box so to fix this we will
// 9 - add the <ambientLight /> component or " <ambientLight intensity={ 1 } /> " but we
// can not see the edges so we need to add the
// 10 - <directionalLight /> component or  " <directionalLight position={ [ 3, 2, 1 ] } /> "
// and give it a position and then
// 11 - let's add some color and text to the cube and we will do this by moving the color
// from <meshStandardMaterial /> component to the <RenderTexture /> component or :
/*
    <meshStandardMaterial>
        <RenderTexture
            attach="map"
        >
            <color
                attach="background"
                args={ [ "pink" ] }
            />
            <Text
                fontSize={ 3 }
                color="#555"
            >
                Helping You Grow
            </Text>
        </RenderTexture>
    </meshStandardMaterial>
*/
// 12 - and then we need to add some perspective to the cube and we can do this inside
// the <RenderTexture /> component by adding :
// " <PerspectiveCamera makeDefault position={ [ 0, 0, 2 ] } /> " 
// 13 - and now when we look at the cube we see our font size is too big so let's
// reduce the font size in the <Text /> component to 0.5 and then
// 14 - we will use the three.js useFrame hook to animate our text or give it a fluid back
// and forth motion on the cuve but first we need to create a new sub component called
// <Mesh /> and then insert this component into the <Cube /> component below and we
// do this so that we can use the useFrame hook so
// 15 - inside the <Mesh /> component we will use the useFrame hook to animate
// the text across the cube and we do that as follows :
// " useFrame( state => ( textRef.current.position.x = Math.sin( state.clock.elapsedTime ) * 2 ) ) "
// 16 - and now we have a 3d cube that rotates automatically and has the text
// " Helping You Grow " moving across the cube in a fluid motion and the text moves
// back and forth and looks really great
// ==============================

// ==============================
// files for step 1
// ==============================

// ==============================
// 1 - components/3d/cube/cube.js
// 2 - components/3d/cube/cube.module.scss
// 2 - components/3d/cube/mesh.js
// ==============================





// ==============================
// notes
// ==============================

// ==============================
// create 3d animations using the
// three.js library,
// @react-three/fiber package and the
// @react-three/drei package
// ==============================

// ==============================
// please see the following video for details :
// " https://www.youtube.com/watch?v=vTfMjI4rVSI&t=139s " and the video is called :
// " React Three Fiber (R3F) - The Basics "
// and this video is good as well :
// " https://www.youtube.com/watch?v=DPl34H2ISsk "
// ==============================

// ==============================
// 1 - from Google search on " mesh " : "In Three.js and React Three Fiber, a 3D object
// is called a Mesh. And there's one thing you need to know and remember about
// meshes: Mesh = Geometry + Material. The geometry is what defines the shape of the
// mesh. " so <mesh></mesh> is our 3d object
// 2 - we can change the size of the box by using " args " or
// " <boxGeometry args={ [ 3.5, 3.5, 3.5 ] } /> "
// 3 - we can change the color of the cube by adding :
// " <meshStandardMaterial color="orange"> "
// 4 - but we can see the orange color because we do not have any light on the cube
// so let's add a property to the Canvas component or
// " <directionalLight /> " and we need to add a position for the light in order for
// this to work or " <directionalLight position={ [ 0, 0, 2 ] } /> " and the numbers
// represent the x, y and z coordinates and
// 5 - remember, ambient light is light that is all around the 3d object; whereas,
// directional light is light that is coming directly at the 3d object
// 6 - and let's add some ambient light or " <ambientLight intensity={ 1 } /> "
// 7 - the useFrame hook in react fiber let's us run a callback function inside each
// frame and inside the useFrame hook we can recieve the state and the clock delta or
// " delta " and delta represents the time in seconds since the last frame
// 8 - use the OrbitControls compnent from react-three/drei to spin the cube automatically
// ==============================

// ==============================
// 1 - components/3d/cube-v2/cube.js
// 2 - components/3d/cube-v2/cube.module.scss
// 2 - components/3d/cube-v2/mesh.js
// ==============================










// ==============================
// notes
// ==============================

// ==============================
// notes for creating a 3D sphere
// ==============================

// ==============================
// notes are located in the following file : components/3d/sphere/sphere.js
// ==============================

// ==============================
// create 3d animations using the
// three.js library,
// @react-three/fiber package and the
// @react-three/drei package
// ==============================

// ==============================
// please see the following video for details :
// " https://www.youtube.com/watch?v=qALsVa-V9qo&t=10s " and the video is called :
// " React 3D Portfolio Website with Three.js | Build and Deploy Responsive React Portfolio "
// ==============================

// ==============================
// 1 - to make the sphere responsive : (1) use the scale state value and (2) use the
// useEffect hook to set the scale on page load and (3) use the handleResize function
// to reset the scale as the screen size changes
// ==============================

// ==============================
// 1 - components/3d/sphere/sphere.js
// 2 - components/3d/sphere/sphere.module.scss
// ==============================










// ==============================
// notes
// ==============================

// ==============================
// remember, the Mesh component plus the Sphere component did not work as well as the
// stand alone Sphere component when using MeshDistortMaterial
// ==============================









// import in the useEffect, useState hooks
import { useEffect, useState } from 'react';
// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the OrbitControls, Sphere and MeshDistortMaterial component
import {
    OrbitControls,
    Sphere,
    MeshDistortMaterial
} from '@react-three/drei';
// import in our stylesheet
import styles from './sphere.module.scss';



export default function Sphere3dAnimationComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ scale, setScale ] = useState();

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
    // purpose : use the handleResize function to set the scale value on
    // page load
    // ==============================

    useEffect( () => {

        // call the handleResize function
        handleResize();

    }, [] ); // end of useEffect 1

    // ==============================
    // useEffect 2
    // ==============================

    // ==============================
    // purpose : call the handleResize function on the browser resize event
    // ==============================

    // the useEffect hook will run after the initial page load and then the
    // useEffect hook will be called each time the browserWidth changes 
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
        // window smaller or larger we can see the correct 3D sphere
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

    // ==============================
    // purpose : change the scale value based on the browser width
    // ==============================

    async function handleResize( e ) {

        // ==============================
        // code block #1
        // ==============================

        // ==============================
        // remember, we had to define browserWidth inside this function in order
        // to the get the 2 if statements below to work
        // ==============================

        // define browserWidth
        browserWidth = window.innerWidth;

        // ==============================
        // code block #2
        // ==============================

        if (
            browserWidth > 1920
        ) {

            setScale( 2.75 );

        } // end of if

        else if (
            browserWidth <= 1920 &&
            browserWidth > 1440
        ) {

            setScale( 2.7 );

        } // end of if

        else if (
            browserWidth <= 1440 &&
            browserWidth > 1032
        ) {

            setScale( 2.55 );

        } // end of if

        else if (
            browserWidth <= 1032 &&
            browserWidth > 768
        ) {

            setScale( 2.4 );

        } // end of if

        else if (
            browserWidth <= 768 &&
            browserWidth > 620
        ) {

            setScale( 2.0 );

        } // end of if

        else if (
            browserWidth <= 620 &&
            browserWidth > 480
        ) {

            setScale( 1.7 );

        } // end of if

        else if (
            browserWidth <= 480 &&
            browserWidth > 375
        ) {

            setScale( 1.65 );

        } // end of if

        else if (
            browserWidth <= 375
        ) {

            setScale( 1.5 );

        } // end of if

    } // end of handleResize function


    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.sphere3dContainer }>

            <h1>3D Animations</h1>

            <div className={ styles.sphere3dContainerDiv1 }>

                {
                    // ==============================
                    // Canvas component
                    // ==============================
                }
                <Canvas
                    // camera={ { fov : 25, position : [ 5, 5, 5 ] } } // fov stands for field of view
                >

                    <OrbitControls
                        enableZoom={ false }
                    />
                    <ambientLight
                        intensity={ 1 }
                    />
                    <directionalLight
                        position={ [ 3, 2, 1 ] }
                    />

                    {
                        // ==============================
                        // to make the sphere responsive :
                        // 1 - use the scale state value and
                        // 2 - use the useEffect hook to set the scale on page load and
                        // 3 - use the handleResize function to reset the scale as the screen
                        // size changes
                        // ==============================
                    }
                    <Sphere 
                        args={ [ 1, 100, 200 ] } // args eqaul radius, width and height
                        scale={ scale } // use the scale state value and remember, this
                        // makes the sphere responsive
                    >

                        <MeshDistortMaterial
                            color='rgba( 114, 67, 94, 1 )'
                            attach='material'
                            distort={ 0.5 }
                            speed={ 2 }
                        />

                    </Sphere>

                </Canvas>

            </div>

            <div className={ styles.sphere3dContainerDiv2 }>

                <picture>
                    <source 
                        srcSet={ '/images/lama_moon_01_500.webp' }
                        media={ '( min-width : 1032px )' }
                        type={ 'image/webp' }
                    />
                    <source 
                        srcSet={ '/images/lama_moon_01_400.webp' }
                        media={ '( min-width : 620px )' }
                        type={ 'image/webp' }
                    />
                    <source 
                        srcSet={ '/images/lama_moon_01_300.webp' }
                        media={ '( min-width : 0px )' }
                        type={ 'image/webp' }
                    />
                    <img
                        src={ '/images/lama_moon_01_500.png' }
                        loading={ 'lazy' }
                        alt={ 'Moon walker' }
                    />
                </picture>

            </div>

            <div className={ styles.sphere3dContainerDiv3 }>

                <p>
                    To move the blob, move your cursor over the blob
                </p>

            </div>

        </div>

    );

} // end of Sphere3dAnimationComponent



