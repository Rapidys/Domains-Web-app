import { useState, useEffect } from 'react'

const DEFAULT_INPUT_CHANGE_DELAY = 300

export const useDebouncedValue = (value:string | number, delay = DEFAULT_INPUT_CHANGE_DELAY) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value)
            }, delay)

            return () => clearTimeout(handler)
        },

        [value],
    )

    return debouncedValue
}
