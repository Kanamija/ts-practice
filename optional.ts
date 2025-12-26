// function generateError(msg?: string) {
//     throw new Error(msg) 
// }

// generateError();

type User = {
    name: string;
    age: number;
    role?: 'admin' | 'guest'
};

const user: User = {
    name: 'Kanami',
    age: 42,
}

console.log(user);

let input = null;

const didProvideInput = input || false