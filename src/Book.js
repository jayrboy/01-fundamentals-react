const Book = (props) => {
  const { img, title, author, getBook, id, number, price } = props
  // console.log(props);
  console.log(number)
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
      <h2>{price} บาท</h2>
      <br />
      <button onClick={getSingleBook}>click me</button>
    </article>
  )
}
export default Book
