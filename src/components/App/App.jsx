import { useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import toast from 'react-hot-toast';
import './App.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const API_KEY = 'JyNgZqGkyp-nusF9kEkLmb9tATZhW2CiODfKDVoF8Og';
  const API_URL = 'https://api.unsplash.com/search/photos';

  const fetchImages = async (searchQuery, currentPage = 1) => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: {
          query: searchQuery,
          page: currentPage,
          per_page: 12,
        },
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      });
      const fetchedImages = response.data.results;
      setImages(prev =>
        currentPage === 1 ? fetchedImages : [...prev, ...fetchedImages]
      );
      setError(null); // Сброс ошибки, если запрос успешен
    } catch (err) {
      setError('Failed to fetch images. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedFetchImages = debounce((searchQuery, page) => {
    fetchImages(searchQuery, page);
  }, 300);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(null);
    toast.success(`Searching for "${newQuery}"`);
    debouncedFetchImages(newQuery, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const openModal = image => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <header>
        <SearchBar onSubmit={handleSearchSubmit} />
      </header>
      <section>
        {query && error && <ErrorMessage message={error} />}
        <ImageGallery images={images} onImageClick={openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && hasMore && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </section>
      {isModalOpen && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
}

export default App;