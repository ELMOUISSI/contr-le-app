import React from 'react'
 
const languasSwitcher = ({onLanguageChange}) => {
  const handlelangChange=(e)=>{
    e.preventDefault()
    onLanguageChange(e.currentTarget.dataset.lang)
  }
  return (
    <>
      <ul className='nav justify-content-center' >
        <li className='nav-item'>
          <a href="w"  className='nav-link' data-lang='FR' onClick={handlelangChange}> FR</a>
        </li>
        <li className='nav-item'>
          <a href="w" className='nav-link' data-lang='AR' onClick={handlelangChange}> AR</a>
        </li>
        <li className='nav-item'>
          <a href="w" className='nav-link' data-lang='EN' onClick={handlelangChange}> EN</a>
        </li>
        <li className='nav-item'>
          <a href="w" className='nav-link' data-lang='ES'onClick={handlelangChange}> ES</a> 
        </li>

      </ul>
    </>
  )
}

export default languasSwitcher
