import { ReactNode } from 'react'
import { IconContainer, InfoWithIconContainer } from './styles'

interface InfoProps {
  iconBg: string
  icon: ReactNode
  text?: string
}

export function Info({ icon, iconBg, text }: InfoProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
