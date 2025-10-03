import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [get, setget] = useState([]);

    const fetchBooks = async () => {
        try {
            const res = await axios.get('https://mern-booksky-backend.onrender.com');
            setget(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handledelete = async (id) => {
        try {
            await axios.delete(`https://mern-booksky-backend.onrender.com/${id}`);
            setget(get.filter(f => f._id !== id)); // use f.id if using 'id' instead
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {get.length !== 0 ? (
                get.map((s) => (
                    <div className='rbox' key={s._id}>
                        <h2 className='rtitle'>{s.title}</h2>
                        <h5 className='rauthor'>{s.author}</h5>
                        <p className='rdescription'>{s.description}</p>
                        <button onClick={() => handledelete(s._id)} className='resbtn'>
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
