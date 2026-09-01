



// ==============================
// remember, for this file to work in the pricing component in the index.js file we need to
// add 2 properties to the parent component :
//
// 1 - add "  z-index  : 1; " to the sibling or white card so that the white card
// sits above the radial gradients
/*
    // ==============================
    // had to add a z-index of 1 so that the white card sits above the radial gradients in the
    // animating-gradient-background.module.scss file
    // ==============================

    z-index  : 1;
*/
// 2 - add " position : relative; " to the parent div or
/*
    // ==============================
    // remember, I had to make 5 changes to this file in order for the pseudo elements in the
    // animating-gradient-background.nodule.scss file to work
    //
    // 1 - I had to add " position : relative; " to the parent in order for the
    // absolutely position pseudo elements in the animating-gradient-background.module.scss file
    // to work
    // 2 - I had to add a dark background to the parent or var( --blue-800 )
    // 3 - I had to add a z-index of 1 to the card or sibling in order for the white card to sit
    // above the radial gradients
    // 4 - I had to change the h1 in the sibling below from h1-dark to h1-light
    // 5 - I had to change the background color of the svg shape in the following container div
    // ==============================

    position : relative;
*/
//
// ==============================







// import in our stylesheet
import styles from './animating-gradient-background-v17.module.scss';



export default function AnimatingGradientBackgroundComponent() {

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
            className={ styles.animatingGradientBackgroundContainer }
        >

            <div></div>

        </div> 

    );

} // end of AnimatingGradientBackgroundComponent


