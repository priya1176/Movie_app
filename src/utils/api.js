import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTI1YjViNmE5MDAxZWVmMWUyNmMyMzcyOWViNmFiOCIsInN1YiI6IjY1MmI5N2M3MWYzZTYwMDBlMjkwNWFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xVFEfRlhptpZp_TblcAGjkTxHvRGEERhNBGBavUqbAY";

const headers ={
    Authorization:"bearer " + TMDB_TOKEN,

};

export const fetchDataFromApi = async(url, params) =>{
    try{
      const{data} =await axios.get(BASE_URL + url, {
        headers,
        params,
      });
      return data;
    }catch(err){
        console.log(err);
        return err;
    }
}
