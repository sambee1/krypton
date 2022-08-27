import React from 'react'
import {Container, Row, Col, Navbar, Offcanvas, Nav,} from 'react-bootstrap'
import Logo from './Images/logo.png'
import * as Icon from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'
// import { useSelector } from 'react-redux';
// import Asset from './Asset';
import {ToastContainer, toast} from  'react-toastify';
import  'react-toastify/dist/ReactToastify.css';
// import axios  from 'axios'
import Search from './searchItems'
import {useDispatch} from 'react-redux';
import { getCoins } from '../Features/Favorites/favoritesSlice';



function Header() {
  const [searchQuery, setSearchQuery]  = React.useState('')
  const dispatch = useDispatch();
  // const [searchItems, setSearchItems] = React.useState([])
  // const {items} = useSelector((store) => store.favorite)


    function handleSearch(){
      document.querySelector('.overlay').classList.remove('hidden');
      
    }
    function closeSearch(){
      document.querySelector('.overlay').classList.add('hidden');
    }
    
    
    function handleChange(e){
      let  searchString = e.target.value.toLowerCase();
      setSearchQuery(searchString) 
    }
    
    function goToHome(){
      dispatch(getCoins({page:1}))
    }
  
      
    
    let searchResults  = Search.map((e)=>{
   if(e.name.toLowerCase().includes(searchQuery)|| e.symbol.toLowerCase().includes(searchQuery)){
      return <div>
        <div className='search-item'>
          {e.name}
        </div>
      </div>
  
    //   return <Asset name = {e.name}
  //   rank = {e.market_cap_rank}
  //   ticker = {e.ticker}
  //   price = {e.price}
  //   change = { e.change}
  //   m_cap = {e.m_cap}
  //   m_capShort = {e.m_capShort}
  //   volume={e.volume}
  //   volumeShort={e.volumeShort} 
  //   key={e.id}
  //   id={e.id}
  //   />
  } 

  // if(!e.name.toLowerCase().includes(searchQuery) && !e.symbol.toLowerCase().includes(searchQuery)){
  //     return 'No items match your search. Try another query'
  // }
  // if(!e.name.toLowerCase().includes(searchQuery)) return  'No items match your search. Try another query'
})

   
const toastifyDark = () => toast('Dark mode coming soon!')
const signInToast = () => toast('Coming soon!')

   return (

    <div>
                <header>
            <Container fluid className='header hidden-small'>
              <Row>
                <Col>
                <Link to= '/' >
                  <div className='logo' onClick={goToHome}>
                   <div className='logo-img'><img src={Logo} alt="logo"/></div>
                </div>
                </Link>
                
                </Col>
                <Col className='mt-3'><Link to= '/'>Cryptocurrencies</Link></Col>
                <Col className='mt-3'><Link to= '/favorites'>Favorites</Link></Col>
                <Col className='mt-3'><Link to= '/portfolio'>Portfolio</Link></Col>
                <Col className='mt-3'>                  
                      <input placeholder= 'Search' className='search-bar' onClick={handleSearch} onChange={handleChange}/>
                </Col>
                <Col className='flex mt-3'><Link to= '/'>
                  <button className='sign-in' onClick={signInToast}><ToastContainer/>Sign-in</button></Link>
                  
                  <div className='dark-mode ml-8' onClick={toastifyDark}><ToastContainer/>
                  <div className='dark-mode-ellipse'></div>
                </div>
                </Col>
                
                
              </Row>
            </Container>
        
   <>   
<Container fluid className='hidden-big'>

  {['md',].map((expand) => (
    <Navbar key={expand}  expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
            <Link to= '/' > 
              <div className='logo' onClick={goToHome}>
                <div className='logo-img'><img src={Logo} alt="logo"/></div>
              </div>
        </Link>
        </Navbar.Brand>
        
          <div className='search-icon  hidden-big' onClick={handleSearch} onChange={handleChange}><Icon.Search></Icon.Search></div>
        <input className='search hidden hidden-big' placeholder='Search'></input>
        <div className='dark-mode hidden-big'>
                        <div className='dark-mode-ellipse'onClick={toastifyDark}><ToastContainer/></div>
                    </div>
        
        
        
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <Link to= '/' >
                <div className='logo' onClick={goToHome}>
                   <div className='logo-img'><img src={Logo} alt="logo"/></div>
                </div>
            </Link>
            </Offcanvas.Title>
           
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className=" justify-content-center flex-grow-1 pe-3">
              {/* <Nav.Link><Link to= '/'>Cryptocurrencies</Link></Nav.Link>
              <Nav.Link><Link to= '/favorites'>Favorites</Link></Nav.Link>
              <Nav.Link><Link to= '/'>Portfolio</Link></Nav.Link>
              <Nav.Link><input className='search-bar hidden-small' placeholder='Search'/></Nav.Link>
              <Nav.Link><Link to= '/'>
                  <button className='sign-in'>Sign-in</button></Link></Nav.Link> */}
              <Link to= '/' className='pb-3'>Cryptocurrencies</Link>
              <Link to= '/favorites' className='pb-3'>Favorites</Link>
              <Link to= '/portfolio' className='pb-3'>Portfolio</Link>
              {/* <input className='search-bar hidden-small' placeholder='Search'/> */}
              <Link to= '/sign'>
                  <button className='sign-in' onClick={signInToast}><ToastContainer/>Sign-in</button>
              </Link>

            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</Container>
</>
        


        
        
       
            
            
            
            
        </header>
        
        {/* Overlay carrying search  items */}
        <div className='overlay hidden'>         
            <Container fluid>
              <Row>
                {/* <Col>
                  <div className='logo'>
                   <div className='logo-img'><img src={Logo} alt="logo"/></div>
                   <div className='logo-title'><Link to= '/'></Link></div>
                  </div>
                </Col> */}
                <Col className='search'>
                    <div className='flex'>
                        <input type ='search' placeholder= 'Search' className='search-bar' onChange={handleChange}/>
                        {/* <span  className='clear-search' onClick={clearSearch}><Icon.XCircle></Icon.XCircle></span> */}

                    </div>
                {/* <button onClick={clearSearch}>Clear</button> */}
                
                </Col>
                <Col>
                  <div className='close-btn' onClick={closeSearch}>
                    <Icon.X></Icon.X>
                  </div>
                </Col>
              </Row>
            </Container>
            
            
            
            

          
          <div className='search-results'>
              {searchQuery === '' ? 'Enter a search string'  : searchResults}
          </div>
          
        </div>
    </div>
  )
}

export default Header