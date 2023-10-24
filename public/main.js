"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let id = 5;
let age = '26';
console.log(typeof age);
age = 26;
console.log(typeof age);
let person1 = {
    name: 'Anna',
    location: 'RU',
    isProgrammer: true
};
const revenue = 1000;
const bonus = 500;
let res = revenue + bonus;
console.log(res);
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.lastname}`;
}
const getFullNameArrowFunction = (name, lastname) => {
    return `${name} ${lastname}`;
};
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
};
console.log(getFullName(user));
const skills = ['Dev', 'DevOps', 'Testing', 'HTML/CSS/JS'];
const resSkills = skills
    .filter(s => s !== 'DevOps')
    .map(s => `${s}! `)
    .reduce((res, curr) => {
    return res + curr;
}, '');
console.log(resSkills);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 1] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 2] = "FAILED";
})(StatusCode || (StatusCode = {}));
const resReq = {
    message: 'Платеж успешно завершен',
    statusCode: StatusCode.SUCCESS
};
if (resReq.statusCode === StatusCode.SUCCESS) {
    console.log(resReq.message);
}
function compute(num) {
    return num * 3;
}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = compute(4)] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
})(Roles || (Roles = {}));
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["PUBLISHED"] = "published";
    QuestionStatus["DRAFT"] = "draft";
    QuestionStatus["DELETED"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        return yield res.json();
    });
}
function logId(id) {
    if (typeof id === 'string') {
        console.log(`${id} - строка`);
    }
    else if (typeof id === 'number') {
        console.log(`${id} - число`);
    }
    else {
        console.log(id, ' - boolean');
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logKeyObj(obj) {
    if ('a' in obj) {
        console.log(`this is a ${obj.a}`);
    }
    else {
        console.log(`and this is b ${obj.b}`);
    }
}
function logObj(a, b) {
    if (a === b) {
        console.log(a, b);
    }
}
//# sourceMappingURL=main.js.map