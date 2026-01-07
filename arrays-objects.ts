let hobbies = ['Sports', 'Cooking'];

// hobbies.push('Fencing')

// let users: (string | number)[];
let users: Array<string | number>;

users = [1, 'Max', 5, 'Jack'];

let user: {
    name: string;
    age: number | 'string';
    hobbies: string[];
    role: {
        description: string;
        id: number;
    };
} = {
    name: 'George',
    age: 40,
    hobbies: ['Fishing'],
    role: {
        description: 'Front Desk',
        id: 90
    }
}