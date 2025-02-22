import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"

interface Profile {
    login: string,
    name: string,
    avatar_url: string
}

interface ProfileState{
    isLoading: boolean,
    data: Profile | null,
    error: string | null
}

export const fetchProfile = createAsyncThunk<Profile, string>('profile/fetchProfile', async(username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`)
    if(!response.ok){
        throw new Error('Erro ao buscar perfil')
    }
    return response.json()
})

const profileSlice = createSlice ({
    name: 'profile',
    initialState: {
        isLoading: false,
        data: null,
        error: null
    } as ProfileState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProfile.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false
            state.data = action.payload
            state.error = null
        })
        .addCase(fetchProfile.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message || 'Erro desconhecido'
          })
    },
})

export default profileSlice.reducer