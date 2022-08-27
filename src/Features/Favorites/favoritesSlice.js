import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


function getNumber (labelValue) {
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

}

let assetArray = [];

const initialState = {
    items:assetArray,
    favArray : [],
    newArray : [],
    isLoading:  false,
}



export const getCoins = createAsyncThunk('favorites/getCoins', async({page}, thunkAPI) => {
   
    try{
        const resp = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=24h`)
            return resp.data
    } catch (error){
        return thunkAPI.rejectWithValue('something went wrong')
    }
} )

const favoriteSlice =  createSlice({
    name: 'favorite',
    initialState,
    reducers:{
        // reducer to clear the favorites array
        clearFavorites: (state) => {
           /* clear session storage and reload page*/
            sessionStorage.clear();
           window.location.reload()
        },
       toggleFavorite: (state, {payload}) =>{
        /* onclick, find the element and invert the isFavorite*/
        const assetFind = state.items.find((element) =>
            element.id === payload
            )
            if(!assetFind) {
                state.newArray = state.newArray.filter((item) => (item.id !== payload.id))
            sessionStorage.removeItem('favorite')
            sessionStorage.setItem('favorite', JSON.stringify(state.newArray))
            }
            assetFind.isFavorite = !assetFind.isFavorite
            
        // push to the favorites array if selected as favorites
       if(assetFind.isFavorite === true){
        state.favArray = [...state.favArray,  assetFind.id]
        sessionStorage.removeItem('items') 
        sessionStorage.setItem('items', JSON.stringify(state.favArray))


       }
        // filter through the array and remove the asset selected
       if(assetFind.isFavorite === false){
        state.favArray=state.favArray.filter((item) => item !== assetFind.id)
        sessionStorage.removeItem('items')
        sessionStorage.setItem('items', JSON.stringify(state.favArray))

       }

       },
       addToArray: (state, {payload}) =>{
        if(state.favArray.includes(payload.id)){
            state.newArray = [...state.newArray, payload]
            sessionStorage.removeItem('favorite')
            sessionStorage.setItem('favorite', JSON.stringify(state.newArray))

        }else{
            state.newArray = state.newArray.filter((item) => (item.id !== payload.id))
            sessionStorage.removeItem('favorite')
            sessionStorage.setItem('favorite', JSON.stringify(state.newArray))
        }
        

        
    },
       
},
    extraReducers:{
    [getCoins.pending] : (state) => {
        state.isLoading = true;
    },
    [getCoins.fulfilled]: (state, action)=>{
        state.isLoading = false;
       
        state.items  = action.payload.map((e) => {


            const ticker = e.symbol.toUpperCase()
            const  change = e.price_change_percentage_24h ? e.price_change_percentage_24h.toFixed(1) : null
            const price = e.current_price.toLocaleString()
            const volume = e.total_volume.toLocaleString()
            const m_cap = e.market_cap.toLocaleString()
            const volumeShort = getNumber(e.total_volume) 
            const m_capShort =  getNumber(e.market_cap)
            
           
            const obj = {id:e.id, name:e.name, rank: e.market_cap_rank, img:e.image, ticker:ticker, change:change, price:price, volume:volume, m_cap:m_cap, volumeShort:volumeShort, m_capShort:m_capShort, isFavorite:false}
                return assetArray =  {...obj}       
  
        })
        /* onLoad, get favorites from the storage and set isFavorite to true*/
        let sessionElement = JSON.parse(sessionStorage.getItem('items'))
            sessionElement && sessionElement.map((e) => {
            state.items.map((item) => {
                if(item.id === e) item.isFavorite = true
            })
          })

    },
    [getCoins.rejected] :(state, action) => {
        state.isLoading = false;
    }
    }
})

export const {clearFavorites, toggleFavorite, addToArray} = favoriteSlice.actions;
export default favoriteSlice.reducer; 