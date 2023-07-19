import Image from 'next/image';
import styles from './profileSection.module.css'
import image1 from './assets/Icon (1).png'
import image2 from './assets/Icon (2).png'
import base from './assets/Base.png'
import line from './assets/Line.png'
import image from './assets/Image.png'
import dashboard from './assets/dashboard.png'
import check1 from './assets/playlist_add_check.png'
import check2 from './assets/playlist_add_check (2).png'
import build from './assets/build.png'
import cloud from './assets/cloud.png'
import email from './assets/email.png'
import event from './assets/event.png'
import group from './assets/group.png'
import mail from './assets/mail.png'
import reader from './assets/chrome_reader_mode.png'
import whatsup from './assets/ic_whatsapp.png'
import telegram from './assets/ic_telegram.png'
import phone from './assets/local_phone.png'


function ProfileSection() {
    return (
        <div className={styles.container}>
            <div className={styles.profileBox}>
<div className={styles.profileNav}>
    <Image alt='no' src={image1} style={{background:'white',borderRadius:'100%'}}/>
    <Image alt='no' src={image2} style={{background:'white',borderRadius:'100%'}}/>
</div>
<div className={styles.profilePic}>
<Image alt='no' src={base} style={{background:'white',borderRadius:'100%',position:'absolute'}}/>
<Image alt='no' src={line} style={{background:'white',borderRadius:'100%',position:'absolute'}}/>
<Image alt='no' src={image}  style={{background:'#FFCB33',left:12,top:12,borderRadius:'100%',position:'absolute'}}/>
<div style={{width:15,height:15,background:'#3361FF',position:'absolute',borderRadius:'100%',top:65,left:125}}>2</div>
</div>
<p className={styles.username}>Hello Alfred Bryant</p>
<p className={styles.userId}>adrain.nader@yahoo.com</p>

<div className={styles.gridMenu}>
    <div className={styles.gridItem}>
        <Image src={dashboard} alt='no'  className={styles.gridImage}/>
        <p className={styles.gridName}>Dashboard</p>
    </div>

    <div className={styles.gridItem}>
    <Image src={check1} alt='no' className={styles.gridImage} />
        <p className={styles.gridName} style={{color:'#3361FF'}}> Notes</p>
    </div>
    <div className={styles.gridItem}>
    <Image src={check2} alt='no' className={styles.gridImage}/>
        <p className={styles.gridName}>Tasks</p>
    </div>
    <div className={styles.gridItem}>
    <Image src={cloud} alt='no' className={styles.gridImage}/>
        <p className={styles.gridName}>Files</p>
    </div>
    <div className={styles.gridItem}>
    <Image src={email} alt='no' className={styles.gridImage}/>
        <p className={styles.gridName}>Emails</p>
    </div>
    <div className={styles.gridItem}>
    <Image src={group} alt='no' className={styles.gridImage}/>
        <p className={styles.gridName}>Clients</p>
    </div>
    <div className={styles.gridItem}>
    <Image src={event} alt='no' className={styles.gridImage}/>
        <p className={styles.gridName}>Calender</p>
    </div>
    <div className={styles.gridItem}>
    <Image src={build} alt='no' className={styles.gridImage}/>
        <p className={styles.gridName}>Setting</p>
    </div>

</div>

<div className={styles.bottomMenu}>
<Image src={phone} alt='no' />
<Image src={mail} alt='no' />
<Image src={reader} alt='no' />
<Image src={telegram} alt='no' />
<Image src={whatsup} alt='no' />

</div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default ProfileSection;