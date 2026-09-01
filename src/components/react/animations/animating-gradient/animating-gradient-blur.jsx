



// ==============================
// remember, for this file to work in the pricing component in the index.js file we need to
// add 2 properties to the parent component :
//
// 1 - add "  z-index  : 0; " to the parent parent div or
/*
    // ==============================
    // #1 - have to add to parent in order for the <AnimatingGradientBlur /> to work
    //
    // " z-index  : 0; " will allow the negative z-index in the animating-gradient-blur
    // file to work
    // ==============================

    z-index  : 0;
*/
// 2 - add " position : relative; " to the parent div or
/*
    // ==============================
    // #2 - have to add to parent in order for the <AnimatingGradientBlur /> to work
    //
    // " position : relative; " will allow the absolutely positioned pseudo elements in the
    // animating-gradient-blur file to attach themselves to this div
    // ==============================

    position : relative;
*/
//
// ==============================







// import in our stylesheet
import styles from './animating-gradient-blur.module.scss';



export default function AnimatingGradientBlurComponent() {

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

    // ==============================
    // useRef();
    // ==============================

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
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================


    return (

        // ==============================
        // container
        // ==============================

        <div
            className={ styles.animatingGradientBlurContainer }
        >

            <div></div>

        </div> 

    );

} // end of AnimatingGradientBlurComponent


