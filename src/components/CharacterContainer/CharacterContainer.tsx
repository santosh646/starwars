import React from 'react';
import { connect } from 'react-redux';

import IAppState from '../../redux/state/ICharacterState.interface';
import ICharacter from '../../redux/state/ICharacter.interface';

import {
  setCharacterActionCreator,
  getCharactersStartActionCreator,
  searchCharactersActionCreator
} from '../../redux/actions/CharacterActionCreators';

import Character from '../Character/Character';
import CharacterSearch from '../CharacterSearch/CharacterSearch';
import Loader from '../Loader/Loader';

import './CharacterContainer.css'

interface IProps {
  searchCharacters: Function,
  character: any,
  characters: ICharacter[],
  isFetching: Boolean
}

// Note: This is mainly done to enable testing
export const CharacterContainer: React.FunctionComponent<IProps> = ({
  searchCharacters,
  characters,
  isFetching
}) => {

  return (
    <div className="characters-container">
    <div className="characters-header">STAR WARS HEROES</div>
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <CharacterSearch searchCharacters={searchCharacters} />
    { isFetching
      ? <Loader></Loader>
      : (
        <div className="row">
        <div className="col-sm">
          {characters
            ? <Character characters={characters} />
            : <div>no character</div>}
        </div>
      </div>
      )
    }
    </div>
  </div>
  );
}

// Make data available on props
const mapStateToProps = (store: IAppState) => {
  return {
    character: store.characterState.character,
    characters: store.characterState.characters,
    isFetching: store.characterState.isFetching,
  };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
  return {
    getCharacters: () => dispatch(getCharactersStartActionCreator()),
    setCharacter: (character: any) => dispatch(setCharacterActionCreator(character)),
    searchCharacters: (term: string) => dispatch(searchCharactersActionCreator(term)),
  }
}

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);
