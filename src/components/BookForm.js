import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';


const BookForm = () => {

  const [newBook, setNewBook] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const ref = collection(db, 'books');

    await addDoc(ref,  {title: newBook});

    setNewBook(''); // make the input fiels empty
  }
   return (
    <form onSubmit={handleSubmit}>
      <label>
      <span>Add a new book title: </span>
      <input 
        required
        type='text'
        onChange={(e) => setNewBook(e.target.value)}
        value={newBook}
      />
      </label>
      <button>Add</button>
    </form>
  )
}

export default BookForm
