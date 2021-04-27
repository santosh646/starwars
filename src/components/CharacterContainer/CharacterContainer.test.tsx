import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Business domain imports

import GetCharactersMock from '../../data/GetCharactersMock';
import { CharacterContainer } from './CharacterContainer';
import ICharacter from '../../redux/state/ICharacter.interface';
import Loader from '../Loader/Loader';

// Extract to helper?
interface renderElementParameters {
  getCharacters: jest.Mock,
  searchCharacters: jest.Mock,
  setCharacter: jest.Mock,
  character: ICharacter,
  characters: ICharacter[],
  isFetching: Boolean,
}

const defaultProps:renderElementParameters  = {
  getCharacters: jest.fn(),
  setCharacter: jest.fn(),
  searchCharacters: jest.fn(),
  characters: [],
  character: [],
  isFetching: false,
}

const renderCharacterListContainer = (overrides: any): ShallowWrapper => {
  return shallow(
    <CharacterContainer
      {...defaultProps}
      {...overrides}
    />
  );
}



// Tests
describe('CharacterListContainer', () => {
  describe('when fetching', () => {
    const wrapper = renderCharacterListContainer({ isFetching: true });

    it('display "Loader"', () => {
      const element = <Loader />;

      expect(wrapper.contains(element)).toBe(true);
    });
  });

  describe('on initial render', () => {
    const characters: ICharacter[] = [];
    const getCharacters = jest.fn().mockResolvedValue(GetCharactersMock);
    const wrapper = renderCharacterListContainer({ characters, getCharacters });
    it('a character container', () => {
      expect(wrapper.find('div.characters-container')).toHaveLength(1);
    });
  });
});
