
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current

    if (!element) return

    if (shouldReduceMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [shouldReduceMotion])

  const directions = {
    up: { x: 0, y: 24 },
    down: { x: 0, y: -24 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? false : directions[direction]}
      animate={
        isVisible
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directions[direction] }
      }
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
