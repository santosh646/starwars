import React, { useState } from 'react';
import './CharacterSearch.css'
// Create interface for Props
interface IProps {
  searchCharacters: Function,
}

const CharacterSearch: React.FunctionComponent<IProps> = ({ searchCharacters }: IProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeHandler = (event: React.ChangeEvent) => {
    const input = (event.target as HTMLInputElement).value;
    setSearchTerm(input);
  }

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    searchCharacters(searchTerm);
  }

  return (
    <div className="character-search">
    Character Name
    <form
      className="form-inline"
      onSubmit={onSubmitHandler}>
      <input
        className="form-control mr-sm-2 character-search-input"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={onChangeHandler} />
      <button
        className="btn-primary"
        type="submit"
      >Search</button>
    </form>
    </div>
  );
};

export default CharacterSearch;
