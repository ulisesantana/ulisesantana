import * as React from "react"
import FooterWrapper from "./Footer.style"

type FooterProps = {
  children: React.ReactNode
}

const Footer: React.FunctionComponent<FooterProps> = ({
  children,
  ...props
}) => {
  return (
    <FooterWrapper className="no-print" {...props}>
      {children}
    </FooterWrapper>
  )
}

export default Footer
