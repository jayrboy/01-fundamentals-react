import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Alan Alickovic',
    title: 'React Application Architecture for Production',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Carl Rippon ',
    title: 'Learn React with TypeScript',
    img: './images/book-2.jpg',
    id: 2,
  },
]

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, getBook, id } = props
  // console.log(props);
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <button onClick={getSingleBook}>click me</button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
