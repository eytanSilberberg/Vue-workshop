import { contactService } from '../../services/contactService'
import { userService } from '../../services/userService';
export default {
    state: {
        loggedInUser: null,
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedInUser = user
        },
        logOut(state) {
            state.loggedInUser = null
        },
        updateUser(state, { user }) {
            state.loggedInUser = user
        }
    },
    actions: {
        async getLoggedinUser({ commit }) {
            const user = await userService.getLoggedinUser()
            console.log(user)
            commit({ type: 'setUser', user })
        },
        async logOutUser({ commit }) {
            await userService.logout()
            commit({ type: 'logOut' })
        },
        async updateUser({ commit }, { user }) {
            console.log('user', user);
            try {
                const reqUser = await userService.getUser(user)
                commit({ type: 'updateUser', user: reqUser })
            } catch {

            }

        }
    },
    getters: {
        user(state) { return state.loggedInUser }
    }
}