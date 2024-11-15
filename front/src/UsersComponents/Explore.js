import React, { useContext, useState } from 'react';
import { BookContext } from './BookContext';
import toast, { Toaster } from 'react-hot-toast';
import '../App.css';
import { Modal, Button } from 'react-bootstrap';
import { BookList } from '../AdminComponents/Book'; // Import BookList directly

const Exploresection = () => {
  const [removebook, setremovebook] = useState(BookList); // Initialize with the imported book list
  const [searchtext, setsearchtext] = useState('');
  const [selectbook, setselectbook] = useState(null);
  const [takedate, settakedate] = useState('');
  const [returndate, setreturndate] = useState('');
  const [showmodal, setshowmodal] = useState(false);
  const { takingbook } = useContext(BookContext);
  const { userId } = useContext(BookContext);

  const handlesearchtext = event => {
    setsearchtext(event.target.value);
  };

  const filterbooks = removebook.filter((book) =>
    book.name.toLowerCase().includes(searchtext.trim().toLowerCase())
  );

  const handletakebook = (event) => {
    setselectbook(event);
    setshowmodal(true);
  };

  const handleclose = () => {
    setshowmodal(false);
    setselectbook(null);
    settakedate('');
    setreturndate('');
  };

  const handlesubmit = () => {
    if (selectbook && takedate && returndate) {
      const bookWithUserId = { ...selectbook, userId: userId };
      takingbook(bookWithUserId, takedate, returndate);
      toast.success(`You have taken the book: ${selectbook.name}`);
      handleclose();
      setremovebook((prev) => prev.filter((remove) => remove.name !== selectbook.name));
    } else {
      toast.error('Please fill in both dates');
    }
  };

  return (
    <div>
      <Toaster />
      <input type='search' placeholder='Search Book' value={searchtext} onChange={handlesearchtext} />

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterbooks.map((book, index) => (
            <tr key={index}>
              <td><img src={book.image} alt={book.name} /></td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>
                <Button className='primary' onClick={() => handletakebook(book)}>Take</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showmodal} onHide={handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectbook?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <label htmlFor='takeDate'>Take Date:</label>
            <input
              id='takeDate'
              type='date'
              className='form-control'
              value={takedate}
              onChange={(e) => settakedate(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='returnDate'>Return Date:</label>
            <input
              id='returnDate'
              type='date'
              className='form-control'
              value={returndate}
              onChange={(e) => setreturndate(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handlesubmit}>Submit</Button>
          <Button variant='secondary' onClick={handleclose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Exploresection;
