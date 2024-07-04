import styles from './Counter.module.css'

type CounterProps = {
    count: number
}

const Counter = ({ count }: CounterProps) => (
    <span
        className={styles.counter}
        aria-label={`Number of filters applied: ${count}`}
    >
        {count}
    </span>
)

export default Counter
