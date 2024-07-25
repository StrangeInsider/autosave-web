import { Pane } from 'evergreen-ui'
import React from 'react'
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';

const Header = () => {
  return (
    <Pane className="flex justify-center mt-8">
        <Logo className='w-28' />
    </Pane>
  )
}

export default Header