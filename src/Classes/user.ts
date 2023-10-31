class User2 {
    private _login: string;
    password: string;
    skills: string[] = [];

    set login(l: string) {
        this._login = 'user_' + l;
    }

    get login() {
        return this._login;
    }

// перегрузка метода
    addSkill(s: string): void;
    addSkill(s: string[]): void;
    addSkill(skillOrSkills: string | string[]) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.push(...skillOrSkills);
        }
    }
}

const user22 = new User2();
user22.addSkill('JavaScript');
user22.addSkill(['HTML', 'CSS']);
user22.login = 'myLogin';
console.log(user22);

// перегрузка функции
function run(distance: number): number;
function run(distance: string): string;
function run(distance: string | number): number | string {
    if (typeof distance == 'string') {
        return '';
    } else {
        return 1;
    }
}

