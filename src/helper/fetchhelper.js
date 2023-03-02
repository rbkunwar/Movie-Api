import axios from 'axios';

export const fetchMovies =async (str) => {
//     fetch( "http://www.omdbapi.com/?i=tt3896198&apikey=2f3277b6"
// ).then((res) => res.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error))

const {data} = await axios.get("http://www.omdbapi.com?apikey=2f3277b6&t=" + str)
return data;
}