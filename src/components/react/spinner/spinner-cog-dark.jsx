

// import in the Fragment component from react
import { Fragment } from 'react';
// import in our stylesheet
import styles from './spinner-cog-dark.module.scss';


export default function SpinnerCogDark() {

    return (

        // remember the spinner.gif file came from Brad's React Front To Back course
        <Fragment>

            <img
                src={ '/images/spinner-cog-dark.gif' }
                width={ 120 }
                className={ styles.spinnerContainer }
                alt={ 'spinner' }
            />

        </Fragment>

    );

}

