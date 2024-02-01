import conf from "../conf/conf";
import { Client, Account, ID } from 'appwrite'

export class AuthService{
    /* unlike documentation, instead of manually creating client,
    * 
    */
    client = new Client();
    account;

    constructor(){
        // client needs to be provided API endpoint and project ID
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    }
}

const authService = new AuthService()
export default AuthService