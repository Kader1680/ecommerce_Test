import { useRouter } from 'next/router'
import React from 'react'
function Intro() {

    const router = useRouter();
    var { lang } = router.query; 
    const langIndex = parseInt(lang, 10); // Ensure it is parsed as an integer.

    const translations = {
        0: {
            title: 'In publishing and graphic design',
            description: 'typeface without relying on meaningful content. Lorem ipsum may be used as a',
            price: 22222222.00
        },
        1: {
            title: 'في مجال النشر والتصميم الجرافيكي',
            description: 'وصدون الاعتماد على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم كف',
            price: 22.00,
        },
    };
 
    const t = translations[langIndex]?.title || 'Translation not found';
 
  return (
    <div> {t} </div>
  )
}

export default Intro