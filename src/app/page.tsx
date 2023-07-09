"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Link from "next/link"
import UserList from "./userList"

export default function Home() {
  const [query, setQuery] = useState("")

  const onSearch = (input: any) => {
    if (input.keyCode === 13) {
      input.preventDefault()
      const query = input.currentTarget.value
      setQuery(query)
    }
  }

  return (
    <main className="py-14">
      <section id="search" className="w-full fixed top-0 left-0 right-0">
        <div className="container w-4/5 md:w-1/2 py-5 mx-auto">
          <input
            type="text"
            placeholder="Search Github User"
            className="rounded-full px-5 py-2.5 w-full"
            onKeyDown={onSearch}
            onFocus={(e) => (e.target.placeholder = "Type and press enter...")}
            onBlur={(e) => (e.target.placeholder = "Search Github User")}
          />
        </div>
      </section>
      <UserList query={query}></UserList>
      <footer className="w-full py-5 fixed bottom-0 left-0 right-0">
        <div className="text-center mx-auto">
          {" "}
          <FontAwesomeIcon icon={faCode} className="mx-2" />
          with
          <FontAwesomeIcon icon={faHeart} className="mx-2" />
          <Link
            href="https://afrizalyogi.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            by <b>Afrizal Yogi</b>
          </Link>
        </div>
      </footer>
    </main>
  )
}
