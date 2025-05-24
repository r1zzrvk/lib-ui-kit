import { FC } from 'react'
import { Button } from '@mantine/core'
import clsx from 'clsx'

import { TButtonProps, useButtonContext } from '../lib'

import '../styles/index.scss'

export const MantineButton: FC<TButtonProps> = ({ children }) => {
  const data = useButtonContext()

  const mergedClassNames: TButtonProps['classNames'] = {
    ...data.classNames,
    section: clsx(data.classNames, [`button-section--${data.size}`]),
  }

  return (
    <Button {...data} classNames={mergedClassNames}>
      {children}
    </Button>
  )
}
