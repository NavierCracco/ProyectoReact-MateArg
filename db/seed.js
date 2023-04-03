import { addDoc, collection } from "firebase/firestore";
import db from "./firebase-config";
import productos from "../JSON/productos.json";

const itemsCollectionRef = collection(db,"items");

const promise = productos.map(producto => addDoc(itemsCollectionRef, producto));

Promise.all(promise).then(() => {
    console.log("done");
    process.exit(0);
})