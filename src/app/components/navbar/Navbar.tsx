import './navbar.css'
import Image from 'next/image';
import menuImg from './assets/Icon.png'
import optionImg from './assets/optionImg.png'
import userImg from './assets/userImg.png'
import searchImg from './assets/searchImg.png'
import notifiImg from './assets/notificationImg.png'
import enterImg from './assets/enterImg.png'
import closeImg from './assets/closeimg.png'
import dotImg from './assets/dotImg.png'
function Navbar() {
    return (
        <div className="container">
            <div className='icon'>
                <Image src={menuImg} alt='no' />
            </div>
            <div className='logoName'>
                Constructor
            </div>
            <div className='navlinks'>
                <p className='navlink'>Dasboard</p>
                <p className='navlink'>About Us</p>
                <p className='navlink'>News</p>
                <p className='navlink'>User Policy</p>
                <p className='navlink'>Contacts</p>
                <Image width={30} height={30} alt='no image' src={optionImg} />
            </div>
            <div className='searchbar'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={searchImg} width={30} height={30} alt='no' />
                    <p className='searchplace'>Search Products, Orders and Clients</p>
                </div>

                <Image src={enterImg} width={30} height={30} alt='no' />

            </div>

            <div className='icon smallScreenUser'>
                <Image src={userImg} alt='no' />
            </div>

            <div className='userInfo'>

                <Image src={userImg} width={30} height={30} alt='no' />

                <div className='username'>Clayton Santos</div>
                <div className='dotImageDiv'>
                    <div className='icon' style={{ position: 'absolute' }}>
                        <Image src={notifiImg} alt='no' />
                    </div>
                    <Image src={dotImg} alt='no' className='dotImage' />

                </div>
                <div className='icon'>
                    <Image src={closeImg} alt='no' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;