'use client'
import CountUp from 'react-countUp'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="wh-full">
      <CountUp decimal="," prefix="$" duration={2} decimals={2} end={amount} />
    </div>
  )
}

export default AnimatedCounter
