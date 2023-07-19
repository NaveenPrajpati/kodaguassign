import styles from './leftNavbar.module.css'
import Image from 'next/image';
import image1 from './assets/Icon (1).png'
import image2 from './assets/Icon (2).png'
import image3 from './assets/Icon (3).png'
import image4 from './assets/Icon (4).png'
import image5 from './assets/Icon (5).png'
import image6 from './assets/Icon (6).png'
import image7 from './assets/Icon (7).png'
import img1 from './assets/Image.png'
import img2 from './assets/Image (1).png'
import img3 from './assets/Image (2).png'
import img4 from './assets/Image (3).png'

function LeftNavbar() {
    return (
        <div className={styles.container}>
           
           <div className={styles.firstset}>
           <div className='icon'>
            <Image src={image1} alt='no'/> 
            </div>
           <div className='icon'>
            <Image src={image2} alt='no'/> 
            </div>
           <div className='icon'>
            <Image src={image3} alt='no'/> 
            </div>
           <div className='icon'>
            <Image src={image4} alt='no'/> 
            </div>
           <div className='icon'>
            <Image src={image5} alt='no'/> 
            </div>
           <div className='icon'>
            <Image src={image6} alt='no'/> 
            </div>
           </div>
           <div className={styles.secondset}>
           
            <Image src={img1} alt='no' style={{background:'#FF6633',borderRadius:'100%'}}/> 
           <Image src={img2} alt='no' style={{background:'#E62E7B',borderRadius:'100%'}}/> 
           <Image src={img3} alt='no' style={{background:'#8833FF',borderRadius:'100%'}}/> 
           <Image src={img4} alt='no' style={{background:'#FFCB33',borderRadius:'100%'}}/> 
           <div className='icon'>
            <Image src={image7} alt='no'/> 
            </div>

           </div>
        </div>
    );
}

export default LeftNavbar;