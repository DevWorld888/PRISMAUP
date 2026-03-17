"use client"

import * as motion from "motion/react-client"

type EnterAnimationProps = {
  children: React.ReactNode
}

export default function EnterAnimation({ children }: EnterAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", bounce: 0.5 },
      }}
    >
      {children}
    </motion.div>
  )
}