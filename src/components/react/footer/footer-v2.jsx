


// import in the Highlight text component link 1
import HighlightTextComponentLink1 from './highlight-text-link-1';
// import in the Highlight text component link 2
import HighlightTextComponentLink2 from './highlight-text-link-2';
// import in the Highlight text component link 3
import HighlightTextComponentLink3 from './highlight-text-link-3';
// import in the Highlight text component link 4
import HighlightTextComponentLink4 from './highlight-text-link-4';
// import in the Highlight text component link 5
import HighlightTextComponentLink5 from './highlight-text-link-5';
// import in the Highlight text component link 6
import HighlightTextComponentLink6 from './highlight-text-link-6';
// import in our stylesheet
import styles from './footer-v2.module.scss';



export default function Footer() {

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

    // ==============================
    // functions
    // ==============================

    return (

        // ==============================
        // container
        // ==============================

        <footer className={ styles.footerContainer }>

            {
                /*
                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================
                */
            }
            <div>

                {
                    /*
                        // ==============================
                        // container > div 1
                        // ==============================
                    */
                }
                <div>

                    <div>
                        <HighlightTextComponentLink1 />
                    </div>

                    <div>
                        <HighlightTextComponentLink5 />
                    </div>

                    <div>
                        <HighlightTextComponentLink6 />
                    </div>

                    <div>
                        <HighlightTextComponentLink2 />
                    </div>

                    <div>
                        <HighlightTextComponentLink3 />
                    </div>

                    <div>
                        <HighlightTextComponentLink4 />
                    </div>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 2
                        // ==============================
                    */
                }
                <div>

                    <p>Copyright &copy; 2026 by Enchanting Apps.</p>
                    <p>All rights reserved.</p>

                </div>

            </div>

        </footer>

    );

} // end of Footer

