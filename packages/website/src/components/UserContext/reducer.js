import { CHANGE_PALETTE_MODE, CHANGE_PREFERRED_MODE } from "./constants";

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_PALETTE_MODE:
      return {
        ...state,
        paletteMode: action.payload.paletteMode,
      };
    case CHANGE_PREFERRED_MODE:
      return {
        ...state,
        preferredMode: action.payload.preferredMode,
      };
  }
}

export default reducer;
