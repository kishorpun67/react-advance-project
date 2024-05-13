import { Client, Account, ID } from "appwrite";
import config from "../config/config";



export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async creatAccount({email, password, name}){
        try {
            const userAccount = await this.account.createAccount(
                ID.unique(), email, password, name
            );
            if(userAccount) {
                // call another method 
                return this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(
                email, 
                password
            );
        }catch(error) {
            throw error;
        }

    }

    async authChek() {  
        try {
            return await this.account.get();
        } catch (err) {
            console.log('Appwrite serivce :: authChek :: error', err);
            
            
        }
        return null
    }
    async logout() {  
        try {
            return await this.account.deleteSessions();
        } catch (err) {
            throw err
        }
    }
         
}

const authService = new AuthService();

export default authService
