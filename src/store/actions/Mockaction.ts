//Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Character Typing
import { Mock, MockState } from '../reducers/mockReducer';

// Create Action Constants
// อนาคต สร้าง Action CRUD
export enum MockActionTypes {
  GET_ALL = 'GET_ALL',
}

// Interface for Get All Action Type
// อนาคต สร้าง Action CRUD
export interface MockGetAllAction {
  type: MockActionTypes.GET_ALL;
  mock: Mock[];
}

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
// ส่ง type get all
export type MockActions = MockGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
// function getAllCharacters 
export const getAllMock: ActionCreator<
  ThunkAction<Promise<any>, MockState, null, MockGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({
        mock: response.data,
        type: MockActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};