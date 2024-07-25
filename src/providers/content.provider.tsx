import { Pane } from 'evergreen-ui'
import React from 'react'
import Header from '../components/common/header'

const ContentProvider = ({children}: any) => {
  return (
    <Pane>
      <Pane>{children}</Pane>
    </Pane>
  )
}

export default ContentProvider