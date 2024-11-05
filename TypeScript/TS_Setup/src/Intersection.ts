// Intersection - 
// An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types.
// To combine types, you use the & operator as follows:
// type typeAB = typeA & typeB;

//An intersection type combines two or more types to create a new type that has all properties of the existing types.
// The type order is not important when you combine types.

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

// The following defines two intersection types:
// The Employee type contains all properties of the Identity and Contact type:
type Employee2 = Identity & Contact;
let e: Employee2 = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};

// the Customer type contains all properties of the BusinessPartner and Contact type:
type Customer = BusinessPartner & Contact;
let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};
