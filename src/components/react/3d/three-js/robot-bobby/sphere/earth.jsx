




// import in Fragment, the useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import three.js
import * as THREE from 'three';
// import in OrbitControls
import { OrbitControls } from 'three/addons/controls/OrbitControls';
// import in the Spinner component
import Spinner from '../../../../spinner/spinner-bounce-light';
// import in our stylesheet
import styles from './earth.module.scss';

// import in Stars from drei
// import { Stars } from '@react-three/drei';


export default function ThreeDEarthComponent() {

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
    const [ dayMap, setDayMap ]                   = useState( '' );
    const [ normalMap, setNormalMap ]             = useState( '' );
    const [ specularMap, setSpecularMap ]         = useState( '' );
    const [ cloudsMap, setCloudsMap ]             = useState( '' );
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
                // console.log( entries[ 0 ].contentRect.width );

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
        setThreejsScene();

    }, [] ); // end of useEffect 1

    // ==============================
    // useEffect(); 2
    // ==============================

    // ==============================
    // purpose : handle the resize event
    // ==============================

    useEffect( () => {

        // test
        console.log( 'In useEffect 2' );

        // ==============================
        // code block 1
        // ==============================

        // call the resize event
        window.addEventListener( 'resize', handleResize, false );

        // make sure we remove the event listener after we call the handleResize
        // function
        return () => {

            // test
            console.log( 'In removeEventListener' );

            // from stackoverflow : " The return of a useEffect runs when the component is
            // unmounted, not once it is run. " and when I unmount the component I do
            // see the log statement avbove
            window.removeEventListener( 'resize', handleResize, false );

        };

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

            // save the textures to state and then use these values inside the setThreejsScene
            // function to set each side of the cube
            setDayMap( dayMap );
            setNormalMap( normalMap );
            setSpecularMap( specularMap );
            setCloudsMap( cloudsMap );

        } // end of manager.onLoad

        // ==============================
        // part 2
        // TextureLoader
        // use the textureLoader to create the textures for our cube
        // ==============================

        // instantiate a loader and remember, in order for manager.onProgress and
        // manager.onLoad, we need to add " manager " as a paramter to THREE.TextureLoader()
        const textureLoader = new THREE.TextureLoader( manager );

        // load in my Earth textures
        const dayMap      = textureLoader.load( '/images/8k_earth_daymap_75.webp' );
        const normalMap   = textureLoader.load( '/images/8k_earth_normal_map_75.webp' );
        const specularMap = textureLoader.load( '/images/8k_earth_specular_map_75.webp' );
        const cloudsMap   = textureLoader.load( '/images/8k_earth_clouds_50_50.webp' );

        // ==============================
        // code block 3
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

        // create a new scene
        const scene  = new THREE.Scene();

        // for parameters to PrespectiveCamers, we have fov, aspect ration, the near point
        // clipping point and far clipping point and remember, to get the same default settings
        // as RTF, we do :
        // " const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 ); "
        const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 );
        // move the camera back a little so we can see the 3d object and we do that
        // by setting the camera position or z value and the RTF default value is 5
        camera.position.set( 0, 0, 2.0 );

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
        // group
        // ==============================

        const earthGroup = new THREE.Group();

        // ==============================
        // part 7
        // shape
        // ==============================

        // ==============================
        // mesh 1
        // ==============================

        // create the geometry
        // the first parameter is the radius ( defaults to 1 ) and the second parameter is
        // the width segments ( defaults to 32 ) and third parameter is the height segments
        // ( defaults to 16 )
        const sphereGeometry1 = new THREE.SphereGeometry( 1, 64, 64 );

        // create the phong material
        const mat1 = new THREE.MeshPhongMaterial(
            {
                map : specularMap
            }
        );

        // create the sphere
        const sphere1 = new THREE.Mesh( sphereGeometry1, mat1 );
        // add the sphere to the scene
        earthGroup.add( sphere1 );

        // ==============================
        // mesh 2
        // ==============================

        // create the standard material
        const mat2 = new THREE.MeshStandardMaterial(
            {
                map       : dayMap,
                normalMap : normalMap,
                metalness : 0.0,
                roughness : 0.7
            }
        );

        // create the sphere
        const sphere2 = new THREE.Mesh( sphereGeometry1, mat2 );
        // add the sphere to the scene
        earthGroup.add( sphere2 );

        // ==============================
        // mesh 3
        // ==============================

        // create the geometry
        // the first parameter is the radius ( defaults to 1 ) and the second parameter is
        // the width segments ( defaults to 32 ) and third parameter is the height segments
        // ( defaults to 16 )
        const sphereGeometry2 = new THREE.SphereGeometry( 1.005, 64, 64 ); // make this sphere
        // slightly bigger than the earth since the clouds are floating on top of the earth

        // create the phong material
        const mat3 = new THREE.MeshPhongMaterial(
            {
                map         : cloudsMap,
                opacity     : 0.4, // get rid of black background and keep white clouds
                depthWrite  : true, // this should be the default but leave here just
                // in case
                transparent : true, // have to do transparent equals true in order for
                // opacity to work
                side        : THREE.DoubleSide, // THREE.DoubleSide means both sides are
                // casting shadows
            }
        );

        // create the sphere
        const sphere3 = new THREE.Mesh( sphereGeometry2, mat3 );
        // add the sphere to the scene
        earthGroup.add( sphere3 );

        // add earthGroup to the scene
        scene.add( earthGroup );

        // ==============================
        // part 8
        // lighting
        // ==============================


        // for PointLight, the parameters are color ( default white ), intensity
        // ( default 1 ) and distance or the maximum range of light ( default is 0 
        // or nor limit )

        // off white
        const pointLight = new THREE.PointLight( 0xf6f3ea, 10, 0 );
        pointLight.position.set( 4, 0, 2 );
        scene.add( pointLight );

        // off white
        // the first parameter is color of the light ( default is 0xf6f3ea ) and the second
        // parameter is inntensity ( default is 1 ) and remember this light is like
        // sunlight
        const directionalLight = new THREE.DirectionalLight( 0xf6f3ea, 8.0 );
        directionalLight.position.set( 10, 0, 10 );
        scene.add( directionalLight );

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

        function animate() {

            // on the next animation frame call the animate function
            requestAnimationFrame( animate );

            // update orbit controls
            // Three.js says : " required if controls.enableDamping or
            // controls.autoRotate are set to true "
            controls.update();

            // sphere1.rotation.x += 0.007;
            sphere1.rotation.y += 0.0035;
            sphere2.rotation.y += 0.0035;
            sphere3.rotation.y += 0.0035;

            // render the scene and the camera
            renderer.render( scene, camera );

        } // end of animate()

        // call animate to kick off the animation
        animate();

        // ==============================
        // code block 4
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

    // ==============================
    // function 2
    // ==============================

    // ==============================
    // handleResize function
    // ==============================

    // ==============================
    // purpose : handle the browser resize event
    // ==============================

    function handleResize() {

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
        console.log( 'In handleResize' );

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // part 1
        // we are doing 3 things in part 1 :
        // 1 - creating the loading spinner
        // 2 - saving the textures to state so that we can use them later
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
            // setIsLoaded( true );

            // save the textures to state and then use these values inside the setThreejsScene
            // function to set each side of the cube
            setDayMap( dayMap );
            setNormalMap( normalMap );
            setSpecularMap( specularMap );
            setCloudsMap( cloudsMap );

        } // end of manager.onLoad

        // ==============================
        // part 2
        // TextureLoader
        // use the textureLoader to create the textures for our cube
        // ==============================

        // instantiate a loader and remember, in order for manager.onProgress and
        // manager.onLoad, we need to add " manager " as a paramter to THREE.TextureLoader()
        const textureLoader = new THREE.TextureLoader( manager );
        
        // load in my Earth textures
        const dayMap      = textureLoader.load( '/images/8k_earth_daymap_75.webp' );
        const normalMap   = textureLoader.load( '/images/8k_earth_normal_map_75.webp' );
        const specularMap = textureLoader.load( '/images/8k_earth_specular_map_75.webp' );
        const cloudsMap   = textureLoader.load( '/images/8k_earth_clouds_50_50.webp' );

        // ==============================
        // code block 3
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

        // create a new scene
        const scene  = new THREE.Scene();

        // for parameters to PrespectiveCamers, we have fov, aspect ration, the near point
        // clipping point and far clipping point and remember, to get the same default settings
        // as RTF, we do :
        // " const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 ); "
        const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 );
        // move the camera back a little so we can see the 3d object and we do that
        // by setting the camera position or z value and the RTF default value is 5
        camera.position.set( 0, 0, 2.0 );

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
        // group
        // ==============================

        const earthGroup = new THREE.Group();

        // ==============================
        // part 7
        // shape
        // ==============================

        // ==============================
        // mesh 1
        // ==============================

        // create the geometry
        // the first parameter is the radius ( defaults to 1 ) and the second parameter is
        // the width segments ( defaults to 32 ) and third parameter is the height segments
        // ( defaults to 16 )
        const sphereGeometry1 = new THREE.SphereGeometry( 1, 64, 64 );

        // create the phong material
        const mat1 = new THREE.MeshPhongMaterial(
            {
                map : specularMap
            }
        );

        // create the sphere
        const sphere1 = new THREE.Mesh( sphereGeometry1, mat2 );
        // add the sphere to the scene
        earthGroup.add( sphere1 );

        // ==============================
        // mesh 2
        // ==============================

        // create the standard material
        const mat2 = new THREE.MeshStandardMaterial(
            {
                map       : dayMap,
                normalMap : normalMap,
                metalness : 0.0,
                roughness : 0.7
            }
        );

        // create the sphere
        const sphere2 = new THREE.Mesh( sphereGeometry1, mat2 );
        // add the sphere to the scene
        earthGroup.add( sphere2 );

        // ==============================
        // mesh 3
        // ==============================

        // create the geometry
        // the first parameter is the radius ( defaults to 1 ) and the second parameter is
        // the width segments ( defaults to 32 ) and third parameter is the height segments
        // ( defaults to 16 )
        const sphereGeometry2 = new THREE.SphereGeometry( 1.005, 64, 64 ); // make this sphere
        // slightly bigger than the earth since the clouds are floating on top of the earth

        // create the phong material
        const mat3 = new THREE.MeshPhongMaterial(
            {
                map         : cloudsMap,
                opacity     : 0.4, // get rid of black background and keep white clouds
                depthWrite  : true, // this should be the defualt but leave here just
                // in case
                transparent : true, // have to do transparent equals true in order for
                // opacity to work
                side        : THREE.DoubleSide // THREE.DoubleSide means both sides are
                // casting shadows
            }
        );

        // create the sphere
        const sphere3 = new THREE.Mesh( sphereGeometry2, mat3 );
        // add the sphere to the scene
        earthGroup.add( sphere3 );

        // add earthGroup to the scene
        scene.add( earthGroup );

        // ==============================
        // part 8
        // lighting
        // ==============================


        // for PointLight, the parameters are color ( default white ), intensity
        // ( default 1 ) and distance or the maximum range of light ( default is 0 
        // or nor limit )

        // off white
        const pointLight = new THREE.PointLight( 0xf6f3ea, 10, 0 );
        pointLight.position.set( 4, 0, 2 );
        scene.add( pointLight );

        // off white
        // the first parameter is color of the light ( default is 0xf6f3ea ) and the second
        // parameter is inntensity ( default is 1 ) and remember this light is like
        // sunlight
        const directionalLight = new THREE.DirectionalLight( 0xf6f3ea, 1.5 );
        directionalLight.position.set( 10, 0, 10 );
        scene.add( directionalLight );

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

        function animate() {

            // on the next animation frame call the animate function
            requestAnimationFrame( animate );

            // update orbit controls
            // Three.js says : " required if controls.enableDamping or
            // controls.autoRotate are set to true "
            controls.update();

            // sphere1.rotation.x += 0.007;
            sphere1.rotation.y += 0.0035;
            sphere2.rotation.y += 0.0035;
            sphere3.rotation.y += 0.0035;

            // render the scene and the camera
            renderer.render( scene, camera );

        } // end of animate()

        // call animate to kick off the animation
        animate();

        // ==============================
        // code block 4
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

    } // end of handleResize



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

                    <div 
                        className={ styles.earth3dContainer }
                        ref={ containerRef }
                    >

                        <div>

                            <h1>
                                3D Earth
                            </h1>

                            <div>

                                <canvas
                                    ref={ canvasRef }
                                >

                                {
                                    /*
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
                                    */
                                }

                                </canvas>

                            </div>

                        </div>

                        <div>
            
                            <p>
                                To rotate the Earth, move your cursor over the planet
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

                )

            }

        </Fragment>

    );

} // end of ThreeDEarthComponent


