export const exerciesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd1e5a45c41msh87c1ac95a55d5a5p1db986jsn26d08d2648ee',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
  

export const fetchData = async (url , options) =>{
    const response = await fetch(url , options);
    const data = await response.json();

    return data;
}