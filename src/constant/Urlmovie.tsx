const IMAGE_URL = "https://image.tmdb.org/t/p/w220_and_h330_face/";
const IMAGE_ORIGINAL_SIZE = "https://image.tmdb.org/t/p/original/";
const IMAGE_BACKGROUD_DETAIL =
  "https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces";
const IMAGE_YOUTUBE = (key: string) => {
  return `https://i.ytimg.com/vi/${key}/hqdefault.jpg`;
};
export {
  IMAGE_URL,
  IMAGE_ORIGINAL_SIZE,
  IMAGE_BACKGROUD_DETAIL,
  IMAGE_YOUTUBE,
};
