import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
    try {
        const url = `${BACKEND_ENDPOINT}/albums/top`;
        const response = await axios.get(url);
        return response.data;
    }
    catch (e) {
        console.error(e);
    }
}

export const fetchNewAlbums = async () => {
    try {
        const url = `${BACKEND_ENDPOINT}/albums/new`;
        const response = await axios.get(url);
        return response.data;
    }
    catch (e) {
        console.error(e);
    }
}

export const fetchSongs = async () => {
    try {
        const url = `${BACKEND_ENDPOINT}/songs`;
        const response = await axios.get(url);
        return response.data;
    }
    catch (e) {
        console.error(e);
    }
}

export const fetchFilters = async () => {
    try {
        const url = `${BACKEND_ENDPOINT}/genres`;
        const response = await axios.get(url);
        return response.data;
    }
    catch (e) {
        console.error(e);
    }
}