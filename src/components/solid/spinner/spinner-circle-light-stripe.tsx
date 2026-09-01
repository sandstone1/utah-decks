

// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */



// import in our stylesheet
import styles from './spinner-circle-light-stripe.module.scss';


// create the component
export default function SpinnerCircleLight() {

    return (

        <div class={ styles.spinnerContainer }>

            <div class={ styles.spinnerContainerMain }>

                <div class={ styles.spinnerContainerMainDiv1 }>

                </div>

                <div class={ styles.spinnerContainerMainDiv2 }>

                </div>

            </div>

        </div>

    );

} // end of SpinnerCircleLight() {}

