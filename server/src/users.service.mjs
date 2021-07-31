import loadJson from 'load-json-file';
import { getUsersCollection } from '../db/connect.mjs';

let users = loadJson.sync('./data/users.json');

export function getUsers() {
    return getUsersCollection()
    .find({})
    .toArray();
}

export function getUser(userId) {
    return getUsersCollection()
    .find({userId: parseInt(userId)})
    .toArray();
}

export function addUser(user) {
    users.push(user);
}

export function deleteUser(userId) {
    users = users.filter(user => user.id != userId);
}

export function editUser(userId, newUser) {
    const [ user ] = users.filter(user => user.id == userId);
    user.email = newUser.email;
}
