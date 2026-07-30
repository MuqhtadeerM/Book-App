import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  sidebarOpen: boolean;
  searchOpen: boolean;
}

const initialState: UIState = {
  sidebarOpen: false,
  searchOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },

    setSidebar(state, action: PayloadAction<boolean>) {
      state.sidebarOpen = action.payload;
    },

    toggleSearch(state) {
      state.searchOpen = !state.searchOpen;
    },

    setSearch(state, action: PayloadAction<boolean>) {
      state.searchOpen = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebar, toggleSearch, setSearch } =
  uiSlice.actions;

export default uiSlice.reducer;
