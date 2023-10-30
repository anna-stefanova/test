"use strict";
const n = null;
const n1 = null;
function getUser() {
    if (Math.random() > 0.5)
        return null;
    else
        return {
            name: 'Вася'
        };
}
const user2 = getUser();
if (user2) {
    const n55 = user2.name;
}
//# sourceMappingURL=index.js.map