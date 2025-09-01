import { useState } from 'react';

const defaultData = {
    title: "",
    author: ""
}
function BookShelf() {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState(defaultData)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        const newBooks = { ...newBook, [name]: value }
        setNewBook(newBooks)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (newBook.title.trim() && newBook.author.trim()) {
            setBooks([...books, newBook]);
            setNewBook(defaultData); // Reset form
        }


    }

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Title:
                            <input
                                type="text"
                                name="title"
                                value={newBook.title}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Author:
                            <input
                                type="text"
                                name="author"
                                value={newBook.author}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <button type="submit">Add Book</button>
                    </form>
                </div>

                <div className="bookCardsDiv">
                    {books.map((book, index) => (
                        <div key={index} className="bookCard">
                            <h4>{book.title}</h4>
                            <p>by {book.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}





export default BookShelf