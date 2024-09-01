import { useRouter } from 'next/router'
import React from 'react'

import ar from "../../locales/ar.json"
import en from "../../locales/en.json"
function About() {

    const router = useRouter();
    var { lang } = router.query; 
    

    const translations = {
        "en": en,
        "ar": ar,
    };

 
    const t = translations[lang]?.logo;
 
  return (
    <div> {t} </div>
  )
}

export default About