import React from 'react'
import Asset from './Asset'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Pagination from './Pagination'
import {useSelector} from 'react-redux';


function Home() {

const { items } = useSelector((store)  => store.favorite);

 const asset = items.map(e=>{
    return <Asset name = {e.name}
            rank = {e.rank}
            ticker = {e.ticker}
            price = {e.price}
            change = {e.change}
            m_cap = {e.m_cap}
            m_capShort = {e.m_capShort}
            volume={e.volume}
            volumeShort={e.volumeShort} 
            key={e.id}
            id={e.id}
            img={e.image}
            isFavorite={e.isFavorite}
    />
   })
  
  return (
    <div>
        

       
         <Container fluid>
         
            <div>
              <hr/>
                      <div className='flex flex-row menu'>
                        <div className='mr-4 md:mr-8'></div>
                        <div className='mr-4 md:mr-8'>Rank</div>
                        <div className='basis-1/5'>Name</div>
                        <div className='basis-1/5'>Price</div>
                        <div className='basis-1/5'>Change</div>
                        <div className='basis-1/5'>Market Cap</div>
                        <div className='basis-1/5'>Volume</div>

                  </div>
                    </div>
         </Container>
         
        
       {asset}
       <hr/>
       <div className='pagination-align'>
       <Pagination />

       </div>

        
    </div>
  )
}

export default Home