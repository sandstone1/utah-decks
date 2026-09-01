



// import in the useEffect, useRef, useState hooks
import { useEffect, useRef, useState } from 'react';
// import three.js
import * as THREE from 'three';
// import in OrbitControls
import { OrbitControls } from 'three/addons/controls/OrbitControls';
// import in our stylesheet
import styles from './icosahedron-hemi-light.module.scss';



export default function IcosahedronHemiLightComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ containerWidth2, setContainerWidth2 ] = useState( '' );

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

        // everytime containWidth2 changes call the setThreejsScene function again
        setThreejsScene();

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

            width  : 800,
            height : 800

        } // end of sizes

        // ==============================
        // part 3
        // scene and camera
        // ==============================

        // create the scene and the camera
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
                premultipliedAlpha : false, // see above for notes
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
        // shape 1
        // ==============================

        // create the icosahedron
        // the first parameter is the radius ( default is 1 ) and the second parameter
        // is detail ( default is 0 ) and " setting this to a value greater than 0 adds more
        // vertices making it no longer an icosahedron. When detail is greater than 1,
        // it's effectively a sphere. "
        const geometry = new THREE.IcosahedronGeometry( 1, 1 );
        const material = new THREE.MeshStandardMaterial(
            {
                color       : 0xffffff,
                // fog         : true,
                // metalness   : 0.4,
                roughness   : 0.2,
                flatShading : true
            }
        );
        // create the icosahedron
        const icosahedron = new THREE.Mesh( geometry, material );
        // add the icosahedron to the scene
        scene.add( icosahedron );

        // ==============================
        // part 6
        // shape 2
        // ==============================

        const wireframeMaterial = new THREE.MeshBasicMaterial(
            {
                color     : 0xffffff,
                wireframe : true
            }
        );
        // create the wireframe
        const wireframe = new THREE.Mesh( geometry, wireframeMaterial );
        // raise the wireframe mesh up just slightly and this helps remove the
        // flicker
        wireframe.scale.setScalar( 1.001 );
        // add the wireframe to the icosahedron shape; in other words, the wireframe
        // is a child to the icosahedron shape versus being a child to the scene
        icosahedron.add( wireframe );

        // ==============================
        // part 7
        // lighting
        // ==============================

        // the first parameter is the skyColor ( default is 0xffffff ) and the second
        // parameter is the groundColor ( default is 0xffffff ) and the third
        // parameter is the intensity or numeric value of the light's strength / intensity
        // ( default is 1 )
        const hemiLight = new THREE.HemisphereLight( 0x0099ff, 0xfd7e14 );
        scene.add( hemiLight );

        // white
        // the first parameter is color of the light ( default is 0xffffff ) and the second
        // parameter is inntensity ( default is 1 ) and remember this light is like
        // sunlight
        const directionalLight = new THREE.DirectionalLight( 0xffff00, 0.8 );
        directionalLight.position.set( -15, -15, 5 );
        scene.add( directionalLight );

        // ==============================
        // part 8
        // orbit controls
        // ==============================

        // render.domElement is my canvas element
        const controls = new OrbitControls( camera, renderer.domElement );

        controls.enablePan     = false;
        controls.enableZoom    = false;
        controls.enableDamping = true;
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

        // ==============================
        // part 9
        // animation
        // option 1
        // ==============================

        function animate() {

            // on the next animation frame call the animate function
            requestAnimationFrame( animate );

            // update orbit controls
            // this gives our damping a nice effect when we let go of the mouse
            controls.update();

            // icosahedron.rotation.x += 0.007;
            icosahedron.rotation.y += 0.006;

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
            className={ styles.icosahedronContainer }
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
                className={ styles.icosahedronContainerDiv1 }
            >

                <h1>
                    3D Animations
                </h1>

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

    );

} // end of IcosahedronHemiLightComponent


