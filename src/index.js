import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Alan Alickovic',
    title: 'React Application Architecture for Production',
    img: './images/book-1.jpg',
  },
  {
    author: 'Carl Rippon ',
    title: 'Learn React with TypeScript',
    img: './images/book-2.jpg',
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book)
        const { img, title, author } = book
        return <Book img={img} author={book.author} title={book.title} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { author, title, img } = props

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
