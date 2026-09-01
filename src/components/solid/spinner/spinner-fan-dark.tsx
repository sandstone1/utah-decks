

// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */



// import in our stylesheet
import styles from './spinner-fan-dark.module.scss';


const Spinner = () => (

    // remember the spinner.gif file came from Brad's React Front To Back course
    <>

        <img
            src={ '/images/spinner-fan-dark.gif' }
            width={ 300 }
            class={ styles.spinnerContainer }
            alt={ 'spinner' }
        />

    </>

);


export default Spinner;
