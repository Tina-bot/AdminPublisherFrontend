import { useEffect, useState } from "react"
import VideogameService from "../services/VideogameService";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function EditVideogame() {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
    const id = useParams();

    const saveVideogame = (e) => {
        e.preventDefault();
        const videogame = {
            title,
            genre,
            price
        }
        VideogameService.updateVideogame(id, videogame).then((response) => {
            console.log(response.data)
            navigate("/videogames")
        }).catch(e => {
            console.log(e)
        })
    }


    useEffect(() => {
        VideogameService.getVideogameById(id).then((response => {
            setTitle(response.data.title)
            setGenre(response.data.genre)
            setPrice(response.data.price)
        })).catch(e => {
            console.log(e)
        })

    }, [])

    return (

        <div>
            <section className="p-6 text-gray-900">
                <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 ">
                    <h2 className="w-full text-3xl font-bold leadi">Edit Game </h2>
                    <div>
                        <label htmlFor="title" className="block mb-1 ml-1">Title</label>
                        <input id="title"
                            type="text"
                            required=""
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full p-2 rounded border border-violet-200  focus:outline-none focus:ring focus:ri focus:ri " />
                    </div>
                    <div>
                        <label htmlFor="genre" className="block mb-1 ml-1">Genre</label>
                        <input id="genre"
                            required=""
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            className="block w-full p-2 rounded border border-violet-200 focus:outline-none focus:ring focus:ri focus:ri " />
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-1 ml-1">Price</label>
                        <input id="price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="block w-full p-2 rounded border border-violet-200 focus:outline-none focus:ring focus:ri focus:ri "></input>
                    </div>
                    <div>
                        <Link to="/videogames">

                            <button type="submit"
                                onClick={(e) => saveVideogame(e)}
                                className="w-full px-4 py-2 text-white font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-indigo-700 focus:ri hover:ri ">
                                Send</button>
                        </Link>

                    </div>
                    <div>
                        <Link to="/videogames">

                            <button
                                className="w-full px-4 py-2 text-white font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-gray-900 focus:ri hover:ri ">
                                Cancel</button>
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    )

}