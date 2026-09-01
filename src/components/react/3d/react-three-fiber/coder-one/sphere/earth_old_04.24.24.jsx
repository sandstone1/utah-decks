



// ==============================
// notes
// ==============================

// ==============================
// notes for creating cube/cube.js
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
// notes for creating cube-v2/cube.js
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
// notes for creating earth/earth.js
// ==============================

// ==============================
// create 3d animations using the
// three.js library,
// @react-three/fiber package and the
// @react-three/drei package
// ==============================

// ==============================
// please see the following video for details :
// " https://www.youtube.com/watch?v=ymavtyRpT0E&t=3930s " and the video is called :
// " React Magnificent 3D EARTH with THREE.JS | Beginners w/ React-Three-Fiber 8K Quality "
// ==============================










// import in Suspense component, useEffect, useState hooks
import { Suspense, useEffect, useState } from 'react';
// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the Loader, OrbitControls, Perspective Camera, Stars components
import { Loader, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
// import in the Mesh component
import Mesh from './mesh';
// import in our stylesheet
import styles from './earth.module.scss';



export default function ThreeDEarthComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ domLoaded, setDomLoaded ] = useState( false );

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
    // purpose : make sure the dom is loaded before calling the Loader component
    // and see the notes in apollo-11.js for details
    // ==============================

    useEffect( () => {

        setDomLoaded( true );

    }, [] ); // end of useEffect 1

    // ==============================
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================


    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.earth3dContainer }>

            <div>

                <h1>
                    3D Earth
                </h1>

                <div>

                    <Canvas>

                        {
                            /* camel case components come from three.js and upper case components come
                            from react fiber drei */
                        }

                        <PerspectiveCamera
                            makeDefault
                            fov={ 75.0 }
                            position={ [ 0, 0, 2.0 ] }
                        />

                        <pointLight
                            color='rgba( 246, 243, 234, 1 )'
                            position={ [ 4, 0, 2 ] } // this is a vector and a vector is just an array
                            // and these position points represent the x axis, y axis and z axis
                            intensity={ 10.0 } // usually intensity goes from 0 to 1 but we want the
                            // sun light to be quite intense
                        />

                        <directionalLight
                            color='rgba( 246, 243, 234, 1 )'
                            position={ [ 10, 0, 10 ] } // this is a vector and a vector is just an array
                            // and these position points represent the x axis, y axis and z axis
                            intensity={ 8.0 } // usually intensity goes from 0 to 1 but we want the
                            // sun light to be quite intense
                        />

                        <Stars
                            radius={ 100 }
                            depth={ 50 }
                            count={ 2000 } // don't go too high since it will hurt performance and
                            // this needs to match up with the stars that are outside the canvas
                            factor={ 7 } // each star could have a factor between 1 and 7 so factor
                            // describes the difference in size between the stars in a random way
                            satruation={ 0 }
                            fade={ true } // stars could fade as they die
                            size={ 1 }
                        />

                        <OrbitControls
                            enableZoom={ false }
                            enablePan={ false }
                            enableRotate={ true }
                            // rotateSpeed={ 1.0 }
                            // autoRotate={ true } // no need for autoRotate since I'm rotating the
                            // object based on the useFrame hook
                        />

                        <Suspense fallback={null}>
                        
                            <Mesh />

                        </Suspense>

                    </Canvas>

                    {
                        /*
                            // ==============================
                            // purpose : make sure the dom is loaded before calling the Loader
                            // component and see the notes in apollo-11.js for details
                            // ==============================
                        */
                    }

                    { domLoaded &&

                        <Loader
                            containerStyles={
                                {
                                    // however, after reviewing the positioning below I
                                    // decided it might be best to go with the drei default
                                    // styling or have the container be positioned at the top
                                    // of the window and takes up the entire viewport

                                    // remember, the background color, progress bar and text
                                    // will be the only thing the user sees while the Apollo 11
                                    // model is loading and from a user experience perspective
                                    // this seems to be better than my previous approach, which
                                    // was to show a transparent background and move the container
                                    // box down since there was more content on the page under
                                    // this approach but more importantly it placed the progress
                                    // bar and text at the end of the viewport, making it more
                                    // difficult to see

                                    // remember, the width and height seem to be set to
                                    // 100vw and 100vh automatically and the following 3
                                    // styles seem to be the only way to move the container
                                    // box down and place it underneth the header
                                    // position   : 'absolute',
                                    // top        : '18.0rem',
                                    // left       : '0',
                                    // background : 'red',

                                    // remember, this background worked better than the one below
                                    // where we were matching the initial background style since
                                    // that was causing page jumping when we transitioned from
                                    // the progress bar and text to rendering the 3d objects
                                    background : 'transparent',

                                    // match my initial background styles
                                    // background : 'var( --background-lg-41 )'
                                }
                            }
                            innerStyles={
                                {
                                    // remember, to center the progress bar and text we need to
                                    // declare the following 4 styles in the innerStyles object
                                    // and not in the containerStyles object since they don't work
                                    // in the containerStyles object, for some reason
                                    display      : 'grid', 
                                    alignItems   : 'center',
                                    justifyItems : 'center',
                                    width        : '100vw',
                                    // need to remove the black background for the progress bar
                                    background   : 'transparent'
                                }
                            }
                            barStyles={
                                {
                                    width      : '24.0rem',
                                    height     : '1.25rem',
                                    background : 'var( --gray-225 )'
                                }
                            }
                            dataStyles={
                                {
                                    margin     : '2.0rem 0 0 0',
                                    fontFamily : 'Roboto Flex, sans-serif',
                                    fontSize   : '1.85rem',
                                    color      : 'var( --gray-225 )'
                                }
                            }
                            dataInterpolation={
                                ( p ) => `Loading 3D Earth - ${p.toFixed( 2 ) }% complete`
                            }
                        />

                    }

                </div>

            </div>

            <div>

                <p>
                    Move your cursor over the planet and hold and drag to rotate
                </p>

            </div>

            <div>

                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>
                <div className={ styles.earth3dContainerDiv3Star }></div>

            </div>

        </div>

    );

} // end of ThreeDEarthComponent


