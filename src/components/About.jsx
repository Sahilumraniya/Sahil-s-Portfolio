import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import {SectionWrapper} from '../HOC/index'
import { styles } from '../styles'

const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] sheadow-card'>
        <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly item-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain self-center'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview</p>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda facere, perspiciatis harum quibusdam doloremque saepe eveniet ex dolore provident, ad aspernatur esse nulla hic alias, ratione explicabo perferendis. Earum, sequi?
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((s, index) => {
          return(<ServiceCard key={s.title} index={index} {...s} />)
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");