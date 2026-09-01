

// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */



// import in our stylesheet
import styles from './spinner-cog-dark.module.scss';


export default function SpinnerCogDark() {

    return (

        // remember the spinner.gif file came from Brad's React Front To Back course
        <>

            <img
                src={ '/images/spinner-cog-dark.gif' }
                width={ 120 }
                class={ styles.spinnerContainer }
                alt={ 'spinner' }
            />

        </>

    );

}

