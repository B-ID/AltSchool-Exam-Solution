import { useState } from "react"

export const useCounter = (initialValue = 0, step) => {
    const [count, setCount] = useState(initialValue)

    const increment = () => setCount(prevCount => prevCount + step)
    const decrement = () => setCount(prevCount => prevCount - step)
    const reset = () => setCount(initialValue)


    return [count, increment, decrement, reset, setCount]

}