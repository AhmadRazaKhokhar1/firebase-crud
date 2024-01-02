import React, { useEffect, useState } from "react";
import { db } from "../FireBase/Firebase.config";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  doc,
  getDocs,
} from "firebase/firestore";

export default function GetBooks() {
  const [booksData, setBooksData] = useState([]);
  //get all
  async function getCollection() {
    try {
      const booksCollection = collection(db, "books");
      const data = await getDocs(booksCollection);

      setBooksData(data.docs);
      console.log(
        booksData.map((e) => {
          return { data: e.data(), id: e.id };
        })
      );
    } catch (error) {
      console.log(
        `There was an error fetching the data in firestore: ${error}`
      );
    }
  }
  //delete
   const deleteDocument = async (id)=>{
      const booksCollection = collection(db, 'books');
      const docRef = doc(booksCollection, id)
      await deleteDoc(docRef)
    }
    // const updateDocument = async (id)=>{
    //   const booksCollection = collection(db, 'books');
    //   await updateDoc(booksCollection, id)
    // }

  useEffect(() => {
    getCollection();
  }, [booksData]);
  return (
    <div>
      {booksData.map((e) => {
        return (
          <>
            <br />
            <div key={e.id} className="documentFetched">
              <div className="bookName">{e.data().bookName}</div>
              <div className="price">
                {e.data().price} &nbsp; {e.data().currency}
              </div>
              <div className="btnContainer">
                <button className="deleteDoc" onClick={()=>{deleteDocument(e.id)}}>Delete</button>
                <button className="updateDoc" >Update</button>
              </div>
            </div>
            <br />
          </>
        );
      })}
    </div>
  );
}
