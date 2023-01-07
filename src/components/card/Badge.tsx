import { BadgeInterface } from "../../types"
import styles from '../card/Badge.module.css'

const Badge = ({text, filled}: BadgeInterface) => {
  // if it's filled, show styles.filled, if it's empty then show an empty string
    const filledClass = filled ? styles.filled : " "
  return (
    <small className={`
    ${styles.badge} 
    ${filledClass}`}>
        {text}
    </small>
  )
}

export default Badge;
