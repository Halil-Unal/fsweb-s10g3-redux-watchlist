
import { LİSTEME_EKLE,DELETE_MOVIE } from "./action";
const initialState = {
    liste: []
    
  };
export function memur(state = initialState, action) {
    if (action.type ===  LİSTEME_EKLE ) {
      return {
        ...state,
        liste: [...state.liste, action.payload]
      };
    }
    if (action.type ===  DELETE_MOVIE) {
        return {
          ...state,
          liste: state.liste.filter(item => (item.id !== action.payload))
        };
      }
    return state;
  }