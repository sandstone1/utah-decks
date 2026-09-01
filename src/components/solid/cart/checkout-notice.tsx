
// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */


// import in our styles
import styles from './checkout-notice.module.scss';

// if the user is not signed in then show this component

// CheckoutNotice component
export const CheckoutNotice = () => {

    return (    

        <>
            <p class={ styles.noticeContainer1 }>
                Please sign in before proceeding to the checkout page. Thank you.
            </p>

            <p class={ styles.noticeContainer2 }>
                Go to the <a href="/signin">Sign In page.</a>
            </p>

        </>

    )

}

