import axios from "axios";
const randomAvatarGenerator = async() => {
    const options = {
        method: 'GET',
        url: 'https://any-anime.p.rapidapi.com/v1/anime/png/1',
        headers: {
          'X-RapidAPI-Key': '9c05b36cedmshbe94fc64e30520bp11cad0jsnb668f945830c',
          'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
        }
      };
      
    try {
        const response = await axios.request(options);
	    console.log(response.data);
    } catch (error) {
        console.log(error)
    }
}
export default randomAvatarGenerator