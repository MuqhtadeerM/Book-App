import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  bookIds: string[];
}

const initialState: WishlistState = {
  bookIds: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.bookIds = state.bookIds.includes(id)
        ? state.bookIds.filter((bookId) => bookId !== id)
        : [...state.bookIds, id];
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
