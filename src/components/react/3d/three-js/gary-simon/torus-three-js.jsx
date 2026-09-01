




// ==============================
// notes
// ==============================

// ==============================
// load glb file or gltf file into three.js scene
// ==============================

// ==============================
// please see the following video for details on how to load a glb file into your three.js
// scene : " https://www.youtube.com/watch?v=WBe3xrV4CPM " and this webpage is helpful for
// understanding the G:TF loader :
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
// 1 - import in the debugger or dat.gui and dat is " A lightweight graphical
// user interface for changing variables in JavaScript " and dat " allows us to
// quickly add a very basic user interface which allows us to interact with our
// 3d scene and the objects within it "
// 2 - and we need to install dat or " npm i dat.gui " and
// 3 - 
// ==============================

// ==============================
// files for the steps above
// ==============================

// ==============================
// 1 - components/3d/three-js/gary-simon/sphere.js
// ==============================












// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import three.js
import * as THREE from 'three';
// import in ACESFilmicToneMapping, SRGBColorSpace
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three';
// import in the GLTFLoader
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
// import in the DRACOLoader
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
// import in OrbitControls
import { OrbitControls } from 'three/addons/controls/OrbitControls';
// import in the debugger
// import * as dat from 'dat.gui';
// import in our stylesheet
import styles from './torus-three-js.module.scss';



export default function TorusThreejsComponent() {

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
    let containerWidth;

    // ==============================
    // useRef();
    // ==============================

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing the following useRef variables
    const containerRef = useRef();
    const wrapperRef   = useRef();
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

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // calculate browser width
        // ==============================

        // get the browser width so that I can either show or hide the " schedule a demo "
        // button based on the window size
        browserWidth = window.innerWidth;

        // test
        console.log( browserWidth );

        // ==============================
        // code block 2
        // ==============================

        // call setThreeScene on page load
        setThreeScene();

        // ==============================
        // code block 3
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

            // window.addEventListener( 'resize', handleResize, false );

            // make sure we remove the event listener after we call the handleResize
            // function
            return () => {

                // window.removeEventListener( 'resize', handleResize, false );

            };

        } // end of if
        
    }, [] ); // end of useEffect 2

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
    // setThreeScene function
    // ==============================

    // ==============================
    // purpose : set the Three.js scene and then modify the renderer.setSize()
    // function based on the browser width
    // ==============================

    async function setThreeScene( e ) {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // remember, we had to define browserWidth inside this function in order
        // to the get the if statements below to work
        // ==============================

        // define browserWidth
        browserWidth = window.innerWidth;

        // test
        // console.log( browserWidth );
        // test
        // console.log( 'In setThreeScene' );

        // ==============================
        // code block 2
        // ==============================
/*
        // ==============================
        // part 1
        // bring our glb file or gltf file into our three.js scene
        // ==============================
    
        // ==============================
        // remember, we may have to " provide a DRACOLoader instance to decode
        // compressed mesh data " and since I was getting an error that said something
        // along the lines of : " DracoDecoderModule is not defined ", I decided to
        //  create and configue a draco loader
        // ==============================

        // step 1
        // create and configue your draco loader - part 1
        const dracoLoader = new DRACOLoader();

        // step 2
        // create and configue your draco loader - part 2
        // and remember to use a full url path
        dracoLoader.setDecoderPath( 'https://www.gstatic.com/draco/v1/decoders/' ); 

        // step 3
        // create and configue your gltf loader
        const gltfLoader = new GLTFLoader();

        // step 4
        gltfLoader.setDRACOLoader( dracoLoader );

        // step 5
        // and then we can load our glb file or gltf file
        gltfLoader.load(
            // path to our gltf file or resource url
            'models/shoe.glb',
            // called when the resource is loaded
            function( glb ) {

                // test
                // console.log( gltf );

                // add root to our scene
                const root = glb.scene
                root.scale.set( 3.5, 3.5, 3.5 );

                scene.add( root );

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


        // ==============================
        // part 1
        // debugger
        // ==============================

        // debug
        // const gui = new dat.GUI();


        // ==============================
        // part 2
        // set the wrapper div sizes
        // ==============================

        // get the wrapper div width and height
        const sizes = {

            width  : wrapperRef.current.clientWidth,
            height : wrapperRef.current.clientHeight,

        } // end of sizes

        // test
        console.log( wrapperRef.current.clientWidth );

        // ==============================
        // part 3
        // scene and camera
        // ==============================

        // create the scene and the camera
        const scene  = new THREE.Scene();

        // we have fov, aspect ration, the near point and far point
        const camera = new THREE.PerspectiveCamera( 45, sizes.width / sizes.height, 0.1, 100 );
        // set the camera position
        camera.position.set( 0, 0, 5.0 );

        // ==============================
        // part 3
        // shape
        // ==============================

        // create the sphere
        // const geometry = new THREE.SphereGeometry( 3, 64, 64 );
        // const material = new THREE.MeshStandardMaterial( { color: 0x00ff83 } );
        // const sphere   = new THREE.Mesh( geometry, material );
        // add the sphere to the scene
        // scene.add( sphere );

        // create the torus
        const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
        const material = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
        const torus   = new THREE.Mesh( geometry, material );
        // add the sphere to the scene
        scene.add( torus );

        // ==============================
        // part 4
        // lighting
        // ==============================

        // works, had to add 200 for intensity in order to see the sphere
        const pointLight = new THREE.PointLight( 0xffffff, 200, 100 );
        pointLight.position.set( 10, 10, 10 );
        scene.add( pointLight );

        // works
        // const ambientLight = new THREE.AmbientLight( 0x404040, 10 ); // soft white light
        // scene.add( ambientLight );

        // works
        // const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
        // directionalLight.position.set( 10, 10, 10 );
        // scene.add( directionalLight );

        // ==============================
        // part 5
        // renderer
        // ==============================

        // create renderer
        // render the scene on the screen
        const renderer = new THREE.WebGLRenderer(
            {
                antialias : true,
                alpha     : true,
                canvas    : canvasRef.current
            }
        ); // alpha : true makes background transparent
        // set the size
        renderer.setSize( sizes.width, sizes.height );

        // ==============================
        // part 6
        // miscellaneous
        // these changes will match the default settings in RTF
        // ==============================

        // match the supported pixel ratio of the browser
        renderer.setPixelRatio( window.devicePixelRatio );
        // match the default RTF tone mapping
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        // match the default RTF color spacing
        // renderer.outputEncoding = THREE.sRGBEncoding; // this has been depreciated
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        // ==============================
        // part 7
        // orbit control
        // ==============================

        // render.domElement is my canvas element
        const controls = new OrbitControls( camera, renderer.domElement );

        controls.enablePan     = false;
        controls.enableZoom    = false;
        controls.enableDamping = true;

        controls.autoRotate      = true;
        controls.autoRotateSpeed = 5;

        // controls.update() must be called after any manual changes to the camera's transform
        // controls.update();

        // ==============================
        // part 8
        // animation
        // ==============================

        // running this animation function was giving me some odd errors in webGL so
        // I refered to the book located at this website
        // : " https://discoverthreejs.com/book/first-steps/animation-loop/ " and this
        // provided me with a different animation loop structure and this worked and
        // from the book : " As we mentioned above, we don’t need to worry about the
        // technicalities of creating an animation loop since three.js provides a method
        // that does everything for us: WebGLRenderer.setAnimationLoop.
        
        // This will call renderer.render over and over to generate a stream of frames.
        // We can cancel a running loop by passing null as the callback: 
        
        // Internally, the loop is created using .requestAnimationFrame. This built-in
        // browser method intelligently schedules frames in sync with the refresh
        // rate of your monitor and will smoothly reduce the frame rate if your hardware
        // can’t keep up. "

        // ==============================
        // part 8
        // animation
        // option 1
        // ==============================
/*
        function animate() {

            // this gives our damping a nice effect when we let go of the mouse
            controls.update();

            requestAnimationFrame( animate );

            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;

            // render the scene and the camera
            renderer.render( scene, camera );

        } // end of animate()

        animate();

        // ==============================
        // part 8
        // animation
        // option 2
        // ==============================

        renderer.setAnimationLoop( () => {

            // this gives our damping a nice effect when we let go of the mouse
            controls.update();

            // render the scene and the camera
            renderer.render( scene, camera );

        } );
*/

        // ==============================
        // part 8
        // animation
        // option 3
        // ==============================

        // get the clock instance
        const clock = new THREE.Clock();

        function tick() {

            const elapsedTime = clock.getElapsedTime();

            // update objects
            // torus.rotation.y = 0.5 * elapsedTime;

            // update orbit controls
            // this gives our damping a nice effect when we let go of the mouse
            controls.update();

            // render the scene
            renderer.render( scene, camera );

            // call tick again on the next animation frame
            requestAnimationFrame( tick );

        } // end of function

        // call tick
        tick();


/*
        // ==============================
        // code block 3
        // ==============================

        if ( browserWidth > 1032 ) {

            // make the size larger for big screens
            // update camera
            camera.position.set( 0, 0, 12.5 );
            camera.aspect = 800 / 800; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();

            // update renderer
            renderer.setSize( 800, 800 ); // set the size for this breakpoint

            // test
            console.log( 'In 800' );

        } // end of if

        else if ( 
            browserWidth <= 1032 &&
            browserWidth > 620
        ) {

            // update camera
            camera.aspect = 600 / 600; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();

            // update renderer
            renderer.setSize( 600, 600 ); // set the size for this breakpoint

            // test
            console.log( 'In 600' );

        } // end of if

        else if ( 
            browserWidth <= 620 &&
            browserWidth > 400 
        ) {

            // update camera
            camera.aspect = 400 / 400; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();

            // update renderer
            renderer.setSize( 400, 400 ); // set the size for this breakpoint

            // test
            console.log( 'In 400' );

        } // end of if

        else if ( 
            browserWidth <= 400 &&
            browserWidth > 375
        ) {

            // update camera
            camera.aspect = 375 / 375; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();

            // update renderer
            renderer.setSize( 375, 375 ); // set the size for this breakpoint

            // test
            console.log( 'In 375' );

        } // end of if

        else if (
            browserWidth <= 375
        ) {

            // update camera
            camera.aspect = 280 / 280; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();

            // update renderer
            renderer.setSize( 280, 280 ); // set the size for this breakpoint

            // test
            console.log( 'In 280' );

        } // end of if
*/

    } // end of setThreeScene function


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
            className={ styles.torusContainer }
            ref={ containerRef }
        >

            {
                /*

                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================

                */
            }
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
            <div 
                className={ styles.torusContainerDiv1 }
                ref={ wrapperRef }
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
                <canvas
                    className={ styles.torusContainerDiv1Canvas }
                    ref={ canvasRef }
                >
                </canvas>

            </div>

        </div>

    );

} // end of TorusThreejsComponent


