'use strict'

import { dbService } from './db.service.js'

const KEY = 'users'
export const userService = {
    query,
    get,
    remove,
    getUser,
    getEmptyuser,
}

async function query() {
    var users = await dbService.query(KEY)

    console.log(users)
    if (!users || !users.length) {
        users = _createDefaultusers()
        await dbService.insert(KEY, users)
    }
    return users
}

async function get(id) {
    return await dbService.get(KEY, id)
}

async function remove(id) {
    return await dbService.remove(KEY, id)
}

async function getUser(user) {
    if (user._id) return await dbService.put(KEY, user)
    else return await dbService.post(KEY, user)
}

function getEmptyuser() {
    return {
        name: ''
    }
}

function _createDefaultusers() {
    return [
        _createUser('bob'),
        _createUser('bo'),
        _createUser('sam'),
        _createUser('joe'),
    ]
}

function _createuser(name) {
    return {
        name
    }
}
