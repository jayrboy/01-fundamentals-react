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
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExample = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem' }}
        />
        <button type="submit">submit form</button>
      </form>
      <button type="button" onClick={(e) => console.log('click me')}>
        click me
      </button>
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
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
