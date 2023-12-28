declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            MONGO_URL: string;
            CRYPT_HASH: string;
        }
    }
}

export {}