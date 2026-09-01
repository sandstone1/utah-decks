

// import in the useRef(); hook
import { useRef } from 'react';
// import in navigate
import { navigate } from 'astro:transitions/client';
// import in Font Awesome
import { FaTimesCircle } from 'react-icons/fa';
// import in our stylesheet
import styles from './em-[...slug].module.scss';


// remember to destructure off the children prop in the argument below since we will
// wrap our message with the code below or the ErrorMessage component and the children
// inside the code below represents our error message
export default function ErrorMessageComponent( { children, resetFrontendErrorMessage } ) {

    // ==============================
    // create DOM reference
    // ==============================

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing a useRef variable and we will call this variable
    // " errorMessageContainerRef "
    const errorMessageContainerRef = useRef();

    // End of STEP 1

    // ==============================
    // handleClick function
    // ==============================

    const handleClick = ( e ) => {

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // reference the specified DOM element below

        // erase the error message upon clicking the x font icon in the top right corner
        // and remember we have to use " .current " in order to access the referenced element
        // and after we access the referenced element we can then apply the style object
        // or { display : none }
        errorMessageContainerRef.current.style.display = 'none';

        // End of STEP 3

        // after closing the error message, reset the state
        // for this component, I had to commnet out the resetFrontendErrorMessage function
        // since there was a delay between time the user was pushed back to the events page
        // and when the frontendErrorMessage was cleared and therefore I was seeing the
        // completed slug page for a millisecond
        // resetFrontendErrorMessage();

        // after closing the error message, send the user back to the events page
        navigate( '/events' );

    } // end of handleClick

    return (

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2 ( see below )

        // tie the initialized useRef variable from above into a specific DOM element so that we can
        // reference that DOM element in our code

        <div 
            className={ styles.errorMessageContainer }
            ref={ errorMessageContainerRef }
        >

            <h3>{ children }</h3>

            <span
                onClick={ handleClick }
            >
                <FaTimesCircle />
            </span>

        </div>

    );

} // end of ErrorMessageComponent

