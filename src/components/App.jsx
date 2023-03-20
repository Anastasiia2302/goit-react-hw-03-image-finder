import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fetchImg } from '../services/Api';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export default class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page, images } = this.state;

    if (search !== prevState.search || page !== prevState.page) {
      this.setState({ isLoading: true });
      fetchImg(search, page).then(response => {
        if (!response.hits.length) {
          toast.error(`This request ${search} is not found`);
          return;
        }
        this.setState({
          images: [...images, ...response.hits],
          totalHits: response.totalHits,
          isLoading: false,
        });
      });
    }
  }

  handleSearch = text => {
    this.setState({
      search: text,
      images: [],
      page: 1,
      totalHits: 0,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, totalHits, isLoading } = this.state;
    const { handleSearch, handleLoadMore } = this;

    return (
      <>
        <Searchbar onSubmit={handleSearch} />
        {isLoading && <Loader />}
        {images && <ImageGallery images={images} />}
        {totalHits > 12 && (
          <>
            <Button onLoadMore={handleLoadMore} />
            <ToastContainer />
          </>
        )}
      </>
    );
  }
}