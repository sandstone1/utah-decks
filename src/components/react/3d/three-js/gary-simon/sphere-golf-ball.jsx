



// ==============================
// notes
// ==============================

// ==============================
// remember, gary-simon/shpere.golf-ball.js is the next version of
// gary-simon/sphere-three-js.js
// ==============================











// ==============================
// notes
// ==============================

// ==============================
// load glb file or gltf file into three.js scene
// ==============================

// ==============================
// please see the following video for details on how to load a glb file into your three.js
// scene : " https://www.youtube.com/watch?v=WBe3xrV4CPM " and this webpage is helpful for
// understanding the GLTF loader :
// " https://threejs.org/docs/#examples/en/loaders/GLTFLoader " and information on the
// draco loader came from this answer in stackoverflow :
// " https://stackoverflow.com/questions/56071764/how-to-use-dracoloader-with-gltfloader-in-reactjs "
// ==============================

// ==============================
// 1 - import in the GLTF loader and then
// 2 - import in the DRACO loader and then
// 3 - create and configue your draco loader :
/*
    // step 1
    const dracoLoader = new DRACOLoader();

    // step 2
    // and remember to use a full url path
    dracoLoader.setDecoderPath( 'https://www.gstatic.com/draco/v1/decoders/' ); 
*/ 
// and then
// 4 - create and configue your gltf loader :
/*
    // step 3
    // create and configue your gltf loader
    const gltfLoader = new GLTFLoader();

    // step 4
    gltfLoader.setDRACOLoader( dracoLoader );
*/
// and then
// 5 - we can load our glb file or gltf file into our three.js scene :
/*
    // step 5
    // and then we can load our glb file or gltf file
    gltfLoader.load(
        // path to our gltf file or resource url
        'models/shoe.gltf',
        // called when the resource is loaded
        function( gltf ) {

            console.log( gltf );

            scene.add( gltf.scene );

        },
        // called while loading is progressing
        function ( xhr ) {
    
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
        },
        // called when loading has errors
        function ( error ) {
    
            console.log( 'An error happened' );
    
        }
    ); // end of gltfLoader.load()
*/
// and this works since I can see the shoe but the lighting is off and it needs
// some work
// ==============================

// ==============================
// files for the steps above
// ==============================

// ==============================
// 1 - components/3d/three-js/3d-models/product-design.js
// ==============================







// ==============================
// notes
// ==============================

// ==============================
// how to use a built in editor to help edit your threejs scene
// ==============================

// ==============================
// remember, dat.gui doesn't really work with next
// ==============================

// ==============================
// 1 - import in the debugger or dat.gui and dat is " A lightweight graphical
// user interface for changing variables in JavaScript " and dat " allows us to
// quickly add a very basic user interface which allows us to interact with our
// 3d scene and the objects within it "
// 2 - and we need to install dat or " npm i dat.gui " and
// 3 - now let try to use the threejs pointLightHelper but this won't work without
// the dat.gui
// ==============================

// ==============================
// files for the steps above
// ==============================

// ==============================
// 1 - components/3d/three-js/gary-simon/sphere.js
// ==============================













// ==============================
// notes
// ==============================

// ==============================
// to add textures or an image file to a threejs sphere
// ==============================

// ==============================
// remember, " In 3D computer graphics, normal mapping, or Dot3 bump mapping, is a texture
// mapping technique used for faking the lighting of bumps and dents – an implementation of
// bump mapping. It is used to add details without using more polygons "
// ==============================

// ==============================
// 1 - download the tutorial image and save it to our textures folder under the name
// " golf_ball.jpeg " and 
// 2 - then convert the image to a normal map and to do that go to this normal map
// gerenator located at " https://cpetry.github.io/NormalMap-Online/ " and then we
// 3 - download our golf ball image and then inside the normal map generator we can
// 4 - change the setting and in this case, we will keep the strength at 2.5 and the
// level at 7.0 and then change the blur to -6.0 or blur the image slightly and then
// 5 - we can choose the " normal map " option and keep the " png " option and keep the
// opacity option of " 100% " and then click the download button and
// 6 - save the " NormalMap.png " file in our textures folder and then
// 7 - to bring the " NormalMap.png " file in our three.js scene we need to use a texture
// loader and do this :
/*
    const textureLoader = new THREE.TextureLoader();

    // load in my golf ball normal map file
    const normalTexture = textureLoader.load( '/textures/golf_ball_normal_map.png' );
*/
// and do this :
/*
    const material = new THREE.MeshStandardMaterial(
        {
            color     : 0x292929,
            metalness : 0.7,
            roughness : 0.2,
            normalMap : normalTexture // reference our normal map texture from above
        }
    );
*/
// ==============================

// ==============================
// files for the steps above
// ==============================

// ==============================
// 1 - components/3d/three-js/gary-simon/sphere-three-js.js
// 1 - components/3d/three-js/gary-simon/sphere-three-js.module.scss
// ==============================








// ==============================
// notes
// ==============================

// ==============================
// to prevent a ton of console errors
// ==============================

// ==============================
// 1 - I was getting a boat load of console errors using :
/*
    const renderer = new THREE.WebGLRenderer(
        {
            antialias          : true,
            alpha              : true,
            canvas             : canvasRef.current
        }
    ); // alpha : true makes background transparent
*/
// or more spefically, using " alpha : true, " and to fix this error
// I added " premultipliedAlpha : false, " to the renderer or :
/*
    const renderer = new THREE.WebGLRenderer(
        {
            antialias          : true,
            alpha              : true,
            premultipliedAlpha : false,
            canvas             : canvasRef.current
        }
    ); // alpha : true makes background transparent
*/
// and this fixed the error, although I'm not sure why this fixed
// the errors I was getting
// 2 - from stackoverflow :
// " https://stackoverflow.com/questions/41981879/three-js-premultipliedalpha-true-does-not-affect-the-output-of-gl-readpixels "
// " premultipliedAlpha tells browser how you store colours in the default
// framebuffer: multiplied by alpha or not. It's needed for compositor to
// correctly blend your webgl content with the rest of the page. The flags
// doesn't affect values written to the framebuffer. If you set it to true
// or false it's your responsibility to return correct colour values from
// fragment shaders "
// ==============================












// import in Fragment, the useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import three.js
import * as THREE from 'three';
// import in OrbitControls
import { OrbitControls } from 'three/addons/controls/OrbitControls';
// import in the Tabler Icons hand move font icon
import { TbHandMove } from "react-icons/tb";
// import in the Spinner component
import Spinner from '../../../spinner/spinner-bounce-light';
// import in our stylesheet
import styles from './sphere-golf-ball.module.scss';



export default function SphereGolfBallComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ isLoading, setIsLoading ]             = useState( false );
    const [ containerWidth2, setContainerWidth2 ] = useState( '' );
    const [ containerWidth3, setContainerWidth3 ] = useState( '' );

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
    const div2Ref      = useRef();
    const timeoutRef   = useRef( null ); // store the timeout reference

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
    // purpose : call the setThreeScene function and handle the browser resize
    // event
    // ==============================

    useEffect( () => {

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

        // call the setThreejsScene function on page load
        setThreejsScene();
        
    }, [] ); // end of useEffect 1

    // ==============================
    // useEffect(); 2
    // ==============================

    // ==============================
    // purpose : everytime the container width changes, call the setThreejsScene
    // function thereby rerendering the scene based on the new container width
    // ==============================

    useEffect( () => {

        // using the if statement bwlow will make sure that the useEffect 2 only
        // executes on the browser resize event
        if ( containerWidth3 ) {

            // test
            // console.log( 'In useEffect 2' );

            // everytime containWidth2 changes and containerWidth3 is true then
            // call the setThreejsScene function on the browser resize event
            setThreejsScene();

        } // end of if

    }, [ containerWidth2 ] ); // end of useEffect 2

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

            width  : 900,
            height : 900

        } // end of sizes

        // ==============================
        // part 2
        // create loading spinner
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

        } // end of manager.onLoad

        // ==============================
        // part 3
        // TextureLoader
        // bring in our normal map image using the threejs TextureLoader
        // ==============================

        // instantiate a loader and remember, in order for manager.onProgress and
        // manager.onLoad, we need to add " manager " as a paramter to THREE.TextureLoader()
        const textureLoader = new THREE.TextureLoader( manager );

        // load in my golf ball normal map file
        const normalTexture = textureLoader.load( '/textures/golf_ball_normal_map.png' );

        // ==============================
        // part 4
        // scene and camera
        // ==============================

        // create the scene and the camera
        const scene  = new THREE.Scene();
        // for parameters to PrespectiveCamers, we have fov, aspect ration, the near point
        // clipping point and far clipping point and remember, to get the same default settings
        // as RTF, we do :
        // " const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 ); "
        const camera = new THREE.PerspectiveCamera( 45, sizes.width / sizes.height, 0.1, 1000 );
        // move the camera back a little so we can see the 3d object and we do that
        // by setting the camera position or z value and the RTF default value is 5
        camera.position.set( 0, 0, 2.0 );

        // ==============================
        // part 5
        // renderer
        // ==============================

        // create renderer
        // render the scene on the screen
        const renderer = new THREE.WebGLRenderer(
            {
                antialias          : true,
                alpha              : true, // alpha : true makes background transparent
                premultipliedAlpha : false, // see above for notes
                canvas             : canvasRef.current
            }
        );

        // set the size
        renderer.setSize( sizes.width, sizes.height );

        // ==============================
        // part 6
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
        // part 7
        // shape
        // ==============================

        // create the sphere - version 1
        // const geometry = new THREE.SphereGeometry( 3, 64, 64 );
        // const material = new THREE.MeshStandardMaterial( { color: 0x00ff83 } );
        // const sphere   = new THREE.Mesh( geometry, material );
        // add the sphere to the scene
        // scene.add( sphere );

        // create the torus
        // const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
        // const material = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
        // const torus   = new THREE.Mesh( geometry, material );
        // add the sphere to the scene
        // scene.add( torus );

        // create the sphere - version 2
        const geometry = new THREE.SphereGeometry( 0.5, 64, 64 );
        const material = new THREE.MeshStandardMaterial(
            {
                color     : 0x292929,
                metalness : 0.7,
                roughness : 0.2,
                normalMap : normalTexture // reference our normal map texture from above
            }
        );
        const sphere   = new THREE.Mesh( geometry, material );
        // add the sphere to the scene
        scene.add( sphere );

        // ==============================
        // part 8
        // lighting
        // ==============================

        // const ambientLight = new THREE.AmbientLight( 0xffffff, 1 ); // soft white light
        // scene.add( ambientLight );

        // for PointLight, the parameters are color ( default white ), intensity
        // ( default 1 ) and distance or the maximum range of light ( default is 0 
        // or nor limit )

        // white
        const pointLight = new THREE.PointLight( 0xffffff, 20, 100 );
        pointLight.position.set( 2, 3, 4 );
        scene.add( pointLight );

        // red
        const pointLight2 = new THREE.PointLight( 0xff0000, 200, 100 );
        pointLight2.position.set( -5, 10, -12 );
        scene.add( pointLight2 );

        // red
        const pointLight3 = new THREE.PointLight( 0xff0000, 10 );
        pointLight3.position.set( -1.86, 1, -1.65 );
        scene.add( pointLight3 );

        // --blue-80
        const pointLight4 = new THREE.PointLight( 0x0070f3, 30 );
        pointLight4.position.set( 3, -3, -3 );
        scene.add( pointLight4 );

        // green
        const pointLight5 = new THREE.PointLight( 0x96ffff, 30 );
        pointLight5.position.set( -3, -3, -3 );
        scene.add( pointLight5 );

        // fuchsia
        const pointLight6 = new THREE.PointLight( 0xfc00ff, 20, 100 );
        pointLight6.position.set( 3, 3, -3 );
        scene.add( pointLight6 );

        // yellow
        const pointLight7 = new THREE.PointLight( 0xffff00, 20, 100 );
        pointLight7.position.set( 0, -5, -5 );
        scene.add( pointLight7 );

        // white
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
        directionalLight.position.set( 10, 10, 10 );
        scene.add( directionalLight );

        // gui doesn't work with next.js but in theory I should be able to revise
        // pointLight2 as needed using gui.add() and PointLightHelper
        // gui.add( pointLight2.position, 'y' );

        // PointLightHelper by itself or without gui technically worked but didn't
        // seem to provide much value so I commented out
        // const pointLightHelper = new THREE.PointLightHelper( pointLight2, 10 );
        // scene.add( pointLightHelper );

        // ==============================
        // part 9
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
        // part 10
        // animation
        // ==============================

        // ==============================
        // part 10
        // animation
        // option 1
        // ==============================

        function animate() {

            // on the next animation frame call the animate function
            requestAnimationFrame( animate );

            // update orbit controls
            // Three.js says : " required if controls.enableDamping or
            // controls.autoRotate are set to true "
            controls.update();

            // sphere.rotation.x += 0.007;
            sphere.rotation.y += 0.008;

            // render the scene and the camera
            renderer.render( scene, camera );

        } // end of animate()

        // call animate to kick off the animation
        animate();

        // ==============================
        // code block 3
        // ==============================

        // start the hand motion animation here and it stop running after 5 seconds
        // ( see the css file for details )
        if ( div2Ref.current ) {

            div2Ref.current.style.animationPlayState = 'running';

        }; // end of if

        // ==============================
        // code block 4
        // ==============================

        // ==============================
        // remember, we need code block 3 in the setThreejsScene function, just in case
        // we start out at a screen size different than 2560px and that way we get the
        // correct shape size no matter what device we are using at page load
        // ==============================

        if ( containerWidth > 1280 ) {

            camera.aspect = 900 / 900; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 900, 900 ); // set the size for this breakpoint

            // test
            // console.log( 'In 900' );

        } // end of if

        if ( 
            containerWidth <= 1280 &&
            containerWidth > 1032
        ) {

            camera.aspect = 800 / 800; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 800, 800 ); // set the size for this breakpoint

            // test
            // console.log( 'In 800' );

        } // end of if

        else if (
            containerWidth <= 1032 &&
            containerWidth > 620
        ) {

            camera.aspect = 600 / 600; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 600, 600 ); // set the size for this breakpoint

            // test
            // console.log( 'In 600' );

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
            // console.log( 'In 360' );

        } // end of if

        else if (
            containerWidth <= 375
        ) {

            camera.aspect = 280 / 280; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 280, 280 ); // set the size for this breakpoint

            // test
            // console.log( 'In 280' );

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
                        className={ styles.sphereGolfBallContainer }
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
                            className={ styles.sphereGolfBallContainerDiv1 }
                        >

                            <h1>
                                3D Objects
                            </h1>

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

                            {
                                /*

                                    // ==============================
                                    // container > div 1 ( wrapper div ) > div 2
                                    // ==============================

                                */
                            }
                            <div
                                ref={ div2Ref }
                            >
                                <TbHandMove style={ { fontSize : '5.2rem', color : 'var( --white )' } } />
                            </div>

                        </div>

                    </div>

                )

            }

        </Fragment>

    );

} // end of SphereGolfBallComponent


