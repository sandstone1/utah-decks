



// import in the Fragment hook
import { Fragment } from 'react';
// import in the scss file
import styles from './highlight-text-link-2.module.scss';




export default function HighlightTextComponentLink2() {

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


    return (

        <Fragment>

            {
                /*
                // ==============================
                // container
                // ==============================

                // ==============================
                // remember, the way this is set up it is better to keep the container and have the span ref
                // inside the container
                // ==============================

                // ==============================
                // remember, we have to position the html code in the correct spot so that our
                // highlighted text appears where it needs to appear
                // ==============================
                */
            }
            
            <div 
                className={ styles.highlightTextContainer }
            >

                {
                    /*
                        // ==============================
                        // container > span ( hover triggered animation - highlight text )
                        // ==============================
                    */
                }
                <a href="/contact">
                    <span data-content="Contact" aria-hidden="true"></span>
                    Contact
                </a>

            </div>

        </Fragment>

    );

} // end of HighlightTextComponentLink2

