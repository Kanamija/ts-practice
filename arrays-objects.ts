let hobbies: Array<string | number> = ['Sports', 'Cooking'];

hobbies.push(58)
hobbies.push('hello');
console.log(hobbies); 



let user: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Kanami',
    age: 42,
    hobbies: ['surfing', 'running', 'cooking'],
    role: {
        description: 'Mom',
        id: 5252
    }
}
console.log(user);

let val: {} = 'is a value';

let data: Record<string, boolean | number>;

data = {
    entry1: 5,
    entry2: false,
    entry3: 89
}