// Narrowing / Type Gaurds
// typeof
// instanceof
// in

//typeof
console.log("--------- typeof ---------")
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
console.log(add(2, 3))
console.log(add("Hello ", "Typescript"))

// instanceOf
class Customers {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPar = Customers | Supplier;

function signContract(partner: BusinessPar) : string {
    var message: string = "";
    if (partner instanceof Customers) {
        return message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
       return message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}

const cust = new Customers()
const supplier = new Supplier()

console.log(signContract(supplier))

//  in
function signContract2(partner: BusinessPar) : string {
    let message: string;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        // must be Supplier
        message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message;
}

console.log(signContract2(cust))
