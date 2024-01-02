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
import UpdateBook from "./UpdateBook";

export default function GetBooks() {
  const [bookName, setBookName] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('');
  const [display, setDisplay] = useState({display:'none'})


  const [booksData, setBooksData] = useState([]);
  const[ selectedBook, setSelectedBook] = useState(null);
  //get all
  async function getCollection() {
    try {
      const booksCollection = collection(db, "books");
      const data = await getDocs(booksCollection);

      setBooksData(data.docs);
    } catch (error) {
      console.log(
        `There was an error fetching the data in firestore: ${error}`
      );
    }
  }
  //delete
  const deleteDocument = async (id) => {
    const booksCollection = collection(db, "books");
    const docRef = doc(booksCollection, id);
    await deleteDoc(docRef);
  };
  //update
  const updateDocument = async (id) => {
    try {
      const booksCollection = collection(db, "books");
      const singleBook = doc(booksCollection, id);
      const response = await getDoc(singleBook);
      const data = response.data();
      setSelectedBook({data:data, id:id})
      setDisplay({display:'block'})
    } catch (error) {
      console.log(`Error in updateDocument: ${error}`)
    }
  
  };
//update form
 const setDocument = async(id)=>{
    try {
      const booksCollection = collection(db, 'books');
      const bookRef = doc(booksCollection, id);
      
      const selectedBook = {
        bookName,
        price,
        currency
      }
     await updateDoc(bookRef, selectedBook);
     setDisplay({display:'none'})
    } catch (error) {
      console.log(`Error in setDocument: ${error}`)
    }
  }

  //refreshing state
  useEffect(() => {
    getCollection();
  }, [getCollection]);


  return (
    <div>
      {booksData.map((e) => {
        return (
          <div key={e.id}>
            <br />

              <div className="documentFetched">
                <div className="bookName">{e.data().bookName}</div>
                <div className="price">
                  {e.data().price} &nbsp; {e.data().currency}
                </div>
                <div className="btnContainer">
                  <button
                    className="deleteDoc"
                    onClick={() => {
                      deleteDocument(e.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="updateDoc"
                    onClick={() => {
                      updateDocument(e.id);
                    }}
                    onBlur={()=>setDisplay({display:'none'})}
                  >
                    Update
                  </button>
                </div>
              </div>

    
            <br />
          </div>
              );
              })}
              <div className="updateDiv">
                
                  {selectedBook && (
                    <UpdateBook
                    key={selectedBook?.id}
                    id={selectedBook?.id}
                    bookName={selectedBook?.bookName}
                    price={selectedBook?.price}
                    currency={selectedBook?.currency}
                    setDocument={setDocument}
                    setBookName={setBookName}
                    setPrice={setPrice}
                    setCurrency={setCurrency}
                    display={display}
                    setDisplay={setDisplay}
                    />
                    )}
                
                
              </div>
    </div>
  );
}
