

// ==============================
// formatCurrency function
// ==============================

// set up a function to format our currency
export function formatCurrency( amount : number ) {

    // Intl.NumberFormat() is a built-in browser tool for handling numbers in different languages
    return new Intl.NumberFormat( 'en-US', // use American rules, like putting the $ before the number

        {
            currency : 'usd', // psecifies that the symbol should be the US Dollar sign
            style    : 'currency'
        }

    ).format( amount ); // this takes our variable amount and does the actual transformation so 19 results in $19.00

} // end of formatCurrency

