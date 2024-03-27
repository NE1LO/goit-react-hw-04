import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import toast, { Toaster } from "react-hot-toast";
import { ProgressBar } from "react-loader-spinner";
import getPhotos from "../js/getApi";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        setLoader(true);
        if (query.trim() == "") {
          return;
        }
        const photosData = await getPhotos({ query, page });
        if (photosData.data.results.length === 0) {
          toast.error("ми не знайшли нічого по запиту " + query);
        }
        setGallery((prevGallery) => [
          ...prevGallery,
          ...photosData.data.results,
        ]);
      } catch (error) {
        toast.error("Oops, bad reguest");
      } finally {
        setLoader(false);
      }
    };
    fetchPhoto();
  }, [query, page]);

  const onSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    console.log(page);
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <ImageGallery gallery={gallery} />
      {loader && (
        <ProgressBar
          visible={true}
          height="80"
          width="80"
          color="#646cff"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {gallery.length > 0 && !loader && <LoadMoreBtn onLoadMore={onLoadMore} />}

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
