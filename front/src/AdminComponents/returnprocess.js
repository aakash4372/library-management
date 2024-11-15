import React, { useContext } from 'react';
import { BookContext } from '../UsersComponents/BookContext';
import {Button} from 'react-bootstrap'


const Returnprocessadmin = () => { 
    const { returnQueue, confirmReturn } = useContext(BookContext);

    return (
        <div>
            {returnQueue.length > 0 ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Take Date</th>
                                <th>Return Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {returnQueue.map((book, index) => (
                                <tr key={index}>
                                    <td>{book.name}</td>
                                    <td>{book.checkindate}</td>
                                    <td>{book.checkoutdate}</td>
                                    <td>
                                        <Button onClick={() => confirmReturn(book)}>OK</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <button onClick={clearReturnQueue}>Clear All Records</button> */}
                </div>
            ) : (
                <div>No books pending for return.</div>
            )}
        </div>
    );
};

export default Returnprocessadmin;
