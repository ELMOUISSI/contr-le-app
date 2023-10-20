import React, { useState } from 'react'
import LanguasSwitcher from './languasSwitcher'
const Page = () => {
  const [currentLang,setcurrentLang]=useState('AR')
  const displayLang=()=>{
    switch(currentLang){
      case 'AR': return 'السلام عليكم' ;
      case 'FR': return 'bonjour';
      case 'EN': return 'hello' ;
      case 'ES': return 'hola' ;
    }
  }
  return (
    <>
      <LanguasSwitcher onLanguageChange={val=>setcurrentLang(val)}/>
      <br />
      <br />
      language : {currentLang }
      <br />
      {displayLang()}
    </>
  )
}

export default Page
 