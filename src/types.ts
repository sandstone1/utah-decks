

// ==============================
// imports
// ==============================

// import in type JSX
import type { JSX } from 'solid-js';



// ==============================
// types
// ==============================

export type CartItem = {
	item     : ShopItem;
	quantity : number;
};

// think about doing this later :
/*
    export type CartItem = ShopItem & { 
        quantity : number; 
    };
*/

// remember, this matches my key value pairs in src/content/products
export type ShopItem = {
	id          : number;
	title       : string;
	price       : number;
	description : string;
	image       : {
		src : string;
		alt : string;
	};
};

// remember, User describes the data; Props describes the rules for the component

// we define the User shape one time here and then import the type { User } everywhere we need it
export type User = {
    id            : string;
    name          : string;
    email         : string;
    isAdmin       : boolean;
    emailVerified : boolean;
    image?        : {
        src : string;
        alt : string;
    };
};

// if the User is logged in then user is a full object
// if the User is a guest then user is null

// in TypeScript, " user: User | null " means the user property must exist on the component, even if its value is null
export type UserProps = { 
    user : User | null
}


