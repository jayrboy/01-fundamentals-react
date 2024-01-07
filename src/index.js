import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src="./images/book-1.jpg" alt="Interesting Facts For Curious Minds" />
)
const Title = () => <h2>Trust (Pulitzer Prize Winner)</h2>
const Author = () => {
  const inlineHeadingStyle = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }
  return <h4 style={inlineHeadingStyle}>Hernan Diaz</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
