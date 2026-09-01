


// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */



// import in the Font Awesome svg big icon 
import FaSolidTimesCircle from '../icons/times-circle';
// import in our stylesheet
import styles from './sm-create-new-event.module.scss';


// wrap our message the SuccessMessage component and the children inside the code below
// represents our success message
export default function SuccessMessageComponent( props : any ) {

    // ==============================
    // declare variables
    // ==============================

    let successMessageContainerRef : HTMLDivElement | undefined;

    // ==============================
    // handleClick function
    // ==============================

    const handleClick = () => {

        if ( successMessageContainerRef ) {

            // erase the success message upon clicking the x font icon in the top right corner
            // and after we access the referenced element we can then apply the style object
            // or { display : none }
            successMessageContainerRef.style.display = 'none';

        } // end of if

        // after closing the success message, reset the state
        props.resetFrontendSuccessMessage();

    } // end of handleClick

    return (

        <div 
            class={ styles.successMessageContainer }
            ref={ successMessageContainerRef }
        >

            <h3>{ props.children }</h3>

            <span
                onClick={ handleClick }
            >
                <FaSolidTimesCircle />
            </span>

        </div>

    );

} // end of successMessageComponent() {}

