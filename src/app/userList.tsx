"use client"
import useSWR from "swr"
import UserData from "./userData"
import Link from "next/link"

interface UserListProps {
  query: string
}

export default function UserList({ query }: UserListProps) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data: dataList, error } = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  )

  const isLoading = !dataList && !error
  console.log(dataList)

  return (
    <section
      id="user-list"
      className="container w-4/5 md:w-1/2 pt-14 mx-auto mb-10"
    >
      {dataList === undefined ||
        (dataList.message == "Validation Failed" && (
          <div className="container text-center h-screen flex items-center">
            <div className="h-1/2">
              <h1 className="sm:text-2xl xl:text-3xl font-bold mb-3">
                Discover and Expand Your GitHub Network!
              </h1>
              <p className="font-thin text-sm sm:text-base">
                Welcome to our platform designed to help you find and connect
                with fellow GitHub users. Whether you're a developer, a
                collaborator, or simply interested in exploring the vibrant
                GitHub community, we've got you covered. Start your journey by
                discovering talented individuals, exploring their projects, and
                expanding your professional network.
              </p>
            </div>
          </div>
        ))}
      {isLoading && <div className="text-center">Loading...</div>}
      {dataList &&
        dataList.items &&
        dataList.items.map((user: any, index: number) => (
          <UserData key={index} login={user.login} />
        ))}
      {dataList !== undefined && dataList.message != "Validation Failed" && (
        <section
          id="back-to-top"
          className="container w-4/5 md:w-1/2 pb-12 mx-auto text-center"
        >
          <Link href="#search" className="underline text-sm">
            End of The Line - Back to Top
          </Link>
        </section>
      )}
    </section>
  )
}
