import ICharacter from './ICharacter.interface';

export default interface ICharacterState {
  [x: string]: any;
  readonly character?: ICharacter,
  readonly characters: ICharacter[],
  readonly isFetching: Boolean,
}
