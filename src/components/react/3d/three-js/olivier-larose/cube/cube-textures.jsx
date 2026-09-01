



// ==============================
// notes
// ==============================

// ==============================
// IMPORTANT!
// remember, ( after a ton of trail and error ), I had to make some adjustments to this file
// since I was loading 5 textures to be used on 5 sides of the cube with the sixth side being
// a color
//
// remember, getting the flow right was critical for making this scene work and the reason we had
// to get the flow right is because the it took some time to load the textures and therefore the
// scene did not have the texturesin time to build the mesh or material sides
//
// remember, we had to use state in order to the flow work and work efficiently
// 1 - first, we had to call the textureloader function on page load and this function loaded
// the textures and once the textures were loaded I could then save the textures to state and then
// use them in the setThreejsScene function to build the sides of our cube and
// 2 - I changed the isLoaded state to true and once that was true THEN we call the setThreejsScene
// function  inside useEffect #2 and then everything worked as expected// 
// ==============================







// ==============================
// notes
// ==============================

// ==============================
// remember, the answer for how to create a separate texture for each side of the
// cube came from stackoverflow :
// " https://stackoverflow.com/questions/69114793/three-js-different-texture-material-on-each-face "
// ==============================







// ==============================
// notes
// ==============================

// ==============================
// open issue
// ==============================

// ==============================
// remember, even though my control logic worked ( according my console.log() messages ),
// I still could not resize my browser consistently without running into the following
// 2 errors :
// " WebGL: INVALID_OPERATION: texImage3D: FLIP_Y or PREMULTIPLY_ALPHA isn't allowed for uploading 3D textures " and
// " WebGL: INVALID_OPERATION: uniformMatrix4fv: location is not from current program " 
// ==============================

// ==============================
// remember, for this file I turned off the useEffect hook that would use
// the ResizeObserver and state to resize the 3d object and the result was that this
// file resizes without any problems and without any console.log() errors; however,
// the downside is that this object stays at its original size when resizing the
// browser
//
// and this not problem when resizing between 2560px and 1536px since the 3d object
// aizes are the same at both breakpoints
//
// and this is a minor problem when resizing between 1376px and 1032px, for example,
// or turning the iPad from landscape mode tp portrait mode
//
// and this is a major problem when resizing between 736px and 414px, for example,
// or turning the iPhone 7 Plus from landscape mode tp portrait mode since this will
// break the layout
// ==============================













// import in Fragment, the useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import three.js
import * as THREE from 'three';
// import in OrbitControls
import { OrbitControls } from 'three/addons/controls/OrbitControls';
// import in the Spinner component
import Spinner from '../../../../spinner/spinner-bounce-light';
// import in our stylesheet
import styles from './cube-textures.module.scss';



export default function CubeTexturesComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ isLoading, setIsLoading ]             = useState( false );
    const [ isLoaded, setIsLoaded ]               = useState( false );
    const [ isTexture_1, setIsTexture_1 ]         = useState( '' );
    const [ isTexture_2, setIsTexture_2 ]         = useState( '' );
    const [ isTexture_3, setIsTexture_3 ]         = useState( '' );
    const [ isTexture_5, setIsTexture_5 ]         = useState( '' );
    const [ isTexture_6, setIsTexture_6 ]         = useState( '' );
    const [ containerWidth2, setContainerWidth2 ] = useState( '' );
    const [ containerWidth3, setContainerWidth3 ] = useState( false );

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
    let resizeEvent;
    let containerWidth;
    let width;
    let height;

    // ==============================
    // useRef();
    // ==============================

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing the following useRef variables
    const containerRef = useRef();
    const canvasRef    = useRef();

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
    // purpose : use the ResizeObserver to observe containerRef.current and call the
    // textureLoader function on page load
    // ==============================

    useEffect( () => {

        // test
        console.log( 'In useEffect 1' );

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // purpose : avoid using the resize event to rerender the Three.js scene and
        // instead use the ResizeObserver API to rerender the Three.js scene and thereby
        // avoid using the resize event, which was causing the camera position to reset
        // on my iPad everytime I scrolled down the page
        // ==============================

        // use the ResizeObserver API to get the contentRect width of the
        // containerRef width and then save that width to state and then everytime
        // that state changes this will cause the useEffect 2 hook to run, thereby
        // calling the setThreejsScene function and thereby rerendering the
        // scene based on the new container width
        if ( containerRef.current ) {

            // use the ResizeObserver and save the result to observer
            const observer = new ResizeObserver( ( entries ) => {

                // test
                // console.log( entries[ 0].contentRect.width );

                // set the state for containerWidth2
                setContainerWidth2( entries[ 0].contentRect.width );

            } )

            // need to observe containerRef.current
            observer.observe( containerRef.current );

        } // end of if

        // ==============================
        // code block 2
        // ==============================

        // call the textureLoader function on page load
        textureLoader();

    }, [] ); // end of useEffect 1

    // ==============================
    // useEffect(); 2
    // ==============================

    // ==============================
    // purpose : once the textures have loaded then call the setThreejsScene function
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // if the textures have loaded then call the setThreejsScene function
        if ( isLoaded && !containerWidth3 ) {

            // test
            console.log( 'In useEffect 2' );

            // call the setThreejsScene function
            setThreejsScene();

            // ==============================
            // the process :
            // 1 - on page load, containerWidth2 will change ( see useEffect 1 ) and this will
            // cause useEffect 3 to run but the state values will prevent its execution and
            // then
            // 2 - useEffect 1 will call the textureLoader function and then
            // 2 - inside the textureLoader function isLoaded will change to true, thereby
            // causing the useEffect 2 to run and then
            // 3 - the contents of useEffect 2 will call the setThreejsScene function
            // and then
            // 4 - we will set isLoaded to false and containerWidth3 to true so that the
            // contents of useEffect 3 will run when resizing the browser and by
            // 5 - rerunning the textureLoader function in useEffect 3 we start the
            // the process all over again
            // ==============================

            // set isLoaded to false so that the contents of useEffect 3 will run
            // when resizing the browser
            setIsLoaded( false );

            // set containerWidth3 to true so that the contents of useEffect 3 will run
            // when resizing the browser
            setContainerWidth3( true );

        } // end of if

    }, [ isLoaded ] ); // end of useEffect 2

/*
    // ==============================
    // useEffect(); 3
    // ==============================

    // ==============================
    // purpose : everytime the container width changes, call the textureLoader
    // function thereby rerendering the scene based on the new container width
    // ==============================

    // ==============================
    // remember, useEffect 3 will not run on page load due to the isLoaded
    // and containerWidth3 state values, which is by design
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // everytime containWidth2 changes and the following state values are correct
        // then call the textureLoader function
        if ( !isLoaded && containerWidth3 ) {

            // test
            console.log( 'In useEffect 3' );

            // call the setThreejsScene function and kick off the process
            textureLoader();

            // set containerWidth3 to false so that we can run useEffect 2 when needed
            setContainerWidth3( false );

        } // end of if

    }, [ containerWidth2 ] ); // end of useEffect 3
*/

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
    // textureLoader function
    // ==============================

    // ==============================
    // purpose : load the textures and then call the setThreejsScene function and
    // save the textures to state and then use those state values in the setThreejsScene
    // function to create the material sides of the cube
    // ==============================

    async function textureLoader( e ) {

        // test
        console.log( 'In textureLoader' );

        // ==============================
        // part 1
        // we are doing 3 things in part 1 :
        // 1 - creating the loading spinner
        // 2 - setting isLoaded to true, thereby calling the setThreejsScene function and
        // 3 - saving the textures to state so that we can use them later
        // ==============================

        const manager = new THREE.LoadingManager();

        // test
        // console.log( manager );

        /*
        manager.onStart = function( url, item, total ) {

            console.log( `Started loading: ${ url }` );

        }
        */

        manager.onProgress = function( url, loaded, total ) {

            // STEP 1
            // initially, isLoading is set to true
        
            // remember we use the isLoading state primarily when we are communicating with the
            // database from the frontend since there may be a short delay between the time from
            // when the request is made to the time from when the server response is returned
            setIsLoading( true );

            // test
            console.log( `Started loading: ${ url }` );

        } // end of manager.onProgress

        manager.onLoad = function() {

            // STEP 2
            // once we get the data, set isLoading to false
            setIsLoading( false );

            // test
            console.log( `Just finished loading` );

            // set isLoaded to true, thereby calling the setThreejsScene function
            setIsLoaded( true );

            // save the textures to state and then use these values inside the setThreejsScene
            // function to set each side of the cube
            setIsTexture_1( texture_1 );
            setIsTexture_2( texture_2 );
            setIsTexture_3( texture_3 );
            setIsTexture_5( texture_5 );
            setIsTexture_6( texture_6 );

        } // end of manager.onLoad

        // ==============================
        // part 2
        // TextureLoader
        // use the textureLoader to create the textures for our cube
        // ==============================

        // instantiate a loader and remember, in order for manager.onProgress and
        // manager.onLoad, we need to add " manager " as a paramter to THREE.TextureLoader()
        const textureLoader = new THREE.TextureLoader( manager );

        // load in my cube textures
        const texture_1 = textureLoader.load( '/images/zions_01_866.webp' );
        const texture_2 = textureLoader.load( '/images/arches_01_866.webp' );
        const texture_3 = textureLoader.load( '/images/horseshoe_01_866.webp' );
        // const texture_4 = textureLoader.load( '/images/green_bg_01_866.webp' );
        const texture_5 = textureLoader.load( '/images/boulder_mtn_03_866.webp' );
        const texture_6 = textureLoader.load( '/images/boulder_mtn_04_866.webp' );

    } // end of textureLoader function

    // ==============================
    // function 2
    // ==============================

    // ==============================
    // setThreejsScene function
    // ==============================

    // ==============================
    // purpose : set the Three.js scene
    // ==============================

    async function setThreejsScene( e ) {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // remember, we had to define browserWidth inside this function in order
        // to the get the if statements below to work
        // ==============================

        // define browserWidth
        browserWidth = window.innerWidth;

        // get the containerRef width and use this in the handleResize
        // function so that our browser width conditionals work as expected
        containerWidth = containerRef.current.offsetWidth;

        // test
        console.log( 'In setThreejsScene' );

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // part 1
        // set the initial sizes for the 3d object
        // ==============================

        // ==============================
        // remember, given my layout and the positioning and the widths and heights of all the
        // elements inside the layout, option 1, option 2 and option 3 ended up producing
        // unreliable sizes in three.js and therefore the shapes were often times too large
        // or too small for the containers thereby breaking the layout when resizing the browser
        // ==============================

        // ==============================
        // remember, therefore, my solution was to base the sizes at each breakpoint on the
        // container widths and this worked great and produced a completely responsive
        // website and produced reliable sizes for the 3d objects
        // ==============================

        // ==============================
        // remember, I set the sizes in this file only
        // ==============================

/*
        // ==============================
        // option 1
        // ==============================

        // get the container div width and height
        const sizes = {

            width  : containerRef.current.clientWidth,
            height : containerRef.current.clientHeight

        } // end of sizes

        // ==============================
        // option 2
        // ==============================

        // get the wrapper div width and height
        const sizes = {

            width  : window.innerWidth,
            height : window.innerHeight

        } // end of sizes

        // ==============================
        // option 3
        // ==============================

        // get the wrapper div width and height
        const sizes = {

            width  : wrapperRef.current.clientWidth,
            height : wrapperRef.current.clientHeight

        } // end of sizes
*/

        // ==============================
        // option 4
        // set default sizes
        // ==============================

        const sizes = {

            width  : 800,
            height : 800

        } // end of sizes

        // ==============================
        // part 3
        // scene and camera
        // ==============================

        // create a different scene
        const scene  = new THREE.Scene();

        // for parameters to PrespectiveCamers, we have fov, aspect ration, the near point
        // clipping point and far clipping point and remember, to get the same default settings
        // as RTF, we do :
        // " const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 ); "
        const camera = new THREE.PerspectiveCamera( 45, sizes.width / sizes.height, 0.1, 1000 );
        // move the camera back a little so we can see the 3d object and we do that
        // by setting the camera position or z value and the RTF default value is 5
        camera.position.set( 0, 0, 7.0 );

        // ==============================
        // part 4
        // renderer
        // ==============================

        // create renderer
        // render the scene on the screen
        const renderer = new THREE.WebGLRenderer(
            {
                antialias          : true,
                alpha              : true, // alpha : true makes background transparent
                // premultipliedAlpha : false, // see above for notes
                canvas             : canvasRef.current
            }
        );

        // set the size
        renderer.setSize( sizes.width, sizes.height );

        // ==============================
        // part 5
        // miscellaneous
        // ==============================

        // ==============================
        // remember, these changes will match the default settings in RTF
        // ==============================

        // ==============================
        // for details on this section, please see about 23:00 of
        // " https://www.youtube.com/watch?v=DPl34H2ISsk " and the title is
        // " I wish I knew this before using React Three Fiber "
        // ==============================

        // match the supported pixel ratio of the browser
        renderer.setPixelRatio( window.devicePixelRatio );
        // match the default RTF tone mapping
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        // match the default RTF color spacing
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        // ==============================
        // part 6
        // shape
        // ==============================

        // create the geometry
        // the first parameter is the ( defaults to 1 ) and the second parameter is
        // the height ( defaults to 1 ) and third parameter is the depth( defaults to 1 )
        const geometry = new THREE.BoxGeometry( 3.1, 3.1, 3.1 );

        // remember, the answer for how to create a separate texture for each side of the
        // cube came from stackoverflow :
        // " https://stackoverflow.com/questions/69114793/three-js-different-texture-material-on-each-face "

        // create the 6 sides of the cube or material
        const mat1 = new THREE.MeshStandardMaterial( { color : 0xffffff, map : isTexture_1 } );
        const mat2 = new THREE.MeshStandardMaterial( { color : 0xffffff, map : isTexture_2 } );
        const mat3 = new THREE.MeshStandardMaterial( { color : 0xffffff, map : isTexture_3 } );
        const mat4 = new THREE.MeshStandardMaterial( { color : 0xA52A2A } );
        const mat5 = new THREE.MeshStandardMaterial( { color : 0xffffff, map : isTexture_5 } );
        const mat6 = new THREE.MeshStandardMaterial( { color : 0xffffff, map : isTexture_6 } );

        // create the material
        const material = [
            mat1,
            mat2,
            mat3,
            mat4,
            mat5,
            mat6,
        ];

        // create the box
        const box = new THREE.Mesh( geometry, material );
        // add the box to the scene
        scene.add( box );

        // ==============================
        // part 7
        // lighting
        // ==============================

        // --white
        const ambientLight = new THREE.AmbientLight( 0xffffff, 1 ); // soft white light
        scene.add( ambientLight );

        // --white
        // the first parameter is color of the light ( default is 0xffffff ) and the second
        // parameter is inntensity ( default is 1 ) and remember this light is like
        // sunlight
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
        directionalLight.position.set( 2, 1, 1 );
        scene.add( directionalLight );

        // ==============================
        // part 8
        // orbit controls
        // ==============================

        // render.domElement is my canvas element
        const controls = new OrbitControls( camera, renderer.domElement );

        controls.enablePan     = false;
        controls.enableZoom    = false;
        controls.enableDamping = true; // this gives our damping a nice effect when
        // we let go of the mouse
        // controls.dampingFactor = 0.03; // default 0.05

        // controls.autoRotate      = true;
        // controls.autoRotateSpeed = 5;

        // Three.js says : " controls.update() must be called after any manual changes to the
        // camera's transform " amd they put controls.update after camera.position.set() or
        /*
            camera.position.set( 0, 20, 100 );
            controls.update();
        */
        // controls.update();

        // ==============================
        // part 9
        // animation
        // ==============================

        function animate() {

            // on the next animation frame call the animate function
            requestAnimationFrame( animate );

            // update orbit controls
            // Three.js says : " required if controls.enableDamping or
            // controls.autoRotate are set to true "
            controls.update();

            // box.rotation.x += 0.007;
            box.rotation.y += 0.006;

            // render the scene and the camera
            renderer.render( scene, camera );

        } // end of animate()

        // call animate to kick off the animation
        animate();

        // ==============================
        // code block 3
        // ==============================

        // ==============================
        // remember, we need code block 3 in the setThreejsScene function, just in case
        // we start out at a screen size different than 2560px and that way we get the
        // correct shape size no matter what device we are using at page load
        // ==============================

        if ( containerWidth > 1032 ) {

            camera.aspect = 800 / 800; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 800, 800 ); // set the size for this breakpoint

            // test
            console.log( 'In 800' );

        } // end of if

        else if (
            containerWidth <= 1032 &&
            containerWidth > 620
        ) {

            camera.aspect = 600 / 600; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 600, 600 ); // set the size for this breakpoint

            // test
            console.log( 'In 600' );

        } // end of if

        else if (
            containerWidth <= 620 &&
            containerWidth > 375 
        ) {

            camera.aspect = 360 / 360; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 360, 360 ); // set the size for this breakpoint

            // canvasRef.current.style.background = 'red';

            // test
            console.log( 'In 360' );

        } // end of if

        else if (
            containerWidth <= 375
        ) {

            camera.aspect = 280 / 280; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 280, 280 ); // set the size for this breakpoint

            // test
            console.log( 'In 280' );

        } // end of if

    } // end of setThreeScene function


    return (

        <Fragment>

            {

                isLoading ? (

                    <div className={ styles.spinnerContainer }>

                        <Spinner />

                    </div>

                ) : (

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
                        className={ styles.cubeTexturesContainer }
                        ref={ containerRef }
                    >

                        {
                            /*
            
                                // ==============================
                                // container > div 1 ( wrapper div )
                                // ==============================
            
                            */
                        }
                        <div 
                            className={ styles.cubeTexturesContainerDiv1 }
                        >

                            {
                                /*

                                    // ==============================
                                    // container > div 1 ( wrapper div ) > div 1
                                    // ==============================

                                */
                            }
                            <div>

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
                                <canvas
                                    ref={ canvasRef }
                                >
                                </canvas>

                            </div>

                        </div>

                    </div>

                )

            }

        </Fragment>

    );

} // end of CubeTexturesComponent


