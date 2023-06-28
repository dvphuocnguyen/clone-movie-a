import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "~/feature/home";
import MovieDetail from "~/feature/movie-detail";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Container />} />
        <Route path="/" element={<Container />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;
