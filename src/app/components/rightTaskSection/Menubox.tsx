import Image from 'next/image';
import styles from './taskSection.module.css'
import option from './assets/optionImg.png'
import list from './assets/list.png'
import attach from './assets/attachment.png'
import alaram from './assets/access_alarms.png'
import imgbig from './assets/Imagebig.png'
import imgbig2 from './assets/imgBig2.png'
import avtar from './assets/Avatar Image.png'
import avtar1 from './assets/Avatar Image (1).png'
import avtar2 from './assets/Avatar Image (2).png'
import avtar3 from './assets/Avatar Image (3).png'
import avtarb from './assets/avatarb.png'
import close from './assets/close.png'
import insertComment from './assets/insert_comment.png'
import flag from './assets/flag.png'
import dot from './assets/color-dot-4.png'
import right from './assets/chevron_right.png'
import cloud from './assets/cloud.png'
import link from './assets/link.png'
import arrowRight from './assets/subdirectory_arrow_right.png'

import PostHeader from './PostHeader';
import PostCard from './PostCard';
function Menubox() {
    return (
        < >
          <div className={styles.todoColumn}>
            {/* head */}
    <PostHeader name={'TO DO'} count={5} color={'#83F'}/>
    
    {/* posts */}
    <PostCard image={imgbig} name={'Space Tasks 2'} heading={'Make Money Online Through'}
     avatar={[avtar,avtar1]} action={2} attachment={3} alarm={6}/>
    <PostCard  name={'Space Tasks 2'} heading={'Make Money Online Through'}
     avatar={[avtar2]} />
    <PostCard  name={'Space Tasks 2'} heading={'Make Money Online Through'}
     avatar={[avtar,avtar3]} />
    <PostCard  name={'Space Tasks 2'} heading={'Make Money Online Through'}
     avatar={[avtar,avtar3,avtar2]} />
    <PostCard  name={'Space Tasks 2'} heading={'Make Money Online Through'}
     avatar={[avtar3]} />
    <PostCard  name={'Space Tasks 2'} heading={'Make Money Online Through'}
     avatar={[avtar,avtar3]} />

     <div className={styles.addTaskbutton}>+NEW TASK</div>

    </div>

    
    <div className={styles.inworkColumn}>
    <PostHeader name={'IN WORK'} count={5} color={'#33BFFF'}/>
    
    {/* posts */}
    <PostCard  name={'Space Tasks 2'} heading={'Types Of Paper In Catalog'}
     avatar={[avtar2]} />
    <PostCard image={imgbig2} name={'Space Tasks 2'} heading={'Make Money Online Through'}
     avatar={[avtar,avtar1]} action={2} attachment={3} alarm={5}/>
    <PostCard  name={'Space Tasks 2'} heading={'Make Money Online Through'}
     avatar={[avtar,avtar1]}/>
    <PostCard  name={'Space Tasks 2'} heading={'Make Money Online Through'}
     avatar={[avtar,avtar1]} action={2} attachment={3} alarm={1}/>
     <div className={styles.addTaskbutton}>+NEW TASK</div>

    </div>

    
    <div className={styles.reviewColumn}>
    <PostHeader name={'REVIEW'} count={5} color={'#FFCB33'}/>

    <PostCard  name={'Space Tasks 3'} heading={'Astronomy Or Astrology'}
     avatar={[avtar]} />
    </div>



    <div className={styles.doneColumn}>
    <PostHeader name={'DONE'} count={5} color={'#29CC39'}/>
    <PostCard  name={'Space Tasks 2'} heading={'Copper Canyon'}
     avatar={[avtar1]} />

    </div>
    <div className={styles.dialogBox}>
<div>
    <div>

    <Image src={dot} alt='no'/>
    <p></p>
    <Image src={dot} alt='no'/>
    </div>
    <Image src={close} alt='no'/>


</div>
    </div >
        </>
    );
}

export default Menubox;