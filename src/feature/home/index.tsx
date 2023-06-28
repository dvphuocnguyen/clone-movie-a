import Footer from "~/components/Footer/Footer";
import Nav from "~/components/Header";
import Fillter from "./components/Fillter";
import ListMovies from "./components/ListMovie";

function Container() {
  return (
    <>
      <Nav />
      <div className="flex justify-center mt-[64px]">
        <div className="flex items-start align-start px-[40px] py-[30px]">
          <Fillter />
          <div className=" pt-[53px] xl:w-[1052px] lg:w-[676px]">
            <ListMovies />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Container;
