// import Link from 'next/link'
// import React from 'react'
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Head from 'next/head'; 
// function NotFoundPage() {

    
	
//     const router = useRouter()
// 		useEffect(() => {
// 		setTimeout(() => {
// 			router.push("/")
// 		}, 5000);
//     });
//   return (
//     <div class="mainbox">
//       <div class="err">4</div>
//       <i class="far fa-question-circle fa-spin"></i>
//       <div class="err2">4</div>
//       <div class="msg">
//         Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
//         existed in the first place?
//         <p>
//           Let's go <a href="#">home</a> and try from there.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default NotFoundPage;


import {notFound} from "next/navigation"

export default function NotFoundCatchAll() {
  notFound()
}