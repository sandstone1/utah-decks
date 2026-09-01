



// import in the useRef, useState hooks
import { useRef, useState } from 'react';
// import in the useFrame hook
import { useFrame } from '@react-three/fiber';



export default function MeshComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ isHovered, setIsHovered ]         = useState( false );
    const [ isColorChange, setIsColorChange ] = useState( false );

    // ==============================
    // zustand state
    // ==============================

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // define variables
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing the following useRef variable(s)
    const meshRef = useRef();

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
    // useFrame();
    // ==============================

    // ==============================
    // purpose : to change the rotation speed on hover
    // ==============================

    // ==============================
    // create DOM reference
    // ==============================

    // STEP 3

    // reference the specified DOM element below

    // to make the text move in a fluid motion back and forth add the following :
    useFrame( ( state, delta ) => { // remember, delta represents the time in seconds since
        // the last frame

        // upon hover, speed up the rotation
        const speed = isHovered ? 1.0 : 0.25;

        // rotate the cube on the y axis and do so based on delta * 0.25
        meshRef.current.rotation.y += delta * speed;

        // remember, this one looks great :
        /*
            // since we are changing the color of the sphere, just use a constant
            // speed
            const speed = 0.25;
    
            // rotate the cube on the x axis and do so based on delta * 0.25
            meshRef.current.rotation.x += delta * speed;

            <sphereGeometry
                args={ [ 2.5, 2.5, 40 ] } // args equals radius, width segments and
                // height segments
            />
        */

    } ); // end of useFrmae

    // ==============================
    // functions
    // ==============================

    // ==============================
    // setTimeout function
    // ==============================

    // ==============================
    // purpose : to change the color of the sphere every 8 seconds
    // ==============================

    setTimeout( () => {

        if ( isColorChange === false ) {

            // set to true
            setIsColorChange( true );
    
        } // end of if

        else if ( isColorChange === true ) {

            // set to false
            setIsColorChange( false );

        } // end of else if

    }, 8000 ); // end of setTimeout


    return (

        // ==============================
        // mesh
        // ==============================

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2 ( see below )

        // tie the initialized useRef variable from above into a specific DOM element so
        // that we can reference that DOM element in our code

        <mesh
            position={ [ 0, 0, 0 ] }
            // change the rotation speed on hover
            onPointerEnter={ ( event ) => ( event.stopPropagation(), setIsHovered( true ) ) }
            onPointerLeave={ () => setIsHovered( false ) }
            ref={ meshRef }
        >

            <sphereGeometry
                args={ [ 2.5, 40, 40 ] } // args equals radius, width segments and height segments
                attach="geometry"
            />

            <meshStandardMaterial
                // color='rgba( 0, 105, 220, 1 )' // --blue-83
                color={ isColorChange ? 'rgba( 226, 30, 81, 1 )' : 'rgba( 0, 105, 220, 1 )' } // --red-35 and --blue-83, respectively
                wireframe
                attach="material"
            />

        </mesh>

    );

} // end of MeshComponent


