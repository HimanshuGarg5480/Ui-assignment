import React from 'react'
import Navbar from './components/Navbar'
import Subsection1 from './components/Subsection1'
import Subsection2 from './components/Subsection2'
import Subsection3 from './components/Subsection3'
import Subsection4 from './components/Subsection4'
import Subsection5 from './components/Subsection5'
import Subsection6 from './components/Subsection6'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Subsection1 />
      <Subsection2 />
      <Subsection3 />
      <Subsection4 />
      <Subsection5 />
      <Subsection6 />
    </div>
  )
}

export default App