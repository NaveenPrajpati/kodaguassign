import Image from 'next/image';
import styles from './taskSection.module.css'
import avtarb from './assets/avatarb.png'
import close from './assets/close.png'
import insertComment from './assets/insert_comment.png'
import flag from './assets/flag.png'
import dot from './assets/color-dot-4.png'
import right from './assets/chevron_right.png'
import play from './assets/play.png'
import cloud from './assets/cloud.png'
import link from './assets/link.png'
import arrowRight from './assets/subdirectory_arrow_right.png'

function DialogBox() {
    return (
        <div className={styles.dialogBox}>
        <div className={styles.dialogHead}>
            <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>

                <Image src={dot} alt='no' />
                <p>Development Apps</p>
                <Image src={link} alt='no' />
            </div>
            <Image src={close} alt='no' />

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className={styles.dialogBody}>
                <div >
                    <div className={styles.dialogBodyItem}>
                        <Image src={arrowRight} alt='no' />
                        <p className={styles.dialogBodyItemText}>
                            4 Subtasks
                        </p>
                    </div>
                    <div className={styles.dialogBodyItem}>
                        <Image src={cloud} alt='no' />
                        <p className={styles.dialogBodyItemText}>
                            4 Subtasks
                        </p>
                    </div>
                    <div className={styles.dialogBodyItem}>
                        <Image src={avtarb} alt='no' />
                        <p className={styles.dialogBodyItemText}>
                            4 Subtasks
                        </p>
                    </div>
                </div>
                <div >
                    <div className={styles.dialogBodyItem}>
                        <Image src={flag} alt='no' />
                        <p className={styles.dialogBodyItemText}>
                            4 Subtasks
                        </p>
                    </div>
                    <div className={styles.dialogBodyItem}>
                        <Image src={insertComment} alt='no' />
                        <p className={styles.dialogBodyItemText}>
                            4 Subtasks
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.dialogBottom}>
                <div className={styles.dialogBottomDate}>
                    <div className={styles.dialogBottomDateText}>
                        <p style={{color:'#7D8FB3'}}>Start Date</p>
                        <p>Sep 3, 9:00 pm</p>
                    </div>
                    <Image src={right} alt='no' />
                    <div className={styles.dialogBottomDateText}>
                        <p style={{color:'#7D8FB3'}}>DUE DATE</p>
                        <p>Sep 3, 9:00 pm</p>
                    </div>
                </div>

                <div className={styles.dialogBottomPlay}>
                    <Image src={play} alt='no' style={{ background: '#29CC39',borderRadius:'100%' }} />
                    <p className={styles.dialogBottomDateText}>0:00</p>
                </div>
            </div>
            </div>
    </div >
    );
}

export default DialogBox;