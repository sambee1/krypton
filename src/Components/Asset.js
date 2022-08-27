import React from 'react'
import './style.css'
import * as Icon from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container'
import {useDispatch,} from 'react-redux'
import {toggleFavorite, addToArray} from '../Features/Favorites/favoritesSlice'


function Asset(props) {
    const dispatch = useDispatch();
    // const {items, newArray} = useSelector((store)  => store.favorite);
    // const [isFavorite, setIsFavorite] = React.useState(false)

    
    // console.log(props.favorite);
    // if(props.favorite){
    //     console.log(props.id);

    // }

    function handleFavorite(){
        // changes the isFavorite state so as to change the color of the favorites-icon
        
        // setIsFavorite(prevFavorite=>!prevFavorite);
        // dispatches the icon from the state. Responsible for adding and removing favorite items to the favArray
        dispatch(toggleFavorite(props.id))  
        // sessionStorage.setItem('items', favArray)
        
        dispatch(addToArray({...props, isFavorite:true}))

    }
    
    
    const styles = {color: props.change > 0 ? 'green' : 'red'}   
    const favoriteStyle = {
        color : props.isFavorite ? '#E6CE81' : 'black' }
    
    




return (
    <div>
        <Container fluid>
    <hr/>
       <div className='flex flex-row asset'>
            <div className='mr-4 md:mr-10' style={favoriteStyle} 
            onClick={handleFavorite}
            >
                 {props.isFavorite ? <Icon.StarFill></Icon.StarFill> : <Icon.Star></Icon.Star>}
                
                
                </div>
            <div className='mr-4 md:mr-10'>{props.rank}</div>
            <div className='basis-1/5 flex'>
                <div className='asset-img'>
                    {/* <img src={props.img} alt={props.id}/> */}
                </div>
                <div className=' md:hidden'>{props.ticker}</div>
                <div className=' hidden md:block'>{props.name}<span className='asset-ticker'> {props.ticker}</span></div>
            </div>
            
            <div className='basis-1/5'>${props.price}</div>
            <div className='basis-1/5' style={styles}>
               {props.change &&  <div className='flex'>
               
                        <div className='caret'>{props.change > 0 ? <Icon.CaretUpFill></Icon.CaretUpFill> : <Icon.CaretDownFill></Icon.CaretDownFill>}</div>
                    <div>{props.change}%</div>
                   
                </div>}
                </div>
            <div className='basis-1/5 hidden  md:block'>${props.m_cap}</div>
            <div className='basis-1/5 md:hidden'>${props.m_capShort}</div>
            <div className='basis-1/5 hidden md:block'>${props.volume}</div>
            <div className='basis-1/5 md:hidden'>{props.volumeShort}</div>

       </div>
        </Container>
       
    </div>
  )
}

export default Asset