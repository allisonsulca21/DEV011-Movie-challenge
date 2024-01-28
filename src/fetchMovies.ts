// export const getPopularMovies = () => {
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDIxYWYyZDJlM2ViNmU0ZGE3OTU0YzZlMGIwNzZiNyIsInN1YiI6IjY1YWRiY2E4NTI5NGU3MDBhZTIzNzQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wCGE56uJyn0PWq6YRp6KZBzGEwaMU9wpt4b62xXP_Xc'
//         }
//       };
      
//       return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//         .then(response => response.json())
//         // .then(response => console.log(response))
//         .catch(err => console.error(err));
// }

export const getMoviesPanel = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDIxYWYyZDJlM2ViNmU0ZGE3OTU0YzZlMGIwNzZiNyIsInN1YiI6IjY1YWRiY2E4NTI5NGU3MDBhZTIzNzQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wCGE56uJyn0PWq6YRp6KZBzGEwaMU9wpt4b62xXP_Xc'
    }
  };
  
  return fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    //.then(response => console.log(response))
    .catch(err => console.error(err));
}