"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationDot,
  faBook,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"
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
    <main className="py-5">
      <section id="search" className="container w-1/2 mx-auto mb-12">
        <input
          type="text"
          placeholder="Search Github User"
          className="rounded-full px-5 py-2.5 w-full"
          onKeyDown={onSearch}
          onFocus={(e) => (e.target.placeholder = "Type and press enter...")}
          onBlur={(e) => (e.target.placeholder = "Search Github User")}
        />
      </section>
      <UserList query={query}></UserList>
      <section id="back-to-top" className="container w-1/2 mx-auto text-center">
        <Link href="#search" className="underline">
          End of The Line - Back to Top
        </Link>
      </section>
    </main>
  )
}
