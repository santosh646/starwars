import React from 'react';
import { mount } from 'enzyme';

import ICharacter from '../../redux/state/ICharacter.interface';
import GetCharactersSearchMock from '../../data/GetCharactersSearchMock';
import Character from './Character';

describe('Character', () => {
  const characters: ICharacter[] = GetCharactersSearchMock;
  const wrapper = mount(<Character characters={characters} />);

  describe('renders', () => {
    it('table', () => {
      const character = wrapper.find('Character')
      expect(character).toBeDefined();
    });
  });
});
