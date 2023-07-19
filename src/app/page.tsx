import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar/Navbar'
import LeftNavbar from './components/LeftNavbar/LeftNavbar'
import ProfileSection from './components/middleProfileSection/ProfileSection'
import TaskSection from './components/rightTaskSection/TaskSection'

export default function Home() {
  return (
    <main className={styles.main}>
    <div className={styles.container}>
    <Navbar/>
    <div style={{display:'flex'}}>
      <LeftNavbar/>
      <ProfileSection/>
      <TaskSection/>
    </div>
    </div>
    </main>
  )
}
