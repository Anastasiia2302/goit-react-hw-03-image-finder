import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import {
  SearchBar,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';
import 'react-toastify/dist/ReactToastify.css';


export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
  };

  handleSearch = elem => {
    this.setState({ query: elem.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      return toast.error('Please enter a search something');
    }
    onSubmit(query);
  };
  render() {
    const { handleSearch, handleSubmit } = this;
    const { query } = this.state;

    return (
      <SearchBar>
        <SearchForm onSubmit={handleSubmit}>
          <SearchButton type='submit'>
          <AiOutlineSearch size="2rem" />
          </SearchButton>
          <SearchInput
               value={query}
               onChange={handleSearch}
               type="text"
               autocomplete="off"
          
               placeholder="Search images and photos">
            
          </SearchInput>
        </SearchForm>
        <ToastContainer autoClose={false} draggable={false} />
      </SearchBar>
    );
  }
}
