import { createSlice } from "@reduxjs/toolkit";
import { wallpapers } from "../../assets";

export const lockScreenSlice = createSlice({
  name: "lockScreen",
  initialState: {
    wallpaper: wallpapers[2],
    isLocked: true,
    validPIN: "000000",
  },
  reducers: {
    /**
     * Set the wallpaper
     * @param {*} state automatically generated
     * @param {require} action import image
     */
    setLockScreenWallpaper: (state, action) => {
      state.wallpaper = action.payload;
    },
    /**
     * Set the isLocked state
     * @param {*} state automatically generated
     * @param {boolean} action true or false
     */
    setDesktopIsLocked: (state, action) => {
      state.isLocked = action.payload;
    },
  },
});

export const { setLockScreenWallpaper, setDesktopIsLocked } =
  lockScreenSlice.actions;

export default lockScreenSlice.reducer;
