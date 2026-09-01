
// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */


// ==============================
// imports
// ==============================

// import in our styles
import styles from './empty-state.module.scss';


// this is the fallback if there is nothing in the cart

// ==============================
// EmptyState component
// ==============================

// EmptyState component
export const EmptyState = () => {

    return (

        <>
            <p class={ styles.containerIcon }>
                <span role="img" aria-label="hot-dog">🌭</span>
            </p>

            <p class={ styles.containerEmpty }>
                Your cart is empty! Add a sandwich or two and give flavor a chance.
            </p>        
        </>

    )

}

