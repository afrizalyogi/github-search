"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Link from "next/link"
import UserList from "./userList"
import { ThemeProvider } from "next-themes"
import ChangeTheme, { ChangeThemeSM } from "./changeTheme"

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
    <ThemeProvider attribute="class">
      <main
        className="py-14 bg-white-primary dark:bg-blue-background
    color-black dark:color-white-primary"
      >
        <section
          id="search"
          className="w-full fixed top-0 left-0 right-0
      bg-white-primary dark:bg-blue-background inline-flex justify-center"
        >
          <div className="container w-4/5 md:w-1/2 py-5 mx-auto sm:inline-flex">
            <ChangeTheme></ChangeTheme>
            <input
              type="text"
              placeholder="Search Github User"
              className="rounded-full px-5 py-2.5 w-full text-sm text-center focus:text-left
            bg-white-primary dark:bg-blue-background
            border-2 border-black-secondary hover:border-black-primary focus:border-black-primary  dark:border-white-secondary dark:hover:border-white dark:focus:border-white
            color-black-secondary focus:color-black dark:color-white-secondary dark:focus:color-white
            placeholder:text-black-secondary hover:placeholder:text-black dark:placeholder:text-white-secondary hover:placeholder:text-white"
              onKeyDown={onSearch}
              onFocus={(e) =>
                (e.target.placeholder = "Type and press enter...")
              }
              onBlur={(e) => (e.target.placeholder = "Search Github User")}
            />
            <button className="hidden sm:block bg-white-primary dark:bg-blue-background w-full sm:w-16 rounded-full mt-2 sm:mt-0 sm:ms-2 border-black-secondary dark:border-white-secondary border-2 p-2 sm:p-4 hover:bg-white-secondary dark:hover:bg-blue-secondary">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
          </div>
        </section>
        <UserList query={query}></UserList>

        <footer
          className="w-full py-5 fixed bottom-0 left-0 right-0
      bg-white-primary dark:bg-blue-background"
        >
          <div className="text-center mx-auto">
            <ChangeThemeSM></ChangeThemeSM>
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
    </ThemeProvider>
  )
}
