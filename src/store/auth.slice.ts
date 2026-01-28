import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "@/constants";
type AuthState = {
    accessToken: string|null;
    isAuthenticated?: boolean;
};

const initialState: AuthState = 
{
    // kiểm tea xem có token trong localstorage để xác định trạng thái đăng nhập
    isAuthenticated: !!localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN),
    //lấy tooken từ localstorage khi khởi tạ state
    accessToken: localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN),
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCredentials: (state, action:PayloadAction<string>) => {
            state.accessToken = action.payload
            state.isAuthenticated = true;
            localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, action.payload);
        },
        logout: (state) => {
            state.accessToken = null;
            state.isAuthenticated = false;
            localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        }
    }
});

export const {setCredentials, logout} = authSlice.actions;
export const authReducer = authSlice.reducer;