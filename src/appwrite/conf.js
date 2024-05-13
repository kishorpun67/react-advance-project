import config from "../config/config";
import {Client, ID, Database, Storage, Query} from 'appwriter'

export class Service{
    client = new Client();
    database;
    bucket;
    constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.bucket = new Storage(this.client);
        this.database = new Database(this.client);
    }

    async createPost({title, slug, content, feature_img, status, user_id}){
        try {
            return await  this.databases.createDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId, 
                ID.unique(),
                {
                    title,
                    slug,
                    content,
                    feature_img,
                    status,
                    user_id,
                }
            );
        }catch(error) {
            throw error;
        }
    }
    async updatePost({slug, title,  content, feature_img, status}){
        try {
            return await  this.databases.updateDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId, 
                slug,
                {
                    title,
                    content,
                    feature_img,
                    status,
                }
            );
        }catch(error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await ths.database.deleteDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,  
                slug,           
            )
            true
        } catch(error) {
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.database.geDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,  
                slug,           
            )
        } catch(error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')] ) {
        try {
            return await this.database.listDocuments(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,  
                queries
            )
        } catch(error) {
            console.log("Appwrite serive :: getPosts :: error", error)
            return false;
        }
    }

    async  uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId, 
                // config.appwriteFileId,  
                ID.unique(),
                file,
            )
        } catch(error) {
            console.log("Appwrite serive :: uploadFile :: error", error)
            return false;
        }
    }


    async  deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId, 
                // config.appwriteFileId,  
                fileId
            )
            return true
        } catch(error) {
            console.log("Appwrite serive :: deleteFile :: error", error)
            return false;
        }
    }

    async  getFilePreview(fileId) {
        try {
            await this.bucket.getFilePreview(
                config.appwriteBucketId, 
                fileId
            )
            return true
        } catch(error) {
            console.log("Appwrite serive :: getFilePreview :: error", error)
            return false;
        }
    }

}