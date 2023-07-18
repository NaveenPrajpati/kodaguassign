import './navbar.css'
import menuImg from './assets/Icon.png'
import optionImg from './assets/optionImg.png'
import Image from 'next/image';
function Navbar() {
    return (
        <div className="container">
            <div className='icon'>
            <Image src={menuImg} alt='no'/> 
            </div>
            <div className='logo'>
                Constructor
            </div>
            <div className='navlinks'>
                <p className='navlink'>Dasboard</p>
                <p className='navlink'>About Us</p>
                <p className='navlink'>News</p>
                <p className='navlink'>User Policy</p>
                <p className='navlink'>Contacts</p>
                <Image width={30} height={30} alt='no image' src={optionImg}/>
            </div>
            <div className='searchbar'>

            </div>

            <div className='userInfo'>
            <div className='icon'>
            <Image src={menuImg} alt='no'/> 
            </div>
                <div>Clayton Santos</div>
            <div className='icon'>
            <Image src={menuImg} alt='no'/> 
            </div>
            <div className='icon'>
            <Image src={menuImg} alt='no'/> 
            </div>
            </div>
        </div>
    );
}

export default Navbar;