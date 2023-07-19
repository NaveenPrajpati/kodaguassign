import Image from 'next/image';
import styles from './taskSection.module.css'
import imgbig from './assets/Imagebig.png'
import imgbig2 from './assets/imgBig2.png'
import avtar from './assets/Avatar Image.png'
import avtar1 from './assets/Avatar Image (1).png'
import avtar2 from './assets/Avatar Image (2).png'
import avtar3 from './assets/Avatar Image (3).png'
import PostHeader from './PostHeader';
import PostCard from './PostCard';
import DialogBox from './DialogBox';
function Menubox() {
    return (
        < >
            <div className={styles.todoColumn}>
                {/* head */}
                <PostHeader name={'TO DO'} count={5} color={'#83F'} />

                {/* posts */}
                <PostCard image={imgbig} name={'Space Tasks 2'} heading={'Make Money Online Through'}
                    avatar={[avtar, avtar1]} action={2} attachment={3} alarm={6} />
                <PostCard name={'Space Tasks 2'} heading={'Make Money Online Through'}
                    avatar={[avtar2]} />
                <PostCard name={'Space Tasks 2'} heading={'Make Money Online Through'}
                    avatar={[avtar, avtar3]} />
                <PostCard name={'Space Tasks 2'} heading={'Make Money Online Through'}
                    avatar={[avtar, avtar3, avtar2]} />
                <PostCard name={'Space Tasks 2'} heading={'Make Money Online Through'}
                    avatar={[avtar3]} />
                <PostCard name={'Space Tasks 2'} heading={'Make Money Online Through'}
                    avatar={[avtar, avtar3]} />

                <div className={styles.addTaskbutton}>+NEW TASK</div>

            </div>


            <div className={styles.inworkColumn}>
                <PostHeader name={'IN WORK'} count={5} color={'#33BFFF'} />

                {/* posts */}
                <PostCard name={'Space Tasks 2'} heading={'Types Of Paper In Catalog'}
                    avatar={[avtar2]} />
                <PostCard image={imgbig2} name={'Space Tasks 2'} heading={'Make Money Online Through'}
                    avatar={[avtar, avtar1]} action={2} attachment={3} alarm={5} />
                <PostCard name={'Space Tasks 2'} heading={'Make Money Online Through'}
                    avatar={[avtar, avtar1]} />
                <PostCard name={'Space Tasks 2'} heading={'Make Money Online Through'}
                    avatar={[avtar, avtar1]} action={2} attachment={3} alarm={1} />
                <div className={styles.addTaskbutton}>+NEW TASK</div>

            </div>


            <div className={styles.reviewColumn}>
                <PostHeader name={'REVIEW'} count={5} color={'#FFCB33'} />

                <PostCard name={'Space Tasks 3'} heading={'Astronomy Or Astrology'}
                    avatar={[avtar]} />
            </div>



            <div className={styles.doneColumn}>
                <PostHeader name={'DONE'} count={5} color={'#29CC39'} />
                <PostCard name={'Space Tasks 2'} heading={'Copper Canyon'}
                    avatar={[avtar1]} />

            </div>

           <DialogBox/>
        </>
    );
}

export default Menubox;