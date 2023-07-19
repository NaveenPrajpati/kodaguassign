import Image from 'next/image';
import styles from './taskSection.module.css'
import dashboard from './assets/dashboard.png'
import event from './assets/event.png'
import checklist from './assets/playlist_add_check.png'
import gantt from './assets/Icon (1).png'
import timeline from './assets/Icon (2).png'
import activity from './assets/Icon (3).png'
import calander from './assets/Icon (4).png'
import search from './assets/search.png'
import Menubox from './Menubox';
function TaskSection() {
    return (
        <div className={styles.container}>
        <div className={styles.navbar}>
            <div className={styles.navbarLinks}>
            <div style={{display:'flex',alignItems:'center'}}>
                <Image alt='?' src={checklist}/>
                <p className={styles.linkName}>List Task</p>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
                <Image alt='?' src={dashboard}/>
                <p className={styles.linkName}>Boards</p>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
                <Image alt='?' src={calander}/>
                <p className={styles.linkName}>Calander</p>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
                <Image alt='?' src={gantt}/>
                <p className={styles.linkName}>Gantt</p>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
                <Image alt='?' src={timeline}/>
                <p className={styles.linkName}>Timeline</p>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
                <Image alt='?' src={activity}/>
                <p className={styles.linkName}>Activity</p>
            </div>
            </div>
            <div className={styles.searchBox}>
                <Image alt='?' src={search}/>
                <p className={styles.linkName}>Search Tasks</p>
            </div>
            
        </div>
        <div className={styles.menubox}>
<Menubox/>
        </div>
        </div>
    );
}

export default TaskSection;