import React, { useState } from "react";
import { dataBase } from "../FireBase/Firebase.config";
import { db } from "../FireBase/Firebase.config";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
export default function AddBook() {
  const [bookName, setBookName] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("");
  

  async function addBook(e) {
    e.preventDefault();
    
    try {
        const booksCollection = collection(db, "books");
        const bookData = {bookName, price, currency}
      const querySnapshot = await addDoc(booksCollection, bookData);
      console.log(querySnapshot)
    } catch (error) {
      console.log(`There was an error in adding book: ${error}`);
    }
  }
  return (
    <div>
      <form onSubmit={addBook} className="addBookForm">
        <label htmlFor="book name">Book Name</label>
        <input
          type="text"
          name="book name"
          placeholder="Enter Book Name"
          onChange={(e) => setBookName(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          placeholder="Enter Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="currency">Currency</label>
        <input
          type="text"
          placeholder="USD, GBP, etc,."
          onChange={(e) => setCurrency(e.target.value)}
        />

        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
}
