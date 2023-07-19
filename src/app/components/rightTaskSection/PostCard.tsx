import Image from 'next/image';
import styles from './taskSection.module.css'
import option from './assets/optionImg.png'
import list from './assets/list.png'
import attach from './assets/attachment.png'
import alaram from './assets/access_alarms.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';


function PostCard({image,name,heading,action,attachment,alarm,avatar}:any) {
    return (
        <div className={styles.todoItem1}>
   {image && <Image alt='?' src={image}/>}
    <div style={{padding:15}}>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <small className={styles.todoItem1name}>{name}</small>
    <div style={{display:'flex'}}>
    {avatar.map((it: string | StaticImport)=>(
        <Image alt='?' src={it}/>
        ))}</div>
    </div>
    <p className={styles.todoItem1heading}>{heading}</p>
    
    <div className={styles.todoBottom}>
      {action>0 &&  <div className={styles.todoBottomDiv}>
    <Image alt='?' src={list}/>
    <span className={styles.todoBottomDivText}>{action}</span>
        </div>}
      {attachment>0 &&   <div className={styles.todoBottomDiv}>
    <Image alt='?' src={attach}/>
    <span className={styles.todoBottomDivText}>{attachment}</span>
        </div>}
       {alarm>0 &&  <div className={styles.todoBottomDiv}>
    <Image alt='?' src={alaram}/>
    <span className={styles.todoBottomDivText} style={{color:`${alarm<2?'red':''}`}}>{alarm} day left</span>
        </div>}
  
   
    </div>
    </div>
    </div>
    );
}

export default PostCard;