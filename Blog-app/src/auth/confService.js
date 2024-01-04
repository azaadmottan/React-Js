import { Client, ID, Databases, Storage, Query } from 'appwrite';
import config from '../config/config';


export class ConfService {

    client = new Client();
    databases;
    bucket;

    constructor() {

        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    // create-post handler

    async createPost({title, slug, content, featuredImage, status, userId}) {

        try {

            return await this.databases.createDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            ) 
        } catch (error) {

            console.log(`\n✕ Error: Appwrite error while create post.\nError: ${error}`);
        }
    }

    // update-post handler

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } 
        catch (error) {

            console.log(`\n✕ Error: Appwrite error while update post.\nError: ${error}`);
        }
    }

    // delete-post handler

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
            return true;
        } 
        catch (error) {

            console.log(`\n✕ Error: Appwrite error while delete post.\nError: ${error}`);

            return false;
        }
    }

    // get-single post

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
        } 
        catch (error) {

            console.log(`\n✕ Error: Appwrite error while get post.\nError: ${error}`);

            return false
        }
    }

    // get-all posts

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                queries,
            )
        } 
        catch (error) {

            console.log(`\n✕ Error: Appwrite error while fetch all posts.\nError: ${error}`);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            )
        } 
        catch (error) {

            console.log(`\n✕ Error: Appwrite error while upload file.\nError: ${error}`);

            return false
        }
    }

    // delete file

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appWriteBucketId,
                fileId
            )
            return true
        } 
        catch (error) {

            console.log(`\n✕ Error: Appwrite error while delete file.\nError: ${error}`);
            return false
        }
    }

    // file preview

    getFilePreview(fileId){

        return this.bucket.getFilePreview(

            config.appWriteBucketId,
            fileId
        )
    }
}

const confService = new ConfService();

export default confService;