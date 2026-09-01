





// ==============================
// notes 
// ==============================

// ==============================
// IMPORTANT!
// to compress and create your 3d model jsx file from your downloaded glb file
// please following the instructions detailed in the note titled
/*
    // IMPORTANT!
    // workflow to follow
*/
// ==============================









// ==============================
// notes 
// ==============================

// ==============================
// notes for get the Loader to work
// ==============================

// ==============================
// 1 - in order for the loader to work, we need to include
// " <Suspense fallback={null}> "
// ==============================







// ==============================
// notes
// ==============================

// ==============================
// notes for using 3d models and react three fiber to render 3d models in a
// react application
// ==============================

// ==============================
// 1 - remember, for gltf files, first use gltf pipeline to convert the multiple downloaded
// files into one gltf file or
// " Home@Mac-Studio chair % gltf-pipeline -i scene.gltf -o chair.gltf -d " or
// " " Home@Mac-Studio chair % npx gltfjsx@6.1.4 chair.gltf --transform " " and then use
// npx gltfjsx yourfile.glb —transform to turn your gltf or glb file into a jsx file 
// ==============================

// ==============================
// 2 - Remember, if downloading glb files then skip step 1 or the gltf pipeline step
// and go to the second step or use npx gltfjsx yourfile.glb —transform
// ==============================

// ==============================
// 3 - please see the following video for details on how to download gltf or glb files
// and convert the files into jsx components :
// " https://www.youtube.com/watch?v=qALsVa-V9qo " and the title is :
// " React 3D Portfolio Website with Three.js | Build and Deploy Responsive React Portfolio "
// ==============================

// ==============================
// 4 - pleaes see the following article :
// " https://resources.imagine.io/blog/gltf-vs-glb-which-format-is-right-for-your-3d-projects "
// for a good summary of the difference between glb and gltf files and remember, glb is
// essentially a binary version of gltf 
// ==============================











// ==============================
// notes
// ==============================

// ==============================
// old notes but still useful
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
// notes to compress the glb files
// ==============================

// ==============================
// 1 - to compress your glb files, try :
// npx gltfjsx yourfile.glb --transform ( see https://github.com/pmndrs/gltfjsx ) or
// npx gltfjsx yourfile.glb --transform --simplify or
// optimizeglb.com or
// GLTF.report
// ==============================










// ==============================
// notes
// ==============================

// ==============================
// process 1 - does not work consistently
// ==============================

// ==============================
// remember, I was having a hard time making the process below work with a
// number of models I downloaded from sketchfab
// ==============================

// ==============================
// notes to take the downloaded glb file and convert the file into a compressed
// file and a 3d model jsx file that we can include in our project "
// ==============================

// ==============================
// 1 - when I took my 14.6 MB Apollo 11 file ( first put the file in the
// Enchanting Apps folder ) and then go to " https://optimizeglb.com/ " to
// compress your files first and after compressing the " apollo-11_v1.glb ", which was
// 14.6 MB in size we get a new compressed file and we can call it
// " apollo_11_compressed_v2.glb " and that file's size is 2.1 MB and then we can
// put our " apollo-11_v1.glb " file in the parent direcory and then run the following
// command :
// " Home@Mac-Studio enchanting_apps % npx gltfjsx@6.1.4 apollo-11_v1.glb --transform "
// and this will convert the " apollo-11_v1.glb " file into a jsx file that we can use
// in our project and after running the above command we get back 2 files in the
// Enchanting Apps folder called " apollo-11_v1-transformed.glb " and " Apollo-11_v1.jsx "
// and
// 2 - we can save the " apollo-11_v1-transformed.glb " file in the models folder and
// we can rename the file " apollo-11_v1_transformed.glb " and then
// 3 - we can save the " Apollo-11_v1.jsx " file in javascript component folder and
// rename the file " apollo-11-v1.jsx " and 
// 4 - remember, in your jsx file or apollo-11-v1.jsx file make sure to add default to
// your export or " export default function Model( props ) { " and
// 5 - make sure your glb file location is correct and this workflow really reduced
// the size of the glb file and the file loaded much faster than previous Apollo 11
// files and to boot it still looked pretty darn good in the browser 
// ==============================


// ==============================
// 6 - remember, if we get an error when using a compressed file from
// " https://optimizeglb.com/ " then do a draco compression or
// " gltf-pipeline -i apollo_11_v1.glb -o apollo_11_v1_compressed_v3.glb -d "
// and I did that and it produced a much bigger file for the Apollo 11 glb file
// but it worked flawlessly in the browser
// ==============================









// ==============================
// notes
// ==============================

// ==============================
// process 2 - works
// ==============================

// ==============================
// IMPORTANT!
// workflow to follow
// ==============================

// ==============================
// download gltf files and then use the following process to convert them into
// a usable jsx files
// ==============================

// ==============================
// remember, the Polaroid Camera process worked and produced no errors in the
// console, whereas the previous process of downloading the glb file from sketchpad
// and then compressing the glb file and then using
// " npx gltfjsx@6.1.4 polaroid_camera.gltf --transform " did not work, there were
// a ton errors in console and when I used the large glb file in my jsx file then
// it worked but the glb file was 5 MB in size
// ==============================

// ==============================
// so in summary, for the Polaroid Camera the below process worked great and resulted
// in a much smaller glb file
// ==============================

// ==============================
// the House also worked, whereas I could not get it to work before
// ==============================

// ==============================
// 1 - download the gltf file from sketchpad and then move all the downloaded files
// to parent directory and then
// 2 - use the gltf pipeline or " gltf-pipeline -i scene.gltf -o polaroid_camera.gltf -d "
// and this produces a new file called " polaroid_camera.gltf " and that files is 6.7 MB
// in size and
// 3 - then we need to convert our " polaroid_camera.gltf " file into a jsx file and we do
// that by doing : " npx gltfjsx@6.1.4 polaroid_camera.gltf --transform " and
// 4 - then I get 2 new files : " polaroid_camera-transformed.glb " and
// " Polaroid_camera.jsx " and the " polaroid_camera-transformed.glb " file size has
// been reduced to 1.3 MB and
// 5 - let's move our glb file into our models folder and rename the file :
// " polaroid_camera-transformed.glb " and
// 6 - let's move our jsx file into our components folder and rename the file :
// " polaroid-camera-v2.jsx " and
// 7 - then let's modifiy our polaroid-camera-v2.jsx " file by adding a default to
// our export or " export default function Model( props ) { " and
// 8 - make sure your glb file location is correct and this workflow really reduced
// the size of the glb file and the file loaded much faster than previous Polaroid Camera
// files and to boot it still looked pretty darn good in the browser 
// ==============================









// ==============================
// notes
// ==============================

// ==============================
// remember, for the house_09.js and the show.js files I had to change the jsx file
// name from " house-09.jsx " to " house-09-v2.jsx " and " shoe.jsx " to " shoe-v2.jsx "
// in order for it to work and I think R3F was holding onto the old " house-09.jsx " and
// " shoe.jsx " files that did not work or did work in the case of show.jsx, even
// though I changed out which glb file it was pointing to; in any case, making
// the name change to " house-09-v2.jsx " and " shoe-v2.jsx " worked
// ==============================










// ==============================
// notes
// ==============================

// ==============================
// create a indicator / progress bar / spinner component to indicate
// that the page is loading the 3D models
// ==============================

// ==============================
// IMPORTANT!
// for the final and working indicator or progress bar solution, please see
// the 3d-objects.js file and this solution worked great and provided for a
// great user experience to boot
// ==============================

// ==============================
// here is a summary of steps in the process for the 3d-object.js file progress
// bar :
// 1 - in the child component or the cube textures component, the drei Loader
// component will throw off a progress variable and we can use that variable
// to determine when the 3d object has finished loading and as soon as that
// happens we can change state in the cube textures component and then call a
// function that passes the state data to the parent component or the 3d objects
// component and
// 2 - then once we have that value will is the Boolean true, we can change the
// progressBarCompleted state to true in this component
// 3 - in the componnet, useEffect 2 is running once on page load and
// progressBarCompleted is false so nothing happens but we are showing an
// empty progress bar on page load and
// 4 - useEffect 2 will run a second time once the progressBarCompleted state
// changes and it changed in step 2 above so once that happens, useEffect 2
// will run a second time and this time progressBarCompleted is the Boolean
// true so the setTimeout function will run, triggering the running of the
// progress bar and
// 5 - after the setTimeout function has run then we will call setProgressBarStoreState
// function from the zustand store and this will make the progressBarStoreState
// value equal the Booleann true ( note : we can make the progressBarStoreState
// value equal the String ' true ' by doing `${ progressBarStoreState }` )
// and we will use this new value in step 8 below
// 6 - and then if the user goes to another page in our app, like the contact
// page and then comes back to the 3d objects page, then useEffect 2 will run again
// on component mount and
// 7 - this time the progressBarCompleted will be false since for whatever reason
// the drei Loader component is not running again; however,
// 8 - progressBarStoreState is the Boolean true so we can use this value to
// trigger our setTimeout function in useEffect 2, which will run the progress
// bar a second time 
// 9 - but without waiting for the drei Loader component to load the 3d object
// ( see #7 above ) but this is not really a problem since on the second and
// subsequent component mounts, I believe the browser has already cached
// the objects so they come really fast anyway on the second and subsequent
// component mounts
// ==============================

// ==============================
// IMPORTANT!
// IMPORTANT!
// IMPORTANT!
// remember, to keep your types straight since I was thinking the value of
// " `${ progressBarStoreState }` " in the 3d-objects.js file was a Boolean and not
// a String and I was trying to get this value to work in an if statement in useEffect 2,
// when all along " `${ progressBarStoreState }` " was a String and therefore I could not
// get the code and logic to work no matter what I tried even though I could see from
// many console.logs that it should work just fine but once I changed
// " `${ progressBarStoreState }` " to " progressBarStoreState " and realized that
// " progressBarStoreState " was a Boolean then I was good to go
// ==============================

// ==============================
// remember, on testing the Loader component for the first time -
// our Loader component from drei worked great on my Mac Studio
// but on mobile the Loader component wasn't reliably working as expected
// so I was get a blank screen with no progress bar or indicator for several
// seconds in some cases ( I think the hardware just can't handle the efficient
// loading of the 3D models so it was screwing up my drei Loader component )
// ==============================

// ==============================
// remember, on testing the Loader component for the second time on mobile devices and my
// iPhone 7 Plus -
// the Loader component worked just fine or as expected so I commented out the progress
// bar loader information in the 3d-models.js file and just relied on the Loader component
// in the apollo-11.js to provide a loading indicator
// ==============================

// ==============================
// remember, on testing the Loader component for the third time -
// on my iPad on the 3d models page and during the initial rendering of the page
// it was loading the header and h1 tag for a split second and then it went to the
// blank Loader screen and then a second later it rendered the apollo 11 model
// in a very uneasy way and the whole process was a bad user experience; however,
// on the second page visit everything was fine
//
// on testing and iPad on BrowserStack, I noticed the same issue for the 3d objects
// page, where the entire contents of the page would load for a second ( including
// the torus ) and then the drei Loader would kick in and all we would see for a
// second while the progress bar was working was the header, hamburger menu, progress
// bar and text and then once the Loader was finishing loading we would see the
// entire page and this was a bad user experience so
//
// to fix this issue, I changed the Loader containerStyles background from
// " background : 'var( --background-lg-41 ), " to
// " background : 'transparent' " and this seemed to solve the page jumping
// problem and now see the the entire contents of the page minus the
// 3d objects and we see the Loader progress bar and text and once the objects
// have finsihed loading we see the entire page and the transition between
// the Loader state and the completed state is relatively smooth so this seems
// to be the option as of right now
//
// however, once I added torus component back in the 3d object compoenent then
// the Loader progress bar was on top of the torus on page load so then I changed
// the background back to " background : 'var( --background-lg-41 ), " but this
// again caused page jumping or seeing the page content for a second on page
// load and then seeing some of the page content plus the progress bar and text
// for another second or two and then seeing the page content a second time once
// the loading is finished so this will not work
//
// however, I solved this problem, please see the 3d-objects.js file for details
// on my solution, which worked and provided for a great user experience
// ==============================

// ==============================
// remember, the 5 second delay for custom progress bar was causing the Loader
// progress bar to act randomly or in other words once you saw the Loader progress
// bar it went from 100% to 0% and then showed the 3d object
// ==============================

// ==============================
// remember, the 3d objects were not loading during the 5 second delay for custom
// progress bar
// ==============================

// ==============================
// for details on how I created the progress bar to render upon page load
// see the 3d-models.js file
// ==============================

// ==============================
// remember, I used the Intersection observer to detect when the cube textures
// component entered the viewport on the home page for Enchanting Apps so that I
// could prevent the Loader progress bar and text from showing up at the top of the
// home page on page load and this was good for performance reason too
// ==============================

// ==============================
// remember, for the 3d object page and 3d models page I did not use the Intersection
// observer to detect when the cube textures component or the apollo 11 component entered
// the viewport; instead, I wanted to show an indicator on page load if either component
// or the Earth component was still loading
// ==============================

// ==============================
// remember, for the 3d objects page I was getting a " Uncaught Error: Hydration failed
// because the initial UI does not match what was rendered on the server. " when reloading
// the page and this was being caused by :
/*
    dataInterpolation={
        ( p ) => `Loading 3D Models - ${p.toFixed( 2 ) }% complete`
    }
*/
// or Next.js did not like the p tag insertion so to fix this I had to do :
/*
    const [ domLoaded, setDomLoaded ] = useState( false );

    useEffect( () => {
        setDomLoaded( true );
    }, [] );

    return (
        <>
        { domLoaded && ( <Loader /> }
*/
// so " the best way to tackle such issues is to render the component only after the DOM
// is loaded " and this came from an anwser to the following stackoverflow article :
// " https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render "
// and this worked and the result was that upon page load I was seeing the cube textures
// progress bar and text just fine on page load but I was not seeing a blank screen;
// instead I was seeing the header text and hamburger menu while the Loader component
// was still working, which looked just fine so I think this is a good solution
// to the above " Hydration failed "
//
// however, a second solution is to provide a custom page loader that runs for 5 seconds
// on page load and gives the models or objects time to load ( see above for more details )
//
// however, a third option is the best option and see the 3d-objects.js for details
// ==============================

// ==============================
// 1 - pages/3d-models.js
// 2 - pages/3d-models.module.scss
// 3 - components/3d/reat-three-fiber/oliver-larose/cube/cube-textures.js
// 4 - components/3d/reat-three-fiber/oliver-larose/cube/cube-textures.module.scss
// ==============================








// ==============================
// notes
// ==============================

// ==============================
// on how to cast shawdows, see the following article :
// " https://sbcode.net/react-three-fiber/shadows/ "
// ==============================

// ==============================
// 1 - components/3d/reat-three-fiber/lama-dev-models/3d-models/house-09/house-09.js
// 2 - components/3d/reat-three-fiber/lama-dev-models/3d-models/house-09/house-09.module.scss
// ==============================













// import in Suspense component, useEffect, useRef, useState hooks
import { Suspense, useEffect, useRef, useState } from 'react';
// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the Loader, CameraControls, Perspective Camera, Stage components
// and useProgress hook
import { 
    /*Loader,*/
    CameraControls,
    PerspectiveCamera,
    Stage,
    useProgress
} from '@react-three/drei';
// import in the Apollo 11 jsx model
import Apollo11Model from './apollo-11-v4';
// import in our stylesheet
import styles from './apollo-11.module.scss';



// remember we are passing down props from the parent or the 3d-models.js file and
// " passParentToChildProgressBarHandlerFunction " is a function being passed from
// the parent to the child as a prop
export default function Apollo11Component( { passParentToChildProgressBarHandlerFunction } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    // const [ domLoaded, setDomLoaded ] = useState( false );
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

    // use browserWidth inside the useEffect hook below
    let browserWidth;

    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element(s)
    const h2Ref             = useRef();
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

/*
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
*/

    // ==============================
    // useEffect(); 2
    // ==============================

    // ==============================
    // purpose : useEffect 2 will run on page load and once the progressBarDone state
    // changes from false to true and the passParentToChildProgressBarHandlerFunction
    // will pass to the parent component or 3d models component the progressBarDone
    // state and once the progressBarDone state changes from false to true then this
    // will trigger a state change in the parent component, which will then cause the
    // custom built progress bar to run from 0% to 100% over a period of 1 second
    // ==============================

    useEffect( () => {

        // test
        console.log( progressBarDone );

        // make sure we are on the right page before we pass up the state
        // to the parent or 3d models file since on the home page this will
        // create an error
        if ( window.location.pathname !== '/' ) {

            // pass progressBarDone value up to the parent component or the
            // 3d models component
            passParentToChildProgressBarHandlerFunction( progressBarDone );

        } // end of if

    }, [ progressBarDone ] ); // end of useEffect 2

    // ==============================
    // useEffect(); 3
    // ==============================

    // ==============================
    // purpose : is to change the font size to 4.0rem or the h1 font size when
    // this component is on the '/3d-models' page; otherwise, keep the default
    // h2 font size
    // ==============================

    useEffect( () => {

        const handleRouteChange = () => {
    
            // ==============================
            // code block 1
            // ==============================

            // ==============================
            // calculate browser width
            // ==============================

            // get the browser width
            browserWidth = window.innerWidth;
    
            // get pathname
            const pathname = window.location.pathname;
    
            if ( 
                h2Ref.current &&
                pathname === '/3d-models'
            ) {

                h2Ref.current.classList.add( styles.on3dPage );
    
            }
    
        };
    
        // run on mount
        handleRouteChange();
    
        // run on every Astro page navigation
        document.addEventListener( 'astro:page-load', handleRouteChange );
    
        return () => {

            document.removeEventListener( 'astro:page-load', handleRouteChange );

        };
    
    }, [] ); // end of useEffect 3

    // ==============================
    // useEffect(); 4
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

    }, []); // end of useEffect 4

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
    // purpose : get access to the the progress variable through the drei useProgress()
    // hook and once that variable reaches to 100 or reaches completion then that will
    // cause the if statement below to run, which will then set the progressBarDone state
    // to true, thereby causing the useEffect 2 hook above to run again and inside useEffect
    // we will pass in the new progressBarDone state as a parameter to the
    // passParentToChildProgressBarHandlerFunction and this function will send the
    // progressBarDone state up to parent component where it will trigger a series of events
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
        // the parent component or the 3d models component
        setTimeout( () => {

            // test
            console.log( 'In Loader setTimeout' );

            if ( progress < 100 ) {

                setProgressBarDone( true );

            } // end of if

        }, 5000 ); // end of setTimeout

    } // end of Loader function


    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.apollo11Container }>

            <div>

                <h2 
                    ref={ h2Ref }
                >
                    3D Models
                </h2>

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

                        <CameraControls 
                            ref={ cameraControlsRef }   // need this so we can run useEffect above
                            dollySpeed={ 0 }            // blocks camera forward / backward tracking
                            polarRotateSpeed={ 1.0 }
                        />

                        <PerspectiveCamera
                            makeDefault
                            fov={ 50.0 }
                            position={ [ 0, 0, 600.0 ] }
                        />

                        <Suspense fallback={ <Loader /> } /*fallback={null}*/>

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

                                <Apollo11Model />

                            </Stage>

                        </Suspense>

                    </Canvas>

                    {
                        /*
                            // ==============================
                            // comment out this code so that we can use a custom progress
                            // bar ( see notes above for details ) but keep here for reference
                            // purposes
                            // ==============================
                        */
                    }

                    {
                        /*
                            // ==============================
                            // purpose : make sure the dom is loaded before calling the Loader
                            // component and see the notes in apollo-11.js for details
                            // ==============================
                        */
                    }

                    {
                        /*
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
                                            // background : 'transparent',

                                            // match my initial background styles
                                            background : 'var( --background-lg-41 )'
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
                                        ( p ) => `Loading 3D Models - ${p.toFixed( 2 ) }% complete`
                                    }
                                />
                        */
                    }

                </div>

            </div>

        </div>

    );

} // end of Apollo11Component



