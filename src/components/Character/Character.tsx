import * as React from 'react';

import ICharacter from '../../redux/state/ICharacter.interface';

import './Character.css'

interface IProps {
  characters: ICharacter[];
}

const Character: React.FunctionComponent<IProps> = ({ characters}: IProps) => (
  <div>
  {characters && characters.map(character => (
    <div className="border-solid" key={character.name}>
    <table className="table">
      <thead className="thead-light">
         <tr>
          <th scope="col" id='characterName'>{character.name}</th>
          <th scope="col"></th>
        </tr>
        </thead>
    <tbody>
      <tr>
          <td>Gender</td>
          <td>{character.gender}</td>
        </tr>
        <tr>
          <td>Birtd Year</td>
          <td>{character.birth_year}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{character.height}</td>
        </tr>
        <tr>
          <td>Mass</td>
          <td>{character.mass}</td>
        </tr>
        <tr>
          <td>Hair Color</td>
          <td>{character.hair_color}</td>
        </tr>
      </tbody>
    </table>
    </div>
      ))}
      </div>
   
   
)

export default Character;
