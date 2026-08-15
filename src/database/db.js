import { Client, ID, Databases, Query } from "appwrite";

export class Database {
    client = new Client()
    database;

    constructor() {
        this.client
            .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)

        this.database = new Databases(this.client)
    }

    async createTransaction({
        userId,
        amount,
        add,
        source,
        date
    }) {
        try {
            return await this.database.createDocument(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                ID.unique(),
                {
                    userId,
                    amount,
                    add,
                    source,
                    date
                }
            );
        } catch (error) {
            console.error("Create transaction error:", error);
            throw error;
        }
    }

    async getTransactions(userId) {
        try {
            return await this.database.listDocuments(
                import.meta.env.VITE_DATABASE_ID,
                import.meta.env.VITE_COLLECTION_ID,
                [
                    Query.equal("userId", userId)
                ]
            );
        } catch (error) {
            console.error("Get transactions error:", error);
            throw error;
        }
    }
}


const database = new Database()

export default database