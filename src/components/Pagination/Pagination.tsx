import * as React from "react"
import {Link} from "gatsby"
import {IoMdArrowRoundBack, IoMdArrowRoundForward} from "react-icons/io"
import {NavToPage, PageNumber, PaginationWrapper,} from "./Pagination.style"

type PaginationProps = {
  prevLink?: string | undefined | null | boolean
  nextLink?: string | undefined | null | boolean
  currentPage: string
  totalPage: string
  className?: string
}

const Pagination: React.FunctionComponent<PaginationProps> = ({
  prevLink,
  nextLink,
  currentPage,
  totalPage,
  className,
  ...props
}) => {
  return (
    <PaginationWrapper {...props} className={className}>
      <NavToPage>
        {prevLink && (
          <Link to={`${prevLink}`} aria-label="Prev">
            <IoMdArrowRoundBack />
          </Link>
        )}
      </NavToPage>

      <PageNumber>
        {+totalPage > 1 && `Página ${currentPage} de ${totalPage}`}
      </PageNumber>

      <NavToPage>
        {nextLink && (
          <Link to={`${nextLink}`} aria-label="Next">
            <IoMdArrowRoundForward />
          </Link>
        )}
      </NavToPage>
    </PaginationWrapper>
  )
}

export default Pagination
