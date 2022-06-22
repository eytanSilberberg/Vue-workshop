'use strict'

import { dbService } from './db.service.js'
import { bitCoinService } from './bitcoinService.js'
import { utilService } from './util.service'

const KEY = 'user'
export const userService = {
    query,
    get,
    remove,
    getUser,
    getEmptyuser,
    getLoggedinUser,
    logout,
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
    else {
        user['coins'] = utilService.getRandomInt(0, 1000)
        const bitCoinValue = await bitCoinService.getRate(user.coins)
        user.btc = bitCoinValue
        user.transactions = []
        await dbService.post(KEY, user)
    }
    return
}

function getEmptyuser() {
    return {
        name: ''
    }
}
function getLoggedinUser() {
    let loggedInUser = localStorage.getItem(KEY)
    loggedInUser = JSON.parse(loggedInUser)
    console.log(loggedInUser)
    if (!loggedInUser) return
    return loggedInUser[0]
}

async function logout() {
    localStorage.clear(KEY)
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
