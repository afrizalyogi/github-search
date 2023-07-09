"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function ChangeTheme() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="hidden sm:flex justify-center">
      {theme === "light" ? (
        <button
          className="bg-blue-background hover:bg-blue-secondary w-full sm:w-16 rounded-full mb-2 sm:mb-0 sm:me-2 border-white-secondary border-2 p-2 sm:p-4"
          onClick={() => setTheme("dark")}
        >
          {" "}
          <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
        </button>
      ) : (
        <button
          className="bg-white-primary w-full sm:w-16 rounded-full mb-2 sm:mb-0 sm:me-2 border-black-secondary border-2 p-2 sm:p-4 hover:bg-white-secondary"
          onClick={() => setTheme("light")}
        >
          <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
        </button>
      )}
    </div>
  )
}

export function ChangeThemeSM() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex sm:hidden justify-center">
      {theme === "light" ? (
        <button
          className=" bg-blue-background hover:bg-blue-secondary w-1/2 sm:w-16 rounded-full mb-4 sm:mb-0 sm:me-2 border-white-secondary border-2 p-2 sm:p-4"
          onClick={() => setTheme("dark")}
        >
          {" "}
          <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
        </button>
      ) : (
        <button
          className="bg-white-primary w-1/2 sm:w-16 rounded-full mb-4 sm:mb-0 sm:me-2 border-black-secondary border-2 p-2 sm:p-4 hover:bg-white-secondary"
          onClick={() => setTheme("light")}
        >
          <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
        </button>
      )}
    </div>
  )
}
