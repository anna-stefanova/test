function getId(id: string | number) {
    if (isString(id)) {
        console.log(id);
    } else {
        console.log(id);
    }

}

function isString(x: string | number): x is string {
    return typeof x === 'string';
}


function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
}