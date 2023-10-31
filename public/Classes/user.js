"use strict";
class User2 {
    constructor() {
        this.skills = [];
    }
    set login(l) {
        this._login = 'user_' + l;
    }
    get login() {
        return this._login;
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.push(...skillOrSkills);
        }
    }
}
const user22 = new User2();
user22.addSkill('JavaScript');
user22.addSkill(['HTML', 'CSS']);
user22.login = 'myLogin';
console.log(user22);
function run(distance) {
    if (typeof distance == 'string') {
        return '';
    }
    else {
        return 1;
    }
}
//# sourceMappingURL=user.js.map