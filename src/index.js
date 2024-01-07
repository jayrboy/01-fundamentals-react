import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const firstBook = {
  author: 'Alan Alickovic',
  title: 'React Application Architecture for Production',
  img: './images/book-1.jpg',
}

const secondBook = {
  author: 'Carl Rippon ',
  title: 'Learn React with TypeScript',
  img: './images/book-2.jpg',
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

const Book = ({ author, title, img }) => {
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
