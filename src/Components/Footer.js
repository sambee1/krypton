import React from 'react'
import {Container} from 'react-bootstrap'
import Logo from './Images/logo-dark.png'

function Footer() {
  return (
    <div>
        <Container fluid className='bg-black'>
        <footer>

        <section className='footer '>
            <div className='footer-one md:flex md:flex-row'>
                <div className='basis-1/3 mb-5 ml-5 mr-10'>
                <div className='logo'>
                   <div className='logo-img'><img src={Logo} alt="logo"/></div>
                </div>
                   <p className='mt-3'>Krypton produces an insight to the Cryptocurrency market by providing instant market info
                    and analysis. It tracks price, volume, market-cap of various Cryptocurrencies. Additionally it tracks
                    social metrics and on-chain metrics of cryptocurrencies.
                   </p>
          
                    
                </div>

                <div className='basis-2/3 ml-5'>
                <div className='  flex flex-row'>
                    <div className='contact basis-1/3'>
                        <p className='head'>COMPANY</p>
                        <div className='footer-info'>
                        <p>About</p>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Disclaimer</p>
                        <p>Careers</p>
                        </div>
                    </div>
                    <div className='contact basis-1/3'>
                        <p className='head'>CONTACT</p>
                        <div className='footer-info'>
                        <p>FAQ</p>
                        <p>Press</p>
                        <p>Affiliates</p>
                        </div>
                    </div>
                    <div className='contact basis-1/3'>
                        <p className='head'>COMMUNITY</p>
                        <div className='footer-info'>
                        <p>Twitter</p>
                        <p>Telegram</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Discord</p>
                        </div>
                        
                    </div>
                </div>
                <div className='mt-7'>
                    <div className='footer-text  mr-4 md:mr-0'>
                    © 2022 CryptoSense - All right reserved.
                    </div>
                    
                   

                </div>
            </div>
            </div>

        </section>
        </footer>
        </Container>
    </div>
  )
}

export default Footer