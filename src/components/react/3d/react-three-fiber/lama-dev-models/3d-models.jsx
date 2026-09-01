



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
// 1 - we are going to use 3d models so for example, when we click the web design title
// we will see the web design 3d model and
// 2 - we can find these 3d models on Scetchfab and let's go to " https://sketchfab.com/ "
// and Scetchfab bills itself as :
/*  
    The leading platform for 3D & AR on the web

    Manage your 3D assets. Distribute 3D & AR experiences. Collaborate with others.
    Showcase your work. Buy & sell 3D models.
*/
// 3 - and we can search for a 3d model like " chair " and then a bunch of 3d chair will
// appear and then
// 4 - click the " downloadable " checkbox and then choose our chair
// 5 - and then click the " Download 3D Model " link and then
// 6 - a modal will appear and from here we can click on the download button next to the
// file type : " gLTF " and then
// 7 - we will save the file to our images folder in the enchanting_apps folder and then
// 8 - if we unzip the chaif file we then see 4 new files and one of them is called
// " scene.gltf " and that is our 3D object and
// 9 - to import this into our project we will need gltf pipeline and to get this we need
// to go to the following page : " https://github.com/CesiumGS/gltf-pipeline " and
// 10 - then we need to install the gitf pipeline or " npm i -g gltf-pipeline " or :
/*
    // #19
    // gltf pipeline:
    // " Home@Mac-Studio enchanting_apps % sudo npm i -g gltf-pipeline " and this
    // will install the gltf-pipeline package into our application
*/
// 10 - and now we need to convert our gltf file into a jsx file or a file we can
// use in the browser but now we want to " Converting a glTF to Draco glTF " and to that
// 11 - we need to run " gltf-pipeline -i model.gltf -o modelDraco.gltf -d " in the
// terminal or : " Home@Mac-Studio chair % gltf-pipeline -i scene.gltf -o chair.gltf -d "
// and remember we had to go into the chair folder for this to work and now
// 12 - if we go to the /images/chair file folder we now see a file called
// " chair.gltf " and this file is the combined version of all the files we downloaded
// from Sketchfab and now
// 13 - we need to convert the " chair.gltf " file to a jsx file or a react component
// and to do that we need to go to the " https://github.com/pmndrs/gltfjsx " site and
// this site says : " A small command-line tool that turns GLTF assets into declarative
// and re-usable react-three-fiber JSX components. " and from here we need to
// 14 - do " Home@Mac-Studio chair % npx gltfjsx model.gltf --transform " or in our case
// we need to do " Home@Mac-Studio chair % npx gltfjsx chair.gltf --transform " and then
// 15 - inside the chair folder we see a jsx file or " chair.jsx " and this is did not work;
// instead I looked at the lama dev screen and saw a different version number and
// when I entered the same command as what lama dev used or
// " Home@Mac-Studio chair % npx gltfjsx@6.1.4 chair.gltf --transform " then everything
// worked as expected or I see the chair.jsx file in the chair folder and the file
// is filled with content and now
// 16 - let's move this file to into the components folder or
// " components/3d/3d-models/chair.jsx " and then
// 17 - let open up the chair.jsx file and we see :
/*
    //
    Auto-generated by: https://github.com/pmndrs/gltfjsx
    Command: npx gltfjsx@6.1.4 chair.gltf --transform
    Author: Francesco Coldesina (https://sketchfab.com/topfrank2013)
    License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
    Source: https://sketchfab.com/3d-models/chair-b5ecdb6253a7454c916954bef6c10251
    Title: Chair
    //

    import React, { useRef } from 'react'
    import { useGLTF } from '@react-three/drei'

    export function Model(props) {
    const { nodes, materials } = useGLTF('/chair-transformed.glb')
    return (
        <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-337.62, -369.78, -444.19]}>
                <mesh geometry={nodes.Object_2.geometry} material={materials['default']} />
                <mesh geometry={nodes.Object_3.geometry} material={materials['default']} />
                <mesh geometry={nodes.Object_4.geometry} material={materials['default']} />
                <mesh geometry={nodes.Object_5.geometry} material={materials['default']} />
                <mesh geometry={nodes.Object_6.geometry} material={materials['default']} />
            </group>
        </group>
        </group>
    )
    }

    useGLTF.preload('/chair-transformed.glb')
*/
// 18 - and then we need to copy the " chair-transformed.glb " from the chair folder and
// paste in the public and we can see that the Chair.jsx file is refrencing that file
// and then let's test this by going to the " web-design " file and adding :
/*
    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.webDesignContainer }>

            {
                // ==============================
                // Canvas component
                // ==============================
            }
            <Canvas>

                <OrbitControls enableZoom={ false} />

                <Chair />

            </Canvas>

        </div>

    );
*/
// 19 - and before the chair will render in the browser we have to change
// " export function Model(props) { " in the Chair component to
// " export default function Model(props) { " and now our chair should render
// 20 - but first we need to add some lighting in order to see the chair so
// let's add :
/*
    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.webDesignContainer }>

            {
                // ==============================
                // Canvas component
                // ==============================
            }
            <Canvas>

                <OrbitControls enableZoom={ false} />

                <Stage environment='city' intensity={ 0.6 } >
                    <Chair />
                </Stage>

            </Canvas>

        </div>

    );
*/
// 21 - at the end of the day, I got the shoe to sort of work and that's it
// so I'll keep these notes in this file and not the app-enchanting-apps.js file
// and work on increasing my skill set here
// ==============================

// ==============================
// 1 - components/3d/3d-models/3d-models.js
// 2 - components/3d/3d-models/3d-models.module.scss
// 3 - components/3d/3d-models/development.js
// 4 - components/3d/3d-models/product-design.js
// 5 - components/3d/3d-models/web-design.js
// ==============================







// ==============================
// notes
// ==============================

// ==============================
// optimizing performance - part 1
// ==============================

// ==============================
// 1 - in order to make the site work on mobile devices I had to make some changes
// since the 3D image files were not rendering on my 3 GB iPhone 7 Plus
// 2 - so I had to hide the moon landing componet for mobile devices and small iPads
// since the Apollo 11 gib file is 12.2 GB in size and was causing the site on my 3 GB
// iPhone to not work
// 3 - I also hid the polaroid camera component since the Polaroid Camera glb file was
// very large as well
// 4 - and then I hid the Earth and Sphere components for screen sizes less than
// 1280 pixes, with the assumption being that large iPads, laptops and desktop would
// have enough RAM and computing horsepower to handle the large 3D files
// 5 - however, my 8 GB RAM iPad Pro handled the site just fine and I tested 3 new
// iPhones at the Apple store on 12-18-23 and the 8 GB RAM iPhone 15 Pro and
// 15 Pro Max handled the site just fine but the site did not work properly on the
// 6GB ram iPhone 15 ( it had the same problem I had on my iPhone 7 Plus )
// 4 - however, my iPhone 7 Plus was able to handle the 3D Earth image, the Polaroid
// Camera image and the Sphere image just fine
// ==============================








// ==============================
// notes
// ==============================

// ==============================
// optimizing performance - part 2
// ==============================

// ==============================
// please see the following article for details on passing refs from child to parent :
// " https://dmitripavlutin.com/react-forwardref/ "
// please see the following answer from stackoverflow for on the Netlify error I was
// getting : " Error: Component definition is missing display name " :
// " https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name "
// ==============================

// ==============================
// 1 - the goal is wait and load the Earth 3D model and the apollo 11, paloroid camera
// and show 3D model when isIntersecting is true and then this will trigger a loading
// event for that section and that way we have a fast initial page loading event and
// wait to render the large 3D model files until we reach that section on the web page
// and then once we reach that section we fire the loading event so the user knows that
// the 3D model is loading
// 2 - to make that happen we first get a reference to the Earth 3D model section and the
// 3D models section and to do that we had to pass a ref from child to parent so that we
// could get the isIntersecting to work as soon as that section came into view
// 3 - and to do that we had to use forwardRefs and see the article above for how to do
// that; however,
// 4 - this would not work for me since on page load the ref is not displayed based on
// the way or our is set up so I added 2 dummy divs that hosted the needed refs and
// we were able to achieve the same effect as with the forward divs
// ==============================








// ==============================
// notes
// ==============================

// ==============================
// optimizing performance - part 3
// ==============================


// ==============================
// 1 - we had to comment out all the preloading code for each 3D model or
// " // useGLTF.preload( 'models/apollo-11.glb' ) " and the reason we had to
// do that is because these large glb files were being downloaded on page
// load and therefore hurting our inital page loading times in a major way
// and this didn't seem to have any negative impact on loading the 3D models
// later using the isIntersecting API
// ==============================












// import in the useEffect, useRef, useState hooks
import { useEffect, useRef, useState } from 'react';
// import in the Polaroid Camera component
import PolaroidCameraComponent from './polaroid-camera';
// import in the Product Design component
import ProductDesignComponent from './product-design';
// import in the Product Design v2 component
// import ProductDesignV2Component from './product-design-v2';
// import in the MoonLanding component
import MoonLandingComponent from './moon-landing';
// import in our stylesheet
import styles from './3d-models.module.scss';


export default function ThreeDModelsAnimationComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ works, setWorks ]         = useState( '' );
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

    // use browserWidth inside the useEffect hook below
    let browserWidth;

    // ==============================
    // useRef();
    // ==============================

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing the following useRef variables
    const firstLiRef  = useRef();
    const secondLiRef = useRef();
    const thirdLiRef  = useRef();
    const h1Ref       = useRef();
    const pRef        = useRef();

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
        // code block #1
        // ==============================

        // ==============================
        // calculate browser width
        // ==============================

        // get the browser width so that I can either show or hide the " schedule a demo "
        // button based on the window size
        browserWidth = window.innerWidth;

        // test
        // console.log( browserWidth );

        // ==============================
        // code block #2
        // ==============================

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // reference the specified DOM element below

        if (
            firstLiRef.current &&
            browserWidth > 1376
        ) {

            // update state
            setWorks( 'Apollo 11' );

            // on bigger screens, set the color
            firstLiRef.current.style.color = 'var( --yellow-60 )';

        } // end of if

        else if ( 
            firstLiRef.current &&
            secondLiRef.current &&
            pRef.current &&         
            browserWidth <= 1376
        ) {

            // update state
            setWorks( 'Product Design' );

            // on smaller screens, set the text
            pRef.current.textContent = 'Choose a color and hold and drag the shoe to rotate';

            firstLiRef.current.style.display  = 'none';
            secondLiRef.current.style.display = 'none';

        } // end of if

        // ==============================
        // code block #3
        // ==============================

        // ==============================
        // add an event listener for the browser resize event
        // ==============================

        // ==============================
        // remember, we are doing this so that as we test the app by making the browser
        // window smaller or larger we can see the correct 3D components
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

    // ==============================
    // function 1
    // ==============================

    // ==============================
    // handleResize function
    // ==============================

    // ==============================
    // purpose : on the resize event, show and / or hide the elements based
    // on browser width
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

        // test
        console.log( browserWidth );
        console.log( 'In handleResize' );

        // ==============================
        // code block #2
        // ==============================

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // reference the specified DOM element below
/*
        if (
            firstLiRef.current.style.color  === 'transparent' &&
            secondLiRef.current.style.color === 'transparent' &&
            browserWidth === 1367
        ) {

            // h1Ref.current.style.display = 'none';

            pRef.current.textContent = 'Hold and drag to rotate';

            firstLiRef.current.style.color  = 'transparent';
            secondLiRef.current.style.color = 'transparent';
            thirdLiRef.current.style.color  = 'var( --yellow-60 )';
    
            firstLiRef.current.style.display  = 'block';
            secondLiRef.current.style.display = 'block';

        } // end of else if

        else if (
            firstLiRef.current.style.color === 'var( --yellow-60 )' &&
            browserWidth === 1367
        ) {

            // h1Ref.current.style.display = 'none';

            pRef.current.textContent = 'Hold and drag to rotate';

            firstLiRef.current.style.color  = 'var( --yellow-60 )';
            secondLiRef.current.style.color = 'transparent';
            thirdLiRef.current.style.color  = 'transparent';

            firstLiRef.current.style.display  = 'block';
            secondLiRef.current.style.display = 'block';

        } // end of else if
    
        else if (
            secondLiRef.current.style.color === 'var( --yellow-60 )' &&
            browserWidth === 1367
        ) {

            // h1Ref.current.style.display = 'none';

            pRef.current.textContent = 'Hold and drag to rotate';

            firstLiRef.current.style.color  = 'transparent';
            secondLiRef.current.style.color = 'var( --yellow-60 )';
            thirdLiRef.current.style.color  = 'transparent';

            firstLiRef.current.style.display  = 'block';
            secondLiRef.current.style.display = 'block';

        } // end of else if
*/

        if ( 
            firstLiRef.current.style.color === 'var( --yellow-60 )' &&
            browserWidth > 1376
        ) {

            pRef.current.textContent = 'Hold and drag to rotate';

            firstLiRef.current.style.color  = 'var( --yellow-60 )';
            secondLiRef.current.style.color = 'transparent';
            thirdLiRef.current.style.color  = 'transparent';

            firstLiRef.current.style.display  = 'block';
            secondLiRef.current.style.display = 'block';

        } // end of else if

        else if ( 
            secondLiRef.current.style.color === 'var( --yellow-60 )' &&
            browserWidth > 1376
        ) {

            pRef.current.textContent = 'Hold and drag to rotate';

            firstLiRef.current.style.color  = 'tranparent';
            secondLiRef.current.style.color = 'var( --yellow-60 )';
            thirdLiRef.current.style.color  = 'transparent';

            firstLiRef.current.style.display  = 'block';
            secondLiRef.current.style.display = 'block';

        } // end of else if

        else if ( 
            thirdLiRef.current.style.color === 'var( --yellow-60 )' &&
            browserWidth > 1376
        ) {

            pRef.current.textContent = 'Choose a color and hold and drag the shoe to rotate';

            firstLiRef.current.style.color  = 'transparent';
            secondLiRef.current.style.color = 'transparent';
            thirdLiRef.current.style.color  = 'var( --yellow-60 )';

            firstLiRef.current.style.display  = 'block';
            secondLiRef.current.style.display = 'block';

        } // end of else if

        else if ( 
            thirdLiRef.current.style.color === 'transparent' &&
            browserWidth > 1376
        ) {

            pRef.current.textContent = 'Choose a color and hold and drag the shoe to rotate';

            firstLiRef.current.style.color  = 'transparent';
            secondLiRef.current.style.color = 'transparent';
            thirdLiRef.current.style.color  = 'var( --yellow-60 )';

            firstLiRef.current.style.display  = 'block';
            secondLiRef.current.style.display = 'block';

        } // end of if

        else if (
            browserWidth <= 1376
        ) {

            console.log( 'In 1376')

            // update state
            setWorks( 'Product Design' );

            pRef.current.textContent = 'Choose a color and hold and drag the shoe to rotate';

            firstLiRef.current.style.display  = 'none';
            secondLiRef.current.style.display = 'none';
            thirdLiRef.current.style.color    = 'transparent';

        } // end of else if

    } // end of handleResize function

    // ==============================
    // function 2
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


    return (

        // ==============================
        // container
        // ==============================

        <div 
            className={ styles.threeDModelsContainer }
        >

            {
                /*

                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================

                */
            }
            <div 
                className={ styles.threeDModelsContainerDiv1 }
            >

                {
                    /*
                        // ==============================
                        // create DOM reference
                        // ==============================
                
                        // STEP 2 ( see below )
                
                        // tie the initialized useRef variable from above into a specific DOM element so
                        // that we can reference that DOM element in our code
                    */
                }
                <h1
                    ref={ h1Ref }
                >
                    3D Animations
                </h1>

                {
                    /*
    
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 1 ( labels )
                        // ==============================
    
                    */
                }
                <div className={ styles.threeDModelsContainerDiv1Div1 }>

                    <ul>
                        {
                            /*
                                // ==============================
                                // create DOM reference
                                // ==============================
                        
                                // STEP 2 ( see below )
                        
                                // tie the initialized useRef variable from above into a specific DOM element so
                                // that we can reference that DOM element in our code
                            */
                        }
                        <li
                            ref={ firstLiRef }
                            onClick={ () => 
                                {
                                    setWorks( 'Apollo 11' );
                                    firstLiRef.current.style.color  = 'var( --yellow-60 )';
                                    secondLiRef.current.style.color = 'transparent';
                                    thirdLiRef.current.style.color  = 'transparent';
                                    pRef.current.textContent        = 'Hold and drag to rotate';
                                }
                            }
                        >
                            Apollo 11
                        </li>
                        <li
                            ref={ secondLiRef }
                            onClick={ () => 
                                {
                                    setWorks( 'Polaroid Camera' );
                                    firstLiRef.current.style.color  = 'transparent';
                                    secondLiRef.current.style.color = 'var( --yellow-60 )';
                                    thirdLiRef.current.style.color  = 'transparent';
                                    pRef.current.textContent        = 'Hold and drag to rotate';
                                }
                            }
                        >
                            Polaroid Camera
                        </li>
                        <li
                            ref={ thirdLiRef }
                            onClick={ () => 
                                {
                                    setWorks( 'Product Design' );
                                    firstLiRef.current.style.color  = 'transparent';
                                    secondLiRef.current.style.color = 'transparent';
                                    thirdLiRef.current.style.color  = 'var( --yellow-60 )';
                                    pRef.current.textContent        = 'Choose a color and hold and drag the shoe to rotate';
                                }
                            }
                        >
                            Product Design
                        </li>
                    </ul>

                </div>

                {
                    /*
    
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 2 ( 3D model components )
                        // ==============================
    
                    */
                }
                <div className={ styles.threeDModelsContainerDiv1Div2 }>

                    {
                        works === 'Apollo 11' ? (

                            <MoonLandingComponent />

                        ) : works === 'Polaroid Camera' ? (

                            <PolaroidCameraComponent />

                        ) : works === 'Product Design' ? (

                            <ProductDesignComponent

                                // pass down this property to the
                                // child component and the child component will pass this
                                // prop to the shoe 3D model and then this prop will update
                                // the color in the 3D model
                                showColor={ showColor }

                            />

                        ) : null

                    }

                </div>

                {
                    /*
    
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 3 ( instructional text )
                        // ==============================
    
                    */
                }
                <div className={ styles.threeDModelsContainerDiv1Div3 }>

                    <p
                        ref={ pRef }
                    >
                        Hold and drag to rotate
                    </p>

                </div>

                {
                    /*
    
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 4 ( button colors )
                        // ==============================
    
                    */
                }
                {
                    works === 'Product Design' ? (

                        <div className={ styles.threeDModelsContainerDiv1Div4 }>

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

                    ) : null

                }

            </div>

        </div>

    );

} // end of ThreeDModelsAnimationComponent



