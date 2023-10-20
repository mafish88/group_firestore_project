import { connectionString } from "../creds.js";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
    credential: cert(connectionString)
})

const db = getFirestore()

export default db