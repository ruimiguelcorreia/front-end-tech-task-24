import styles from './Counter.module.css'

type CounterProps = {
    count: number
}

const Counter = ({ count }: CounterProps) => (
    <span className={styles.counter}>{count}</span>
)

export default Counter
