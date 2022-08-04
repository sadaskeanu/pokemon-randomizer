import styles from './RandomButton.module.css'

type PropsButton = {
  text: string
  onClick: () => void
}

function RandomButton({ onClick, text }: PropsButton) {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      {text}
    </button>
  )
}

export default RandomButton
