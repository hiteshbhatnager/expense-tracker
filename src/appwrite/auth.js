import { Client, Account, ID } from 'appwrite';

export class Authservice {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
        this.account = new Account(this.client)
    }

    async signup({ email, password, name }) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name)
            if (user) {
                return this.login({ email, password })
            } else {
                return user
            }
        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getuser() {
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession("current")
        } catch (error) {
            throw error
        }
    }

}
const authservice = new Authservice()

export default authservice