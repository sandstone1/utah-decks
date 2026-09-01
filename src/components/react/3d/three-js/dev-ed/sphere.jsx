





// ==============================
// notes
// ==============================

// ==============================
// using three.js to create a sphere or cube
// ==============================

// ==============================
// please see the following video for details on how to create a sphere using three.js :
// " https://www.youtube.com/watch?v=_OwJV2xL8M8&t=812s " and
// this stackoverflow anwser helped me with seeing my sphere and then I could use
// OrbitCOntrols : " https://stackoverflow.com/questions/73265217/how-to-create-a-sphere-using-three-js "
// and this is a good answer on threejs materials :
// " https://stackoverflow.com/questions/66342169/switching-from-meshbasicmaterial-to-meshstandardmaterial-just-shows-black-screen "
// ==============================

// ==============================
// remember, for some reason in three.js the browserWidth in the handleResize
// function is the three.js renderer width size and not the actual
// window.innerWidth so when we resized the browser window we were getting the
// wrong results; to fix this we used containerWidth as our conditional in the
// handleResize function and this worked great
// ==============================

// ==============================
// remember, on initial page load, the browserWidth value is accurate so on
// the initial page load all the values in the three.js scene were correct,
// including the renderer.setSize() values
// ==============================








// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import three.js
import * as THREE from 'three';
// import in OrbitControls
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import in our stylesheet
import styles from './sphere.module.scss';


export default function SphereThreejsComponent() {

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
    const canvasRef    = useRef();
    const containerRef = useRef();

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
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

        /*

            // ==============================
            // initial Dev Ed sphere code that has been revised sligthly
            // doesn't work
            // ==============================

            // part 1

            // first, create a scene
            // and any objects created will be added to this scene
            const scene = new THREE.Scene();

            // create a sphere
            // and refer to the following website for details :
            // " https://threejs.org/docs/index.html#manual/introduction/Creating-a-scene "
            // const geometry = new THREE.SphereGeometry( 3, 64, 64 );
            const geometry = new THREE.SphereGeometry( 15, 32, 16 );


            // create the material
            const material = new THREE.MeshStandardMaterial( 
                {
                    color : 0x00ff83
                }
            );

            // create the mesh
            const mesh = new THREE.Mesh( geometry, material );

            // then we need to add the mesh to the scene
            scene.add( mesh );

            // part 2

            // add the camera
            // PerspectiveCamera takes in a number of parameters, the first parameter is
            // FOV and anything value over 50 for FOV can create distortion, the second
            // parameter is the aspect ratio and let's add 2560 for width and 1500 for height
            const camera = new THREE.PerspectiveCamera( 45, 2560 / 1500, 0.1, 1000 );

            // move the camera back
            camera.position.z = 5;

            // add the camera to the scene
            scene.add( camera );

            // part 3

            // add the light to the scene
            // first, add the light color, second add 
            const light = new THREE.PointLight( 0xfff, 1, 100 );

            // set positiom
            light.position.set( 0, 10, 10 );

            // add the light to the scene
            scene.add( light );

            // part 4

            // render the scene on the screen
            // but first add the canvas element and add a class name as well

            // ==============================
            // create DOM reference
            // ==============================

            // STEP 3

            // reference the specified DOM element below

            // define the renderer
            // and add the canvasRef as the argument
            const renderer = new THREE.WebGLRenderer( );

            // define how big our canvas is
            renderer.setSize( window.innerWidth, window.innerHeight );

            // now, render out the scene
            // renderer.render( scene, camera );

            // document.body.appendChild( renderer.domElement );
            // use ref as a mount point of the Three.js scene instead of the document.body
            // canvasRef.current && canvasRef.current.appendChild( renderer.domElement );
            // containerRef.current && containerRef.current.appendChild( renderer.domElement );
            containerRef.current.appendChild( renderer.domElement );

            var animate = function () {
                requestAnimationFrame( animate );
                mesh.rotation.x += 0.01;
                mesh.rotation.y += 0.01;
                renderer.render( scene, camera );
            };
            
            animate();
        */


        /*

            // ==============================
            // initial Dev Ed sphere code that has been revised sligthly
            // doesn't work
            // ==============================

            // first, create a scene
            // and any objects created will be added to this scene
            const scene = new THREE.Scene();

            // create a sphere
            // and refer to the following website for details :
            // " https://threejs.org/docs/index.html#manual/introduction/Creating-a-scene "
            // const geometry = new THREE.SphereGeometry( 3, 64, 64 );
            const geometry = new THREE.SphereGeometry( 15, 32, 16 );


            // create the material
            const material = new THREE.MeshStandardMaterial( 
                {
                    color : 0x00ff83
                }
            );

            // create the mesh
            const sphere = new THREE.Mesh( geometry, material );

            // then we need to add the mesh to the scene
            scene.add( sphere );

            // part 2

            // add the camera
            // PerspectiveCamera takes in a number of parameters, the first parameter is
            // FOV and anything value over 50 for FOV can create distortion, the second
            // parameter is the aspect ratio and let's add 2560 for width and 1500 for height
            const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

            // move the camera back
            camera.position.z = 20;

            // add the camera to the scene
            // scene.add( camera );

            // part 3

            const light = new THREE.PointLight( 0xfff, 1, 100 );
            light.position.set( 0, 10, 10 );
            scene.add( light );

            // part 4
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );

            containerRef.current.appendChild( renderer.domElement );

            var animate = function () {
                requestAnimationFrame( animate );
                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;
                renderer.render( scene, camera );
            };
            
            animate();
        */


        /*
            // ==============================
            // basic 3D cube
            // ==============================

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

            const renderer = new THREE.WebGLRenderer( { canvas : canvasRef.current } );
            renderer.setSize( window.innerWidth, window.innerHeight );
            // document.body.appendChild( renderer.domElement );

            const geometry = new THREE.BoxGeometry( 1, 1, 1 );
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new THREE.Mesh( geometry, material );
            scene.add( cube );

            camera.position.z = 5;

            function animate() {
                requestAnimationFrame( animate );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render( scene, camera );
            }

            animate();
        */


        /*
            // ==============================
            // great 3D cube
            // ==============================

            const scene  = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

            const renderer = new THREE.WebGLRenderer( { antialias : true, canvas : canvasRef.current } );
            renderer.setSize( window.innerWidth, window.innerHeight );

            // option 1 for rendering cube
            // const renderer = new THREE.WebGLRenderer();
            // containerRef.current.appendChild( renderer.domElement );
            
            // option 2 for rendering cube
            // const renderer = new THREE.WebGLRenderer( { canvas: canvasRef.current } );

            const geometry  = new THREE.BoxGeometry( 1, 1, 1 );
            // MeshBasicMaterial not effected by light
            // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            // MeshPhongMaterial is effected by light
            const material = new THREE.MeshPhongMaterial( { color: 0x44aa88 } );
            const cube     = new THREE.Mesh( geometry, material );
            scene.add( cube );

            const color     = 0xFFFFFF;
            const intensity = 3;
            const light     = new THREE.DirectionalLight( color, intensity );
            light.position.set( -1, 2, 4 );
            scene.add( light );

            camera.position.z = 5;

            function animate() {
                requestAnimationFrame( animate );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render( scene, camera );
            }

            animate();
        */


        /*
            // ==============================
            // revised Dev Ed sphere code
            // this works
            // ==============================

            const scene  = new THREE.Scene();
            // scene.background = new THREE.Color( 0xff0000 );

            const camera = new THREE.PerspectiveCamera( 45, 414 / 414, 0.1, 100 );

            const renderer = new THREE.WebGLRenderer( { antialias : true, canvas : canvasRef.current } );
            renderer.setSize( 414, 414 );
            
            const geometry = new THREE.SphereGeometry( 3, 64, 64 );
            const material = new THREE.MeshStandardMaterial( { color: 0x00ff83 } ); 
            const sphere   = new THREE.Mesh( geometry, material );
            scene.add( sphere );

            // doesn't work
            // const light = new THREE.PointLight( 0xfff, 1, 100 );
            // light.position.set( 0, 10, 10 );
            // scene.add( light );

            // works
            const light = new THREE.AmbientLight( 0x404040, 10 ); // soft white light
            scene.add( light );

            // works
            // const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
            // scene.add( directionalLight );

            // render.domElement is my canvas element
            // const controls = new OrbitControls( camera, renderer.domElement );

            camera.position.z = 20;

            function animate() {
                requestAnimationFrame( animate );

                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;

                renderer.render( scene, camera );
            }

            animate();

            // this loop code is to make the sphere responsive but does not
            // work well for our use case
            const loop = () => {

                renderer.render( scene, camera );
                window.requestAnimationFrame( loop );

            }

            loop();
        */


        /*
            // ==============================
            // code for creating a cube
            // this works
            // ==============================

            // === THREE.JS CODE START ===
            var scene    = new THREE.Scene();
            var camera   = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight) ;

            // document.body.appendChild( renderer.domElement );
            // use ref as a mount point of the Three.js scene instead of the document.body
            containerRef.current && containerRef.current.appendChild( renderer.domElement );

            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            var cube     = new THREE.Mesh(geometry, material);
            scene.add(cube);

            // render.domElement is my canvas element
            const controls = new OrbitControls( camera, renderer.domElement );

            camera.position.z = 5;

            var animate = function () {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(scene, camera);
            };

            animate();
        */

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

        // ==============================
        // revised Dev Ed sphere code
        // ==============================

        // ==============================
        // part 1
        // scene and camera
        // ==============================

        // create the scene and the camera
        const scene  = new THREE.Scene();
        // we have fov, aspect ration, the near point and far point
        const camera = new THREE.PerspectiveCamera( 45, 400 / 400, 0.1, 100 );

        // ==============================
        // part 2
        // renderer
        // ==============================

        // create renderer
        // render the scene on the screen
        const renderer = new THREE.WebGLRenderer(
            {
                antialias : true,
                alpha     : true, // alpha : true makes background transparent
                canvas    : canvasRef.current
            }
        );
        // set the size
        renderer.setSize( 400, 400 );
        // smooth out the edges
        renderer.setPixelRatio( 2 );
        // make background transparent but this is the default so no need to
        // declare it
        // renderer.setClearColor( 0x000000, 0 );

        // ==============================
        // part 3
        // miscellaneous
        // these changes will match the default settings in RTF
        // ==============================

        // ==============================
        // for details on part 10, see about 23:00 of " https://www.youtube.com/watch?v=DPl34H2ISsk "
        // and the title is " I wish I knew this before using React Three Fiber "
        // ==============================

        // match the supported pixel ratio of the browser
        renderer.setPixelRatio( window.devicePixelRatio );
        // match the default RTF tone mapping
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        // match the default RTF color spacing
        // renderer.outputEncoding = THREE.sRGBEncoding; // this has been depreciated
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        // ==============================
        // part 4
        // shape
        // ==============================

        // create the shape
        const geometry = new THREE.SphereGeometry( 3, 64, 64 );
        const material = new THREE.MeshStandardMaterial( { color: 0x00ff83 } ); 
        const sphere   = new THREE.Mesh( geometry, material );
        // add the sphere to the scene
        scene.add( sphere );

        // ==============================
        // part 5
        // lighting
        // ==============================

        // works, had to add 100 for intensity in order to see the sphere
        const pointLight = new THREE.PointLight( 0xffffff, 100, 100 );
        pointLight.position.set( 0, 10, 10 );
        scene.add( pointLight );

        // works
        // const ambientLight = new THREE.AmbientLight( 0x404040, 10 ); // soft white light
        // scene.add( ambientLight );

        // works
        // const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        // scene.add( directionalLight );

        // ==============================
        // part 6
        // orbit control
        // ==============================

        // console.log( renderer.domElement );

        // render.domElement is my canvas element
        const controls = new OrbitControls( camera, renderer.domElement );

        controls.enablePan     = false;
        controls.enableZoom    = false;
        controls.enableDamping = true;

        controls.autoRotate      = true;
        controls.autoRotateSpeed = 5;

        camera.position.set( 0, 0, 15.0 );
        // controls.update() must be called after any manual changes to the camera's transform
        controls.update();

        // ==============================
        // part 7
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
        // part 7
        // animation
        // option 1
        // ==============================

        /*
            function animate() {

                // this gives our damping a nice effect when we let go of the mouse
                controls.update();

                requestAnimationFrame( animate );

                phere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;

                // render the scene and the camera
                renderer.render( scene, camera );

            } // end of animate()

            animate();
        */

        // ==============================
        // part 7
        // animation
        // option 2
        // ==============================

        renderer.setAnimationLoop( () => {

            // this gives our damping a nice effect when we let go of the mouse
            controls.update();

            // render the scene and the camera
            renderer.render( scene, camera );

        } );

        // ==============================
        // code block 3
        // ==============================

        if ( browserWidth > 1032 ) {

            // make the size larger for big screens
            camera.position.set( 0, 0, 12.5 );

            camera.aspect = 800 / 800; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 800, 800 ); // set the size for this breakpoint

            // test
            console.log( 'In 800' );

        } // end of if

        else if ( 
            browserWidth <= 1032 &&
            browserWidth > 620
        ) {

            camera.aspect = 600 / 600; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 600, 600 ); // set the size for this breakpoint

            // test
            console.log( 'In 600' );

        } // end of if

        else if ( 
            browserWidth <= 620 &&
            browserWidth > 400 
        ) {

            camera.aspect = 400 / 400; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 400, 400 ); // set the size for this breakpoint

            // test
            console.log( 'In 400' );

        } // end of if

        else if ( 
            browserWidth <= 400 &&
            browserWidth > 375
        ) {

            camera.aspect = 375 / 375; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 375, 375 ); // set the size for this breakpoint

            // test
            console.log( 'In 375' );

        } // end of if

        else if (
            browserWidth <= 375
        ) {

            camera.aspect = 280 / 280; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 280, 280 ); // set the size for this breakpoint

            // test
            console.log( 'In 280' );

        } // end of if

    } // end of setThreeScene function

    // ==============================
    // function 2
    // ==============================

    // ==============================
    // handleResize function
    // ==============================

    // ==============================
    // purpose : on the resize event, revise the three.js scene based
    // on browser width
    // ==============================

    async function handleResize( e ) {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // remember, for some reason in three.js the browserWidth in the handleResize
        // function is the three.js renderer width size and not the actual
        // window.innerWidth so when we resized the browser window we were getting the
        // wrong results; to fix this we used containerWidth as our conditional in the
        // handleResize function and this worked great
        // ==============================

        // ==============================
        // remember, on initial page load, the browserWidth value is accurate so on
        // the initial page load all the values in the three.js scene were correct,
        // including the renderer.setSize() values
        // ==============================

        // define browserWidth
        browserWidth = window.innerWidth;

        // get the containerRef width and use this in the handleResize
        // function so that our browser width conditionals work as expected
        containerWidth = containerRef.current.offsetWidth;

        // test
        console.log( containerRef.current.offsetWidth );
        // test
        console.log( browserWidth );
        // test
        console.log( 'In handleResize' );

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // revised Dev Ed sphere code
        // ==============================

        // ==============================
        // part 1
        // scene and camera
        // ==============================

        // create the scene and the camera
        const scene  = new THREE.Scene();
        // we have fov, aspect ration, the near point and far point
        // remember, to get the same default settings as RTF, we do
        // " const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 ); "
        const camera = new THREE.PerspectiveCamera( 45, 400 / 400, 0.1, 100 );
        // move the camera back so that we can see the sphere and we do that
        // by setting the camera position or z value and the RTF default value
        // is 5
        camera.position.set( 0, 0, 15.0 );

        // ==============================
        // part 2
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
        renderer.setSize( 400, 400 );
        // smooth out the edges
        // renderer.setPixelRatio( 2 );
        // make background transparent but this is the default so no need to
        // declare it
        // renderer.setClearColor( 0x000000, 0 );

        // ==============================
        // part 3
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
        // part 4
        // shape
        // ==============================

        // create the shape
        const geometry = new THREE.SphereGeometry( 3, 64, 64 );
        const material = new THREE.MeshStandardMaterial( { color: 0x00ff83 } ); 
        const sphere   = new THREE.Mesh( geometry, material );
        // add the sphere to the scene
        scene.add( sphere );

        // ==============================
        // part 5
        // lighting
        // ==============================

        // works, had to add 100 for intensity in order to see the sphere
        const pointLight = new THREE.PointLight( 0xffffff, 100, 100 );
        pointLight.position.set( 0, 10, 10 );
        scene.add( pointLight );

        // works
        // const ambientLight = new THREE.AmbientLight( 0x404040, 10 ); // soft white light
        // scene.add( ambientLight );

        // works
        // const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        // scene.add( directionalLight );

        // ==============================
        // part 6
        // orbit control
        // ==============================

        // console.log( renderer.domElement );

        // render.domElement is my canvas element
        const controls = new OrbitControls( camera, renderer.domElement );

        controls.enablePan     = false;
        controls.enableZoom    = false;
        controls.enableDamping = true;

        controls.autoRotate      = true;
        controls.autoRotateSpeed = 5;

        // camera.position.set( 0, 0, 15.0 );

        // controls.update() must be called after any manual changes to the camera's transform
        controls.update();

        // ==============================
        // part 7
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
        // part 7
        // animation
        // option 1
        // ==============================

        /*
            function animate() {

                // this gives our damping a nice effect when we let go of the mouse
                controls.update();

                requestAnimationFrame( animate );

                phere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;

                // render the scene and the camera
                renderer.render( scene, camera );

            } // end of animate()

            animate();
        */

        // ==============================
        // part 7
        // animation
        // option 2
        // ==============================

        renderer.setAnimationLoop( () => {

            // this gives our damping a nice effect when we let go of the mouse
            controls.update();

            // render the scene and the camera
            renderer.render( scene, camera );

        } );

        // ==============================
        // code block 3
        // ==============================

        if ( containerWidth > 1032 ) {

            // make the size larger for big screens
            camera.position.set( 0, 0, 12.5 );

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
            containerWidth > 400 
        ) {

            camera.aspect = 400 / 400; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 400, 400 ); // set the size for this breakpoint

            // canvasRef.current.style.background = 'red';

            // test
            console.log( 'In 400' );

        } // end of if

        else if ( 
            containerWidth <= 400 &&
            containerWidth > 375
        ) {

            camera.aspect = 375 / 375; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 375, 375 ); // set the size for this breakpoint

            // test
            console.log( 'In 375' );

        } // end of if

        else if (
            containerWidth <= 375
        ) {

            // test
            console.log( 'In 280' );

            camera.aspect = 280 / 280; // keep this at the same initial camera aspect ratio
            camera.updateProjectionMatrix();
            renderer.setSize( 280, 280 ); // set the size for this breakpoint

        } // end of if

    } // end of handleResize function


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
            className={ styles.sphereContainer }
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
                className={ styles.sphereContainerDiv1 }
            >

                <h1>
                    3D Animations
                </h1>

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
                    className={ styles.sphereContainerDiv1Canvas }
                    ref={ canvasRef }
                >
                </canvas>

            </div>

        </div>

    );

} // end of SphereThreejsComponent


