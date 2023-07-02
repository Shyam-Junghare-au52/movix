import axios from "axios";

const BASE_URL ="https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTNkN2U3OTkyNWVjZjk4MmNlNmNiZjYwM2ViYzk1MiIsInN1YiI6IjY0OTYzMjgxYjM0NDA5MDBhZDUxZGM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IQnDB99Kt4BMxSuZykaQ8TEs5BTdkzB8r6Yb_ukKTpo";


const headers = {
    Authorization : "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) =>{
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        });
        return data;

    }catch(err){
        console.log(err);
        return err;

    }

}