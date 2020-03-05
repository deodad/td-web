import React from "react"
import Layout from "../components/layout"

const novels = [
  { title: "Middlesex", author: "Jeffery Eugenides" },
  { title: "East of Eden", author: "John Steinbeck" },
  { title: "Love in the Time of Cholera", author: "Gabriel Garcia Márquez" },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoyevsky" },
  { title: "Wolf Hunt", author: "Ivaylo Petrov" }
]

const books = [
  { title: "Antifragile", author: "Nassim Nicholas Taleb" },
  { title: "Things Hidden Since the Foundatoin of the World", author: "Rene Girard" },
  { title: "Walden", author: "Henry David Thoreau" },
  { title: "Beginning of Infinity", author: "David Duetsch" },
  { title: "Timeless Way of Building", author: "Christopher Alexander" }
]

const collections = [
  { title: "Against Everything", author: "Mark Grief" },
  { title: "Tenth of December", author: "George Saunders" },
  { title: "The Complete Essays", author: "Michel de Montaigne" },
  { title: "Letters from a Stoic", author: "Seneca" },
  { title: "Ficciones", author: "Jorge Luis Borges" }
]

export default () => 
  <Layout>
    <h1>Reading lists</h1>

    <p>
      I tend to like most things I read but these are some of my favorites.
    </p>

    <h3 className="mt-8">Novels</h3>
    <BookList books={novels} />

    <h3 className="mt-5">Non-Fiction</h3>
    <BookList books={books} />

    <h3 className="mt-5">Collections</h3>
    <BookList books={collections} />

    <div className="mt-8">
      Let me know if you have a suggestion for something I'd probably like.
    </div>
 </Layout>


const BookList = ({ books }) =>
  <ul>
    { books.map(({ title, author }, idx) =>
        <li key={idx}><span className="italic underline">{title}</span>, {author}</li>
      )
    }
  </ul>