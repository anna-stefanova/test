const n: null = null;
const n1: any = null;
//const n2: number = null;

interface User2 {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) return null;
    else return {
        name: 'Вася'
    } as User2;
}

const user2 = getUser();
if (user2) {
    const n55 = user2.name;
}