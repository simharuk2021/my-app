'use client';
import {useState, useEffect} from "react";
import Link from "next/link";
import LoadingPage from "../loading";
import AddBook from './AddBook';

async function getBooks() {
    const res = await fetch("http://localhost:3000/api/books");
    const json = await res.json();
    return json
}

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

const fetchBooks = async () =>{
    const res = await fetch ("/api/books");
    const books = await res.json();
    setBooks(books);
    setLoading(false);
}

    useEffect(() => {
        fetchBooks();
    },[]);
    if (loading){return <LoadingPage/>}
    const handleSubmit = async(e)=> {
        e.preventDefault();
        // console.log(query)
        setLoading(true);
        const res = await fetch(`/api/books/search?query=${query}`);
        const books = await res.json();
        setBooks(books);
        setLoading(false);
    }
    const deleteBook = async(id) => {
        const res = await fetch(`api/books/${id}`,
            {
                method:'DELETE'
            });
            fetchBooks();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Search Books"
                value={query}
                onChange={(e) => setQuery(e.target.value)} className ="input-bordered w-full max-w-xs"/>
                <button type ="submit" className="btn btn-primary">Search</button>
            </form>
            <AddBook refreshBooks={fetchBooks}/>
            {books.map((book) => (
                <div key={book.id}>
                    <div class="flex flex-wrap justify-center mt-10">
                    <div class="flex items-center mb-3">
                    <div className="card w-96 bg-base-100 shadow-xl" >
                        <figure>
                            <img src={book.img} width="200" height="150"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            <p>{book.title}</p>
                            </h2>
                            <div className="card-actions justify-end">
                                <Link href={book.link} className="btn btn-primary">See in Amazon
                                </Link>
                                <button onClick={() => deleteBook(book.id)} 
                                className="btn btn-error">Delete</button>
                            </div>
                        </div>

                    </div>
                    <br />
                </div>
                </div>
                </div>
))}
                
        </div>
    )
}

export default Books;