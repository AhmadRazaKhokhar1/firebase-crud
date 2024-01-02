import React from 'react'

export default function UpdateBook({id, bookName, price, currency, setDocument, setBookName, setPrice, setCurrency, display}) {
   
  return (
    <div style={display}>
      <form className="updateForm" onSubmit={(e)=> {e.preventDefault(); setDocument(id)}} >
                    <label htmlFor="book name">Update Book Name</label>
                    <input
                      type="text"
                      name="book name"
                      placeholder="Enter Book Name"
                      onChange={(e) =>setBookName(e.target.value)}
                      value={bookName}
                    />
                    <label htmlFor="price">Update Price</label>
                    <input
                      type="text"
                      name="price"
                      placeholder="Enter Price"
                      value={price}
                      onChange={(e) =>setPrice(e.target.value)}
                    />
                    <label htmlFor="currency">Update Currency</label>
                    <input
                      type="text"
                      placeholder="USD, GBP, etc,."
                      value={currency}
                      onChange={(e) =>setCurrency(e.target.value)}
                    />
  
                    <input type="submit" value="Update Book" />
                  </form>
    </div>
  )
}
