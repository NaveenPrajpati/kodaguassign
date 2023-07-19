import Image from 'next/image';
import styles from './taskSection.module.css'
import option from './assets/optionImg.png'
import add from './assets/add.png'

function PostHeader({name,count,color}:any) {
    return (
        <div className={styles.todoHead}>
        <div style={{background:`${color}`}} className={styles.todoHeadColor} ></div>
        <span  style={{margin:'0 15px',display:'flex',alignItems:'center',gap:15}}>
        <span className={styles.headName}>{name}</span>
        <span className={styles.headCounter}>{count}</span>
        </span>
        <div  style={{margin:'0 15px'}}>

        <Image alt='?' src={option}/>
        <Image alt='?' src={add}/>
        </div> 
    </div>
    );
}

export default PostHeader;