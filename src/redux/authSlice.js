import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const initialState = {
    token: null,
    userId: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            try {
                const decoded = jwtDecode(action.payload);
                state.userId = decoded.id;  // Assuming `id` is in the token payload
                state.isAuthenticated = true;
            } catch (error) {
                console.error('Failed to decode JWT token:', error);
                state.userId = null;
                state.isAuthenticated = false;
            }
        },
        logout: (state) => {
            state.token = null;
            state.userId = null;
            state.isAuthenticated = false;
        }
    },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
