import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/91F6NVlGGjL._AC_UY218_.jpg"
    alt="Trust (Pulitzer Prize Winner)"
  />
)
const Title = () => <h2>Trust (Pulitzer Prize Winner)</h2>
const Author = () => {
  return <h4>Hernan Diaz </h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
