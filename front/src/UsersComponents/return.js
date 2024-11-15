// import React, { useContext, useState } from 'react';
// import { BookContext } from '../UsersComponents/BookContext';

// const Returnusers = () => {
//     const { userId } = useContext(BookContext);
//     const [userRecord, setUserRecord] = useState(
//         JSON.parse(localStorage.getItem(`userrecord_${userId}`)) || []
//     );

//     // Function to clear all return book records
//     const clearRecords = () => {
//         localStorage.removeItem(`userrecord_${userId}`);
//         setUserRecord([]);  // Update the state to reflect the cleared records
//     };

//     return (
//         <div>
//             {userRecord.length > 0 ? (
//                 <div>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Book Name</th>
//                                 <th>Take Date</th>
//                                 <th>Return Date</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {userRecord.map((book, index) => (
//                                 <tr key={index}>
//                                     <td>{book.name}</td>
//                                     <td>{book.checkindate}</td>
//                                     <td>{book.checkoutdate}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     <button onClick={clearRecords}>Clear All Records</button>
//                 </div>
//             ) : (
//                 <div>No returned books available.</div>
//             )}
//         </div>
//     );
// };

// export default Returnusers;

import React, { useContext } from 'react';
import { BookContext } from '../UsersComponents/BookContext';

const Returnusers = () => {
    const { userId } = useContext(BookContext);
    const userRecord = JSON.parse(localStorage.getItem(`userrecord_${userId}`)) || [];

    return (
        <div>
            {userRecord.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Take Date</th>
                            <th>Return Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userRecord.map((book, index) => (
                            <tr key={index}>
                                <td>{book.name}</td>
                                <td>{book.checkindate}</td>
                                <td>{book.checkoutdate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No returned books available.</div>
            )}
        </div>
    );
};

export default Returnusers;
