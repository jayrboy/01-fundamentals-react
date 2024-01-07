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
  const someValue = 'shakeAndBake'
  const displayValue = () => {
    console.log(someValue)
  }
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, displayValue } = props
  // console.log(props)

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>display title</button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
