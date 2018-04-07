import createBoard from '../helpers/createBoard';

//define the initial state
const initialState = {
  board: []
}

export default function boardCreation(state = initialState, action) {
  switch(action.type){
    case 'EASY_BOARD':
      let easy = Object.assign({}, state)
      easy.board = createBoard(10);
      return easy;
    default:
      return state;
  }
}