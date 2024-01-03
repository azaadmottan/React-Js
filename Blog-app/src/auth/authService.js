import { Client, Account, ID } from 'appwrite';
import config from '../config/config';

class AuthService {

    client = new Client;
    account;

    constructor() {

        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);

        this.account = new Account(this.client);
    }
    
    // create-account handler

    async createAccount({email, password, name}) {

        try {
            
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if(userAccount) {

                // call login method for continue as login. 
                return this.login({email, password});
            }
            else {

                // return userAccount details for login further.
                return userAccount;
            }

        } catch (error) {
            
            console.log(`\n✕ Error: Something went wrong while creating account.\nError: ${error}`);
        }
    }

    // login handler

    async login({email, password}) {

        try {

            // login user
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            
            // handle error if any problem occur during login.
            console.log(`\n✕ Error: Something went wrong while login user.\nError: ${error}`);
        }
    }

    // getCurrent-user handler

    async getCurrentUser() {

        try {

            return await this.account.get();
        } catch (error) {

            console.log(`\n✕ Error: Appwrite service error while get-current user.\nError: ${error}`);
        }

        return null;
    }

    // logout handler

    async logout() {

        try {

            return await this.account.deleteSessions();
        } catch (error) {

            console.log(`\n✕ Error: Appwrite service error while logout user.\nError: ${error}`);
        }
    }


}

const authService = new AuthService();

export default authService;
