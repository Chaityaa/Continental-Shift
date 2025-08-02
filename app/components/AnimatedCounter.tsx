'use client'

import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  target: number
  duration?: number
}

export default function AnimatedCounter({
  target,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration / 30)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{count}</span>
}
