import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    displayName: '',
    email: '',
    accessToken: '',
    topic: '',
    level: '',
    score: 0,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            return {
                ...state,
                ...action.payload
            }

        },
        setSignOutState: (state) => {
            return {
                ...state,
                ...initialState
            }
        }
    }
});

export const { setActiveUser, setSignOutState } = userSlice.actions;
export default userSlice.reducer