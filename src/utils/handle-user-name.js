

// ==============================
// handleUserName function
// ==============================

// convert user.name to 2 letters or the user's initials
export function handleUserName( name ) {

    // ==============================
    // define variables
    // ==============================

    // get the user first name
    const userFirstName = name.split( ' ' )[ 0 ];
    // get the user last name
    const userLastName = name.split( ' ' )[ 1 ];
    // get the user first name initial
    const userFirstNameInitial = userFirstName.slice( 0, 1 ).toUpperCase();
    // get the user last name initial
    const userLastNameInitial = userLastName.slice( 0, 1 ).toUpperCase();

    // construct the const userInitials
    const userInitials = `${ userFirstNameInitial }${ userLastNameInitial }`;

    return userInitials;

} // end of handleUserName

