import { Reducer } from 'redux';
import {
  MockActionTypes,
  MockActions,
} from '../actions/Mockaction';

// Define the Character type
// โครงสร้าง Json
export interface Mock {
  name: string;
  username: string;
  email:string;
  address:any
  phone:string;
  website:string;
  companu:any;
}

// Define the Character State
// สร้างตัวแปรที่เก็บ obj ที่เป็นโครงสร้างของ json โดยกำหนดให้เรียกใช้ได้อย่างเดียว *ถ้าจะแก้ไขต้องแก้ผ่าน redux เข้ามา
export interface MockState {
  readonly mock: Mock[];
}

// Define the initial state
// สร้างตัวแปร state เพื่อใช้ในการเปลี่ยนแปลง
const initialMockState: MockState = {
    mock: [],
};

// function เช็ค action ที่เข้ามา รับ ตัวแปร State , และ Action
export const mockReducer: Reducer<MockState, MockActions> = (
  state = initialMockState,
  action
) => {
  switch (action.type) {
    case MockActionTypes.GET_ALL: {
      return {
        ...state,
        mock: action.mock,
      };
    }
    default:
      return state;
  }
};