"use client"
import { Fragment } from "react"
import { useEffect, useState } from "react"
import VideogameService from "../services/VideogameService";
import { Link } from "react-router-dom";


export default function Table() {
  const [videogames, setVideogames] = useState([]);

  useEffect(() => {
    listVideogames();
  }, [])

  const deleteVideogame = (id) => {
    VideogameService.deleteVideogame(id).then((response) => {
      listVideogames();
    })
  }
  const listVideogames = () => {
    VideogameService.getAllVideogames().then(response => {
      setVideogames(response.data);
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }

  return (

    <div className="overflow-x-auto w-full">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Title
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Genre
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Price
            </th>
            <th className="whitespace-nowrap font-medium text-violet-900 px-4 py-2"> Actions </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 min-w-full text-center	">
          {videogames.map(videogame => (
            <tr key={videogame.id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {videogame.title}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{videogame.genre}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">${videogame.price}</td>
              <td className="whitespace-nowrap px-4 py-2">
                <Link to={`/edit-videogame/${videogame.id}`}>
                  <button
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-4"
                  >
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => deleteVideogame(videogame.id)}
                  href="#"
                  className="inline-block rounded bg-gray-800 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Delete
                </button>

              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}
