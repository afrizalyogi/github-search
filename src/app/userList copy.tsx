"use client"
import useSWR from "swr"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationDot,
  faBook,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface UserListProps {
  query: string
}
interface UserDataProps {
  login: string
}

export default function UserList({ query }: UserListProps) {
  const { data, error } = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  )

  let loading = !data && !error

  return (
    <section id="user-list" className="container w-1/2 mx-auto mb-10">
      {loading && <div className="text-center">Loading...</div>}
      {data &&
        data.items &&
        data.items.map((user: any, index: number) => (
          <UserData key={index} login={user.login} />
        ))}
    </section>
  )
}

function UserData({ login }: UserDataProps) {
  const { data } = useSWR(`https://api.github.com/users/${login}`, fetcher)

  console.log(data)
  return (
    <div className="user-card">
      <div className="grid grid-flow-col gap-6">
        <div>
          <div>
            <img
              src={data.avatar_url}
              alt={data.login}
              className="w-24 rounded-full"
            />
          </div>
          <div>
            <div className="inline-flex mb-2.5 items-center">
              <h2 className="full-name font-bold text-2xl me-4">{data.name}</h2>
              <h4 className="font-thin text-xl">{data.login}</h4>
            </div>
            <div className="mb-5">
              <p className="text-sm w-3/4">{data.bio}</p>
            </div>
            <div className="inline-flex text-sm">
              {data.location && (
                <div className="col-auto inline-flex me-6">
                  <FontAwesomeIcon icon={faLocationDot} className="w-3 me-2" />
                  <p className="font-thin">{data.location}</p>
                </div>
              )}
              <div className="col-auto inline-flex me-6">
                <FontAwesomeIcon icon={faBook} className="w-3 me-2" />
                <p className="font-thin">{data.public_repos}</p>
              </div>
              <div className="col-auto inline-flex me-6">
                <FontAwesomeIcon icon={faUserGroup} className="w-3 me-2" />
                <p className="font-thin">{data.followers}</p>
              </div>
            </div>
          </div>
          <div>
            <button className="btn-explore rounded-xl">Explore</button>
          </div>
        </div>
      </div>
    </div>
  )
}
