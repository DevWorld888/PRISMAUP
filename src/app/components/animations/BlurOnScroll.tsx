"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

type Props = {
  children: ReactNode
}

export default function BlurOnScroll({ children }: Props) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"]
  )

  return (
    <motion.div ref={ref} style={{ filter }}>
      {children}
    </motion.div>
  )
}