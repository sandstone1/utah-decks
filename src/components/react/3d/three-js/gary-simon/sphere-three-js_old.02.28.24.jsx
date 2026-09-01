




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
// make your three.js or RTF components responsive
// ==============================

// ==============================
// 1 - see the following 3 files for how to make your three.js
// or RTF components responsive
// ==============================

// ==============================
// files for the steps above
// ==============================

// ==============================
// 1 - components/3d/three-js/gary-simon/torus-react-three-fiber.js
// 2 - components/3d/three-js/gary-simon/torus-react-three-fiber.module.scss
// 3 - components/3d/three-js/gary-simon/torus-three-js.js
// 4 - components/3d/three-js/gary-simon/torus-three-js.module.scss
// 5 - components/3d/three-js/gary-simon/sphere-three-js.js
// 6 - components/3d/three-js/gary-simon/sphere-three-js.module.scss
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
// level at 7.0 and then change the blur to -6.0 or blue the image slightly and then
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
// ==============================












// import in Fragment, the useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
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
// import in the Tabler Icons hand move font icon
import { TbHandMove } from "react-icons/tb";
// import in the Spinner component
import Spinner from '../../../spinner/spinner-bounce-light';
// import in the debugger
// import * as dat from 'dat.gui';
// import in our stylesheet
import styles from './sphere-three-js.module.scss';


export default function SphereThreejsComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ width, setWidth ]         = useState( '' );
    const [ isLoading, setIsLoading ] = useState( false );

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
    let gui;

    // ==============================
    // useRef();
    // ==============================

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing the following useRef variables
    const containerRef = useRef();
    const h1Ref        = useRef();
    const wrapperRef   = useRef();
    const canvasRef    = useRef();
    const div2Ref      = useRef();

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

        // call setThreeScene on page load
        setThreeScene();

    }, [] ); // end of useEffect 2

    // ==============================
    // useEffect 3
    // ==============================

    // ==============================
    // purpose - hide the hand move hover animation after it runs one time
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // get the url string
        var urlString = window.location.href;

        // then get the last 13 characters of the string and see if the
        // last 13 characters equals " 3d-animations " and if so then we
        // know we are on the 3d-animations page
        var lastStrCharacters = urlString.slice( -13 );

        // test
        // console.log( urlString );
        // test
        // console.log( lastStrCharacters );

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // calculate browser width
        // ==============================

        // get the browser width so that I can either show or hide the " schedule a demo "
        // button based on the window size
        browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // intersection observer #1
        // ==============================

        // ==============================
        // show the hand move div after isIntersecting is true
        // ==============================

        // options object
        const handMoveFontIconOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px 0px 0px' // this works like margin in css and this
            // can help us control when the intersection observer fires

        } // end of options object

        // create the intersection observer and save the result to the const
        // handMoveFontIconObserver
        const handMoveFontIconObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, handMoveFontIconObserver ) { 

                entries.forEach( ( entry ) => {

                    // if our element is in the viewport then do something
                    if ( entry.isIntersecting ) {

                        // log the entry to console so that we can see the 
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        console.log( entry );

                        // ==============================
                        // create DOM reference
                        // ==============================

                        // STEP 3

                        // reference the specified DOM element below

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        handMoveFontIconObserver.unobserve( div2Ref.current );

                        // ==============================
                        // situation 1 - we are on the 3d animations page
                        // ==============================

                        // ==============================
                        // if we're on the 3d animations page then in order to center the hand move
                        // icon we had to change the top position a little bit depending on browser
                        // size
                        // ==============================

                        if ( lastStrCharacters === '3d-animations' && browserWidth > 1280 ) {

                            // test
                            // console.log( 'In lastStrCharacters === 3d-animations & browserWidth > 1280' );

                            // run animationPlayState
                            div2Ref.current.style.animationPlayState = 'running';

                            // increase the top position
                            div2Ref.current.style.top = '55%';

                            setTimeout( () => {

                                div2Ref.current.style.animationPlayState = 'paused';

                            }, 4000 );

                        } // end of if

                        else if ( lastStrCharacters === '3d-animations' && browserWidth <= 1280 && browserWidth > 1032 ) {

                            // test
                            // console.log( 'In lastStrCharacters === 3d-animations & browserWidth <= 1280 & browserWidth > 1032' );

                            // run animationPlayState
                            div2Ref.current.style.animationPlayState = 'running';

                            // increase the top position
                            div2Ref.current.style.top = '57%';

                            setTimeout( () => {

                                div2Ref.current.style.animationPlayState = 'paused';

                            }, 4000 );

                        } // end of else if

                        else if ( lastStrCharacters === '3d-animations' && browserWidth <= 1032 && browserWidth > 480 ) {

                            // test
                            // console.log( 'In lastStrCharacters === 3d-animations & browserWidth <= 1032 & browserWidth > 480' );

                            // run animationPlayState
                            div2Ref.current.style.animationPlayState = 'running';

                            // increase the top position
                            div2Ref.current.style.top = '58%';

                            setTimeout( () => {

                                div2Ref.current.style.animationPlayState = 'paused';

                            }, 4000 );

                        } // end of else if

                        else if ( lastStrCharacters === '3d-animations' && browserWidth <= 480 && browserWidth > 375 ) {

                            // test
                            // console.log( 'In lastStrCharacters === 3d-animations & browserWidth <= 480 & browserWidth > 375' );

                            // run animationPlayState
                            div2Ref.current.style.animationPlayState = 'running';

                            // increase the top position
                            div2Ref.current.style.top = '60%';

                            setTimeout( () => {

                                // make sure div2Ref.current exist before we run setTimeout; otherwise,
                                // an error will be thrown if we toggle to a new webpage before
                                // setTimeout has finished running
                                if ( div2Ref.current ) {

                                    div2Ref.current.style.animationPlayState = 'paused';

                                }

                                else {

                                    return; // div2Ref.current does not exist, exit this function

                                } // end of if else

                            }, 4000 );

                        } // end of else if

                        else if ( lastStrCharacters === '3d-animations' && browserWidth <= 375 ) {

                            // test
                            // console.log( 'In lastStrCharacters === 3d-animations & browserWidth <= 375' );

                            // run animationPlayState
                            div2Ref.current.style.animationPlayState = 'running';

                            // increase the top position
                            div2Ref.current.style.top = '63%';

                            setTimeout( () => {

                                div2Ref.current.style.animationPlayState = 'paused';

                            }, 4000 );

                        } // end of else if

                        // ==============================
                        // how to make the hand-move animation in the css file run
                        // only one time
                        // ==============================

                        // 1 - remember, we set up the animation is the scss file or we did
                        // the following :
                        // 1.1 - defined the hand-move keyframe
                        // 1.2 - in div2, we defined the animation or set
                        // " animation : hand-move 3.5s linear forwards; " and then
                        // 1.3 - we set the animation play state to paused by default or
                        // " animation-play-state : paused; " and then

                        // 2 - once the observation happens or the div2 enters the viewport
                        // then we set the animation play state to running or
                        // " div2Ref.current.style.animationPlayState = 'running'; " and
                        // then

                        // 3 - we use the setTimeout function to set animation play state
                        // to paused and by doing step 3 we are able to make sure that this
                        // animation only runs once and will not run again even if the
                        // user scrolls to another section and then comes back to this
                        // section and this section enter the viewport

                        // 4 - and remember, we set the opacity to 0 in the hand-move 
                        // keyframe at 100% and set the animation fill mode to forwards
                        // and therefore once the animation reaches 100% the hand move
                        // font icon will disappear and given step 3 above the hand move
                        // icon will not reappear later

                        // ==============================
                        // situation 2 - we are not on the 3d animations page
                        // ==============================

                        // ==============================
                        // if we're not on the 3d animations page and our browser width is greater
                        // than 1440 then we will go with the default settings and the reason why
                        // we had to set an else if here for the default settings is because if we
                        // toggled too quickly between pages then we were getting an error saying
                        // that we are stuck in the setTimeout function below and the browser can
                        // not find div12Ref.current and placing the code within the else if
                        // statement removed the error
                        // ==============================

                        else if ( lastStrCharacters !== '3d-animations' && browserWidth > 1440 ) {

                            // test
                            // console.log( 'In lastStrCharacters !== 3d-animations & browserWidth > 1440' );

                            // run animationPlayState
                            div2Ref.current.style.animationPlayState = 'running';

                            setTimeout( () => {

                                div2Ref.current.style.animationPlayState = 'paused';

                            }, 4000 );

                        } // end of else if

                        // default ( see code directly above )
                        /*
                        div2Ref.current.style.animationPlayState = 'running';

                        setTimeout( () => {

                            div2Ref.current.style.animationPlayState = 'paused';

                        }, 4000 );
                        */

                        // ==============================
                        // end of how to make the hand-move animation in the css file run
                        // only one time
                        // ==============================

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, handMoveFontIconObserver )

            handMoveFontIconOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        handMoveFontIconObserver.observe( div2Ref.current );

        // ==============================
        // end of intersection observer #1
        // ==============================

    }, [] ); // end of useEffect 3

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
        console.log( 'In setThreeScene' );

        // ==============================
        // code block 2
        // ==============================
/*
        // ==============================
        // part 1
        // load our 3D model or glb file or gltf file into our three.js scene
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
        // part 2
        // debugger
        // ==============================

        // gui = new dat.GUI();

        // ==============================
        // part 3
        // set the sizes for the parent container or the wrapper div
        // sizes
        // ==============================

        // get the wrapper div width and height
        const sizes = {

            width  : wrapperRef.current.clientWidth,
            height : wrapperRef.current.clientHeight,

        } // end of sizes

        // test
        // console.log( wrapperRef.current.clientWidth );

        // ==============================
        // part 4
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
        // part 5
        // TextureLoader
        // bring in our normal map image using the threejs TextureLoader
        // ==============================

        const textureLoader = new THREE.TextureLoader( manager );

        // load in my golf ball normal map file
        const normalTexture = textureLoader.load( '/textures/golf_ball_normal_map.png' );

        // ==============================
        // part 6
        // scene and camera
        // ==============================

        // create the scene and the camera
        const scene  = new THREE.Scene();

        // we have fov, aspect ration, the near point and far point
        const camera = new THREE.PerspectiveCamera( 45, sizes.width / sizes.height, 0.1, 100 );
        // set the camera position
        camera.position.set( 0, 0, 2.0 );

        // ==============================
        // part 7
        // shape
        // ==============================

        // create the sphere
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

        // create the sphere
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

        // debug - doesn't work with nextjs
        // revise pointLight2 as needed using gui.add() and PointLightHelper
        // gui.add( pointLight2.position, 'y' );
        // const pointLightHelper = new THREE.PointLightHelper( pointLight2, 7 );
        // scene.add( pointLightHelper );

        // ==============================
        // part 9
        // renderer
        // ==============================

        // create renderer
        // render the scene on the screen
        const renderer = new THREE.WebGLRenderer(
            {
                antialias          : true,
                alpha              : true,
                premultipliedAlpha : false,
                canvas             : canvasRef.current
            }
        ); // alpha : true makes background transparent
        // set the size
        renderer.setSize( sizes.width, sizes.height );

        // ==============================
        // part 10
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
        // part 11
        // orbit control
        // ==============================

        // render.domElement is my canvas element
        const controls = new OrbitControls( camera, renderer.domElement );

        controls.enablePan     = false;
        controls.enableZoom    = false;
        controls.enableDamping = true;

        // controls.autoRotate      = true;
        // controls.autoRotateSpeed = 5;

        // controls.update() must be called after any manual changes to the camera's transform
        // controls.update();

        // ==============================
        // part 12
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
        // part 12
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
        // part 12
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
        // part 12
        // animation
        // option 3
        // ==============================

        // get the clock instance
        const clock = new THREE.Clock();

        function tick() {

            const elapsedTime = clock.getElapsedTime();

            // update objects
            sphere.rotation.y = 0.5 * elapsedTime;

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




        // ==============================
        // part 13
        // resize
        // ==============================

        // ==============================
        // add an event listener for the browser resize event
        // ==============================

        // ==============================
        // remember, we are doing this so that as we test the app by making the browser
        // window smaller or larger we can see the correct content
        // ==============================
/*
        var ro = new ResizeObserver(entries => {
            for ( let entry of entries ) {
              const cr = entry.contentRect;
          
              console.log('Element:', entry.target);
              console.log(`Element size: ${cr.width}px x ${cr.height}px`);
              console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
            }
          });
*/
          // Observe one or multiple elements
          // ro.observe( wrapperRef.current );

        // if browserWidth exist then call the handleResize function
        if ( browserWidth ) {

            window.addEventListener( 'resize', (  ) => {

                if ( wrapperRef.current ) {

                    // update camera
                    camera.aspect = wrapperRef.current.clientWidth / wrapperRef.current.clientHeight; // keep this at the same initial camera aspect ratio
                    camera.updateProjectionMatrix();

                    // update renderer
                    renderer.setSize( wrapperRef.current.clientWidth, wrapperRef.current.clientHeight ); // set the size for this breakpoint

                    const loop = () => {

                        // render the scene
                        renderer.render( scene, camera );
            
                        // call loopk again on the next animation frame
                        requestAnimationFrame( loop );
            
                    } // end of loop
            
                    // run loop
                    loop();

                } // end of if

/*
                var ro = new ResizeObserver( entries => {

                    for ( let entry of entries ) {

                        console.log( 'In resize' );
                        const cr = entry.contentRect;

                        console.log('Element:', entry.target);
                        console.log(`Element size: ${cr.width}px x ${cr.height}px`);
                        console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);

                        // update camera
                        camera.aspect = cr.width / cr.height; // keep this at the same initial camera aspect ratio
                        camera.updateProjectionMatrix();

                        // update renderer
                        renderer.setSize( cr.width, cr.height ); // set the size for this breakpoint

                        const loop = () => {

                            // render the scene
                            renderer.render( scene, camera );
                
                            // call loopk again on the next animation frame
                            requestAnimationFrame( loop );
                
                        } // end of loop
                
                        // run loop
                        loop();
                    }
                });
*/
                // Observe one or multiple elements
                // ro.observe( wrapperRef.current );
/*
                console.log( 'In resize' );

                console.log( window.innerWidth );
                console.log( wrapperRef.current.clientWidth );
                console.log( sizes.width );

                // update camera
                camera.aspect = window.innerWidth / window.innerHeight; // keep this at the same initial camera aspect ratio
                camera.updateProjectionMatrix();

                // update renderer
                renderer.setSize( window.innerWidth, window.innerHeight ); // set the size for this breakpoint

                const loop = () => {

                    // render the scene
                    renderer.render( scene, camera );
        
                    // call loopk again on the next animation frame
                    requestAnimationFrame( loop );
        
                } // end of loop
        
                // run loop
                loop();
*/
            }, false );

            // make sure we remove the event listener after we call the handleResize
            // function
            return () => {

                // window.removeEventListener( 'resize', handleResize, false );

            };

        } // end of if

/*
        // remember, we need to rerender the scene and camera on every frame for the resize event
        // to work in threejs
        const loop = () => {

            // render the scene
            renderer.render( scene, camera );

            // call loopk again on the next animation frame
            requestAnimationFrame( loop );

        } // end of loop

        // run loop
        loop();
*/








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
                        className={ styles.sphereContainer }
                        ref={ containerRef }
                    >

                        <h1
                            ref={ h1Ref }
                        >
                            3D Animations
                        </h1>

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
                            className={ styles.sphereContainerDiv1 }
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
                                className={ styles.sphereContainerDiv1Canvas }
                                ref={ canvasRef }
                            >
                            </canvas>

                        </div>

                        <div 
                            className={ styles.sphereContainerDiv2 }
                            ref={ div2Ref }
                        >
                            <TbHandMove style={ { fontSize : '5.2rem', color : 'var( --white )' } } />
                        </div>

                    </div>

                )

            }

        </Fragment>

    );

} // end of SphereThreejsComponent


