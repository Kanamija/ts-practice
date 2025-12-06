// enum Role {
//     Admin = 1, 
//     Editor,
//     Guest,
// }

// let userRole: Role = Role.Admin;

// userRole = Role.Guest;

type Role = 'admin' | 'editor' | 'guest' | 'reader';

type User = {
    name: string;
    age: number;
    role: Role;
    permissions: string[];
}

let userRole: Role = 'admin'

userRole = 'admin';

let possibleResults: [1 | -1, 1 | -1];

possibleResults = [1, 1];

function access(role: Role) {

}