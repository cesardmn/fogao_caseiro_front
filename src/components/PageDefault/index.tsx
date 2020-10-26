import React from 'react'
import Header from '../Header'

import './styles.css'

interface PageDefaultProps {
  content?:any
}

const PageDefault:React.FC<PageDefaultProps> = ({content, children}) => {
  return (
    <div id="page-default">
      
      <header>
        <Header />
      </header>
      
      <main>
        {children}
      </main>

    </div>
  )
}

export default PageDefault