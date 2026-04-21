import LiquidGlass from 'liquid-glass-react'

interface LiquidCardProps {
  children: React.ReactNode
  className?: string
}

export function LiquidCard({ children, className = '' }: LiquidCardProps) {
  return (
    <LiquidGlass
      className={className}
      displacementScale={64}
      blurAmount={0.1}
      saturation={140}
      aberrationIntensity={2}
      style={{
        padding: '24px',
        borderRadius: '16px',
      }}
    >
      {children}
    </LiquidGlass>
  )
}