const conf = {
  appwriteUrl: String(import.meta.env.VITE_BLOGWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_BLOGWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_BLOGWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_BLOGWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_BLOGWRITE_BUCKET_ID),
};

export default conf;
