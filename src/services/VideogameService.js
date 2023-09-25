import axios from "axios";
const VIDEOGAME_BASE_URL = "http://localhost:8090/api/v1/videogames"

class VideogameService {

    getAllVideogames() {
        return axios.get(VIDEOGAME_BASE_URL);
    }

    createVideogame(videogame) {
        return axios.post(VIDEOGAME_BASE_URL, videogame);
    }

    getVideogameById(videogameId) {
        return axios.get(VIDEOGAME_BASE_URL + "/" + videogameId.id);
    }

    updateVideogame(videogameId, videogame) {
        return axios.put(VIDEOGAME_BASE_URL + "/" + videogameId.id, videogame);
    }

    deleteVideogame(videogameId) {
        return axios.delete(VIDEOGAME_BASE_URL + "/" + videogameId);
    }
}

export default new VideogameService();