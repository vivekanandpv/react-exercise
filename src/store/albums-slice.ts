import { createSlice } from '@reduxjs/toolkit';

export interface Album {
    userId: number;
    id: number;
    title: string;
}

export interface AlbumAction {
    type: string;
    payload: Album[]
}

export const albumsSlice = createSlice({
  name: 'albums',
  initialState: [] as Album[],
  reducers: {
    loadAlbums: (state, action: AlbumAction) => {
      state = action.payload;
      return state;
    },
  },
});