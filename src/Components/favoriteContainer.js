import React from 'react'
import { useDispatch, } from 'react-redux';
import Container from 'react-bootstrap/Container'
import Asset from './Asset'
import { clearFavorites } from '../Features/Favorites/favoritesSlice';


function FavoriteContainer() {
    const dispatch = useDispatch()
    // const {favArray, newArray,} = useSelector((store) => store.favorite)
//   favArray and items property is accessed from the store. if favArray is less than one, it displays as below
    

let sessionFavorites = JSON.parse(sessionStorage.getItem('favorite'))




if(!sessionFavorites) return <div className='grid justify-content-center'><hr/><p>Your favorite's list is currently empty</p></div>
    

        
    return (
    <div>
        <div className='clear-btn-align'>
            <button className='clear-all-button' onClick={()=>dispatch(clearFavorites())}>Clear All</button>
        </div>
          <Container fluid>
            <div>
              <hr/>
                      <div className='flex flex-row menu'>
                        <div className='mr-4 md:mr-8 bg-info'></div>
                        <div className='mr-4 md:mr-8'>Rank</div>
                        <div className='basis-1/5'>Name</div>
                        <div className='basis-1/5'>Price</div>
                        <div className='basis-1/5'>Change</div>
                        <div className='basis-1/5'>Market Cap</div>
                        <div className='basis-1/5'>Volume</div>

                  </div>
                    </div>
         </Container>
         
         
        {sessionFavorites && sessionFavorites.map((e)=>{
            return <Asset name = {e.name}
            rank = {e.rank}
            ticker = {e.ticker}
            price = {e.price}
            change = { e.change}
            m_cap = {e.m_cap}
            m_capShort = {e.m_capShort}
            volume={e.volume}
            volumeShort={e.volumeShort} 
            isFavorite={e.isFavorite}            
            key={e.id}
            id={e.id}
            
            />
        })}
        
    </div>
  )
}

   
  


export default FavoriteContainer