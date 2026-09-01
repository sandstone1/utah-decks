



// ==============================
// notes
// ==============================

// ==============================
// remember, dev-ed/shpere.green.js is the next version of dev-ed/sphere.js
// ==============================








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















// import in the useEffect, useRef, useState hooks
import { useEffect, useRef, useState } from 'react';
// import three.js
import * as THREE from 'three';
// import in OrbitControls
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import in our stylesheet
import styles from './sphere-green.module.scss';


export default function SphereThreejsComponent() {

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
    let mouseDown = false;
    let redValue;
    let greenValue;
    let blueValue;
    let rgb;
    let newColor;

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
    // setThreeScene function
    // ==============================

    // ==============================
    // purpose : set the three.js scene
    // ==============================

    async function setThreejsScene( e ) {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // remember, we had to define browserWidth inside this function in order
        // to the get the if statements below to work
        // ==============================

        // ==============================
        // remember, on initial page load, the browserWidth value is accurate so on
        // the initial page load all the values in the three.js scene were correct,
        // including the renderer.setSize() values
        // ==============================

        // define browserWidth
        browserWidth = window.innerWidth;

        // define containerWidth
        containerWidth = containerRef.current.offsetWidth;

        // test
        // console.log( containerWidth );

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

        // test
        // console.log( containerRef.current.clientWidth );
        // console.log( containerRef.current.clientHeight );
        // console.log( window.innerWidth );

        // ==============================
        // part 2
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
        camera.position.set( 0, 0, 12.5 );

        // ==============================
        // part 3
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

        // smooth out the edges
        // renderer.setPixelRatio( 2 );
        // make background transparent but this is the default so no need to declare it
        // renderer.setClearColor( 0x000000, 0 );

        // ==============================
        // part 4
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
        // renderer.outputEncoding = THREE.sRGBEncoding; // this has been depreciated
        
        // ==============================
        // part 5
        // shape
        // ==============================

        // create the shape
        const geometry = new THREE.SphereGeometry( 3, 64, 64 ); // radius, width segments and height segments
        // and 64 64 creates the perfect ball
        const material = new THREE.MeshStandardMaterial( { color: 0x00ff83 } ); 
        const sphere   = new THREE.Mesh( geometry, material );
        // add the sphere to the scene
        scene.add( sphere );

        // ==============================
        // part 6
        // lighting
        // ==============================

        // works, had to add 100 for intensity in order to see the sphere
        // parameters are color, intensity ( default is 1 ) and maximum
        // range of light ( default is 0 )
        const pointLight = new THREE.PointLight( 0xffffff, 100, 100 );
        // parameters are x, y and z positions
        pointLight.position.set( 0, 10, 10 );
        scene.add( pointLight );

        // works
        // const ambientLight = new THREE.AmbientLight( 0x404040, 1 ); // soft white light
        // scene.add( ambientLight );

        // works
        // const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        // scene.add( directionalLight );

        // ==============================
        // part 7
        // orbit controls
        // ==============================

        // render.domElement is my canvas element
        const controls = new OrbitControls( camera, renderer.domElement );

        controls.enablePan     = false;
        controls.enableZoom    = false;
        controls.enableDamping = true; // this gives our damping a nice effect when
        // we let go of the mouse

        controls.autoRotate      = true;
        controls.autoRotateSpeed = 5;

        // Three.js says : " controls.update() must be called after any manual changes to the
        // camera's transform " amd they put controls.update after camera.position.set() or
        /*
            camera.position.set( 0, 20, 100 );
            controls.update();
        */
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

                // on the next animation frame call the animate function
                requestAnimationFrame( animate );

                // update orbit controls
                // Three.js says : " required if controls.enableDamping or
                // controls.autoRotate are set to true "
                controls.update();

                // sphere.rotation.x += 0.01;
                // sphere.rotation.y += 0.01;

                // render the scene and the camera
                renderer.render( scene, camera );

            } // end of animate()

            animate();
        */

        // ==============================
        // part 8
        // animation
        // option 2
        // ==============================

        renderer.setAnimationLoop( () => {

            // update orbit controls
            // Three.js says : " required if controls.enableDamping or
            // controls.autoRotate are set to true "
            controls.update();

            // render the scene and the camera
            renderer.render( scene, camera );

        } );

/*
        // ==============================
        // having a tough time getting part 9 and part 10 to work on smaller
        // screens and not sure why and adding " if ( containerWidth > 1032 ) { } "
        // did not solve the problem - ultimately - of my spheres not rendering
        // correctly on smaller screens
        // ==============================

        // ==============================
        // maybe gsap is causing the problem??
        // ==============================

        // ==============================
        // code block 3
        // ==============================

        if ( containerWidth > 1032 ) {
                
            // test
            console.log( 'In containerWidth > 1032' );

            // ==============================
            // part 9
            // change sphere color on the mousedown event
            // ==============================

            window.addEventListener( "mousedown", ( e ) => { mouseDown = true } );
            window.addEventListener( "mouseup", ( e ) => { mouseDown = false } );

            window.addEventListener( "mousemove", ( e ) => {

                if ( mouseDown ) {

                    // test
                    console.log( 'In mousedown' );

                    // returns a random integer from 0 to 255:
                    redValue   = Math.floor( Math.random() * 256 ) + 75;
                    greenValue = Math.floor( Math.random() * 256 ) + 75;
                    blueValue  = Math.floor( Math.random() * 256 ) + 25;

                    // define rgb
                    rgb = [
                        redValue,
                        greenValue,
                        blueValue
                    ]

                    // test
                    console.log( rgb );

                    // define NewColor
                    newColor = new THREE.Color( `rgb( ${rgb.join(",")} )` );

                    // test
                    console.log( newColor );

                    // animate color using gsap
                    gsap.to( sphere.material.color, 
                        {
                            r : newColor.r,
                            g : newColor.g,
                            b : newColor.b,
                        }
                    ) // end of gsap.to

                } // end of if

            } ); // end of window.addEventListener

            // ==============================
            // part 10
            // change sphere color randomly every 5 seconds
            // ==============================

            setInterval( () => {

                // call the changeColor function
                changeColor();

            }, 5000 );

            // ==============================
            // function 3
            // ==============================

            // ==============================
            // changeColor function
            // ==============================

            async function changeColor( e ) {

                // returns a random integer from 0 to 255:
                redValue   = Math.floor( Math.random() * 256 ) + 75;
                greenValue = Math.floor( Math.random() * 256 ) + 75;
                blueValue  = Math.floor( Math.random() * 256 ) + 75;

                // define rgb
                rgb = [
                    redValue,
                    greenValue,
                    blueValue
                ]

                // test
                console.log( rgb );

                // define NewColor
                newColor = new THREE.Color( `rgb( ${rgb.join(",")} )` );

                // test
                console.log( newColor );

                // animate color using gsap
                gsap.to( sphere.material.color, 
                    {
                        r : newColor.r,
                        g : newColor.g,
                        b : newColor.b,
                    }
                ) // end of gsap.to

            } // end of changeColor function

        } // end of ( containerWidth > 1032 ) if
*/

        // ==============================
        // code block 3
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
            <div className={ styles.sphereContainerDiv1 }>

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

} // end of SphereThreejsComponent


