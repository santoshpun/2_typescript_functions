function add(a: number, b: number): number {
    return a + b;
}

let sum = add(10, 20);

console.log(sum);

function echo(message: string): void {
    console.log(message.toUpperCase());
}

echo('Hello TypeScript');

function display(id: number, name: string, email?: string): void {
    console.log("ID : ", id);
    console.log("Name : ", name);

    if (email != undefined) {
        console.log("Email : ", email);
    }
}

display(1, "John");
display(2, "mary", "mary@xyz.com");