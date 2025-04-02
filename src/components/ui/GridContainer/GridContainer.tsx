import clsx from 'clsx'
import React, { FC } from 'react'

type GridContainerProps = {
  children: React.ReactNode
  className?: string
}

export const GridContainer: FC<GridContainerProps> = ({ children, className }) => {
  return (
    <div className={clsx('grid gap-3 md:grid-cols-3 lg:grid-cols-4', className)}>{children}</div>
  )
}
