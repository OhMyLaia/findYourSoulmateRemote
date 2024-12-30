"use strict"
console.log(`User class running ok`);

class User {
    #id
    #username
    #email
    #password

    static message = `No profiles found yet. You can create a new one at any time! And the time, is now...`
    static counter = 0;

    static idGenerator() {
        const timestamp = Date.now();
        this.counter++;
        return `${this.counter}${timestamp}`
    }

    constructor (username, email, password) {
        this.#id = User.idGenerator();
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.profilesArr = [];
    }

    get id() { return this.#id }
    get username() { return this.#username }
    get email() { return this.#email }
    get password() { return this.#password }

    set username(newValue) { this.#username = newValue }
    set email(newValue) { this.#email = newValue }
    set password(newValue) { this.#password = newValue }P

    addProfileToUser(newProfile) { this.profilesArr.push(newProfile) }

    toString() {
        return `
        <pre>
        ID: ${this.id}
        Username: ${this.username}
        Email: ${this.email}
        </pre>
        `

    }


}