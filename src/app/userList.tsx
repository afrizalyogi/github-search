"use client"
import useSWR from "swr"
import UserData from "./userData"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface UserListProps {
  query: string
}
interface UserDataProps {
  login: string
}

export default function UserList({ query }: UserListProps) {
  const { data: dataList, error } = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  )

  const isLoading = !dataList && !error

  console.log(dataList)

  return (
    <section id="user-list" className="container w-1/2 mx-auto mb-10">
      {isLoading && <div className="text-center">Loading...</div>}
      {dataList &&
        dataList.items &&
        dataList.items.map((user: any, index: number) => (
          <UserData key={index} login={user.login} />
        ))}
    </section>
  )
}
