let id = 5;
let age: number|string = '26';

console.log(typeof age);

age = 26;

console.log(typeof age);

interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
}

let person1: Person = {
    name: 'Anna',
    location: 'RU',
    isProgrammer: true
}

interface Speach {
    sayHi (name: string): string;
    sayBye: (name: string) => string;
}

const revenue:number = 1000;
const bonus:number = 500;

let res:number = revenue + bonus;
console.log(res);

function getFullName(userEntity: {firstname: string, lastname: string}) {
    return `${userEntity.firstname} ${userEntity.lastname}`;
}

const getFullNameArrowFunction = (name: string, lastname: string) => {
    return `${name} ${lastname}`;
}

const user = {
    firstname: 'Anna',
    lastname: 'Stefanova',
    city: 'Moscow',
    age: 38,
    skills: {
        html: true,
        css: true,
        JS: true
    }
}

console.log(getFullName(user));

const skills = ['Dev', 'DevOps', 'Testing', 'HTML/CSS/JS'];

const resSkills = skills
    .filter(s => s !== 'DevOps')
    .map(s => `${s}! `)
    .reduce((res, curr) => {
        return res + curr
    }, '');

console.log(resSkills);

// Enum

enum StatusCode {
    SUCCESS,
    IN_PROCESS,
    FAILED
}

const resReq = {
    message: 'Платеж успешно завершен',
    statusCode: StatusCode.SUCCESS
}

if (resReq.statusCode === StatusCode.SUCCESS) {
    console.log(resReq.message);
}

function compute(num: number) {
    return num * 3;
}

enum Roles {
    ADMIN = compute(4),
    USER = 1
}

// Типизация функции
enum QuestionStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}
async function getFaqs(req:{
    'topicId': number;
    'status'?: QuestionStatus
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    return await res.json();
}

// Union

function logId(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(`${id} - строка`);
    } else if (typeof id === 'number'){
        console.log(`${id} - число`)
    } else {
        console.log(id, ' - boolean')
    }
}

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err)
    }
}

function logKeyObj(obj: {a: number} | {b: number}) {
    if ('a' in obj) {
        console.log(`this is a ${obj.a}`)
    } else {
        console.log(`and this is b ${obj.b}`);
    }
}
function logObj(a: string | number, b: string | boolean) {
    if (a === b) {
        console.log(a, b)
    }
}

function fetchWithAuth(url: string, method: 'post'|'get'): 1|-1 {
    return 1;
}
const method = 'post';

fetchWithAuth('', method)