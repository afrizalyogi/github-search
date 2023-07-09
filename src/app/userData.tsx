"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationDot,
  faBook,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Link from "next/link"

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

  return (
    <div
      className="rounded-3xl p-6 border-2 mb-6
      border-white-secondary hover:border-black-secondary dark:border-black-secondary dark:hover:border-white-secondary"
    >
      <div className="grid xl:grid-cols-6 gap-6">
        <div className="grid md:grid-cols-5 col-span-5 gap-6">
          <div className="md:col-span-1">
            <img
              src={dataDetail.avatar_url}
              alt={dataDetail.name}
              className="w-24 rounded-full mb-2.5"
            />
          </div>
          <div className="md:col-span-4">
            <div className="inline-flex mb-2.5 items-center">
              {dataDetail.name && (
                <h2 className="color-blue-primary font-bold xl:text-2xl me-4">
                  {dataDetail.name}
                </h2>
              )}
              <h4 className="font-light xl:text-xl">{dataDetail.login}</h4>
            </div>
            <div className="mb-6 md:mb-5">
              <p className="text-xs xl:text-sm xl:w-3/4">{dataDetail.bio}</p>
            </div>
            <div className="inline-flex text-xs xl:text-sm">
              {dataDetail.location && (
                <div className="col-auto inline-flex items-center me-6">
                  <FontAwesomeIcon icon={faLocationDot} className="w-3 me-2" />
                  <p className="font-light">{dataDetail.location}</p>
                </div>
              )}
              <div className="col-auto inline-flex items-center me-6">
                <FontAwesomeIcon icon={faBook} className="w-3 me-2" />
                <p className="font-light">{dataDetail.public_repos}</p>
              </div>
              <div className="col-auto inline-flex items-center me-6">
                <FontAwesomeIcon icon={faUserGroup} className="w-3 me-2" />
                <p className="font-light">{dataDetail.followers}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 xl:col-span-1 flex justify-end">
          <Link
            href={`https://github.com/${dataDetail.login}`}
            target="_blank"
            className="btn-explore w-full xl:w-28 justify-center flex items-center rounded-xl h-10
              text-xs border-2 border-white-secondary hover:border-black-secondary dark:border-black-secondary dark:hover:border-white-primary
              color-white-secondary hover:white-primary
              bg-blue-secondary hover:bg-blue-secondary-light"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  )
}
