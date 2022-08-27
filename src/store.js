import {configureStore} from '@reduxjs/toolkit'
import favoriteReducer from './Features/Favorites/favoritesSlice'

export const store =  configureStore({
    reducer:{
        favorite: favoriteReducer,
    },
})

