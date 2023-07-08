import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationDot,
  faBook,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

interface UserDataProps {
  login: string
}

export default function UserData({ login }: UserDataProps) {
  const [dataDetail, setDataDetail] = useState({
    avatar_url: "",
    name: "",
    login: "",
    bio: "",
    location: "",
    public_repos: 0,
    followers: 0,
  })

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then((data) => {
        setDataDetail(data)
      })
  }, [])

  console.log(dataDetail)
  return (
    <div className="user-card">
      <div className="grid grid-flow-col gap-6">
        <div>
          <img
            src={dataDetail.avatar_url}
            alt={dataDetail.name}
            className="w-24 rounded-full"
          />
        </div>
        <div>
          <div className="inline-flex mb-2.5 items-center">
            <h2 className="full-name font-bold text-2xl me-4">
              {dataDetail.name}
            </h2>
            <h4 className="font-thin text-xl">{dataDetail.login}</h4>
          </div>
          <div className="mb-5">
            <p className="text-sm w-3/4">{dataDetail.bio}</p>
          </div>
          <div className="inline-flex text-sm">
            {dataDetail.location && (
              <div className="col-auto inline-flex items-center me-6">
                <FontAwesomeIcon icon={faLocationDot} className="w-3 me-2" />
                <p className="font-thin">{dataDetail.location}</p>
              </div>
            )}
            <div className="col-auto inline-flex items-center me-6">
              <FontAwesomeIcon icon={faBook} className="w-3 me-2" />
              <p className="font-thin">{dataDetail.public_repos}</p>
            </div>
            <div className="col-auto inline-flex items-center me-6">
              <FontAwesomeIcon icon={faUserGroup} className="w-3 me-2" />
              <p className="font-thin">{dataDetail.followers}</p>
            </div>
          </div>
        </div>
        <div>
          <button className="btn-explore rounded-xl">Explore</button>
        </div>
      </div>
    </div>
  )
}
