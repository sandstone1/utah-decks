

// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */



// import in the Font Awesome svg big icon 
import FaSolidTimesCircle from '../icons/times-circle';
// import in our stylesheet
import styles from './em-signin.module.scss';


// wrap our message the ErrorMessage component and the children inside the code below
// represents our error message
export default function ErrorMessageComponent( props : any ) {

    // ==============================
    // declare variables
    // ==============================

    let errorMessageContainerRef : HTMLDivElement | undefined;

    // ==============================
    // handleClick function
    // ==============================

    const handleClick = () => {

        if ( errorMessageContainerRef ) {

            // erase the error message upon clicking the x font icon in the top right corner
            // and after we access the referenced element we can then apply the style object
            // or { display : none }
            errorMessageContainerRef.style.display = 'none';

        } // end of if

        // after closing the error message, reset the state
        props.resetFrontendErrorMessage();

    } // end of handleClick


    return (

        <div
            class={ styles.errorMessageContainer }
            ref={ errorMessageContainerRef }
        >

            <h3>{ props.children }</h3>

            <span
                onClick={ handleClick }
            >
                <FaSolidTimesCircle />
            </span>

        </div>

    );

} // end of ErrorMessageComponent

