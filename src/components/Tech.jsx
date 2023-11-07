import { technologies } from "../constants"
import { BallCanvas } from "./canvas"
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
      <div className="ml-6 md:ml-14">
      <p className={styles.sectionHeadText}>Skill</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technoloy) => {
          return (
            <div className="w-28 h-28 mx-5" key={technoloy.name}>
              <BallCanvas icon={technoloy.icon} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Tech