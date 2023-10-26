console.log(skills);

let input: unknown;

function getInput(i: unknown) {
    if (typeof i === 'number') {
        i++;
    } else {
        console.log(i)
    }
}

getInput(input);

async function getData() {
    try {
        await fetch('');
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function getDataForce() {
    try {
        await fetch('');
    } catch (error) {
        const e = error as Error;
        console.log(e.message);
    }
}

type U1 = unknown | number;

type I1 = unknown & string;