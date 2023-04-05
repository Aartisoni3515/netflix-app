const key = "fa4bde866f904277f66b89f51d9aacf4";

const request = {
  requestVideos:`https://api.themoviedb.org/3/movie/297762/videos?api_key=fa4bde866f904277f66b89f51d9aacf4`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=fa4bde866f904277f66b89f51d9aacf4&append_to_response=videos`,
  requestTopRated: `https://api.themoviedb.org/3/trending/all/day?api_key=fa4bde866f904277f66b89f51d9aacf4}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=fa4bde866f904277f66b89f51d9aacf4&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/movie/now_playing?api_key=fa4bde866f904277f66b89f51d9aacf4&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/top_rated?api_key=fa4bde866f904277f66b89f51d9aacf4&language=en-US&page=1`,
};

export default request;
