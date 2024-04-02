import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  try {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const itemsSnapshot = await getDocs(itemsCollection);
    const itemList = itemsSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return itemList;
  } catch (error) {
    console.error("Error getting items: ", error);
  }
  console.log(itemList);
}

export async function addItem(userId, item) {
  try {
    const itemsCollection = collection(db, `users/${userId}/items`);
    await addDoc(itemsCollection, item);
  } catch (error) {
    console.error("Error adding item: ", error);
  }
}

// Add the deleteItem function
// This async function will delete an item to a specific user's list of items in Firestore
// It takes the userId and the id of the item to delete
// It uses the userId to reference to items subcollection of a document in the users collection
// and then deletes the item with the given id
// It uses the deleteDoc function from the firestore package
// export async function deleteItem(userId, id) {
//   try {
//     const itemsCollection = collection(db, `users/${userId}/items`);
//     await deleteDoc(doc(itemsCollection, id));
//   } catch (error) {
//     console.error("Error deleting item: ", error);
//   }
// }

// Path: app/week-10/shopping-list/item-list.js
