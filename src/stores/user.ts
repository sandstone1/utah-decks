

// ==============================
// imports
// ==============================

// import in atom
import { atom } from 'nanostores';
// Import the User interface
import type { User } from '../types'; 


// ==============================
// create a $user nano store
// ==============================

// create $user store and this will hold our user data: id, name, email,
// isAdmin, emailVerified, image

// <User | null> is a TS generic and says User can be a full object that matches our
// User interface or be null

// ( null ) is the initial value when the website first loads
export const $user = atom<User | null>( null );

