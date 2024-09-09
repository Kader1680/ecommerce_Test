import React from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
 
import { useTranslation } from "../../context/TranslationContext";


function Account() {
  const { t } = useTranslation();

  return (
    <div className=' p-6'>
         <h3 className='myfont font-bold'>{t("Profildetails")}</h3>
         <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>{t("Email")}</h5>
              <p>mohamedbenrekaya@gmail.com</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' bg-white text-black rounded-full border' href='#' variant="flat">
                {t("changeEmail")}
          </Button>
            </div>
        </div>

        <hr className='w-full  mt-7 mb-7'></hr>

        <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>{t("Phonenumber")}</h5>
              <p>{t("PhoneInfo")}</p>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' bg-white text-black rounded-full border' href='#' variant="flat">
                {t("verifyPhone")} 
          </Button>
            </div>
        </div>

        <hr className='w-full  mt-7 mb-7'></hr>

        <h6 className='myfont font-bold'>{t("Profildetails")}</h6>

        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h5 className=' font-bold'>{t("Fullname")}</h5>
            <div class="relative group">
                <button id="dropdown-button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 ">
                <span class="mr-2">Mohamed Ben Rekaya</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                </button>
                <div id="dropdown-menu" class="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                
                <input id="search-input" class="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autocomplete="off" />
                
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Uppercase</a>
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Lowercase</a>
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Camel Case</a>
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kebab Case</a>
                </div>
            </div>
    
        </div>

        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h5 className=' font-bold'>{t("Gender")}</h5>
            <div class="relative group">
                <button id="dropdown-button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 ">
                <span class="mr-2">Gender</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                </button>
                <div id="dropdown-menu" class="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                
                <input id="search-input" class="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autocomplete="off" />
                
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Uppercase</a>
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Lowercase</a>
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Camel Case</a>
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kebab Case</a>
                </div>
            </div>
    
        </div>

        <div className=' flex items-center justify-between mt-4 mb-4'>
            <h5 className=' font-bold'>{t("Birthday")}</h5>
            <div class="relative group flex gap-2">
               <div>
                    <button id="dropdown-button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 ">
                      <span class="mr-2">Day</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                      </button>
                      <div id="dropdown-menu" class="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                      
                      <input id="search-input" class="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autocomplete="off" />
                      
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Uppercase</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Lowercase</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Camel Case</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kebab Case</a>
                      </div>
               </div>
               <div>
                    <button id="dropdown-button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 ">
                      <span class="mr-2">Month</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                      </button>
                      <div id="dropdown-menu" class="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                      
                      <input id="search-input" class="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autocomplete="off" />
                      
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Uppercase</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Lowercase</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Camel Case</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kebab Case</a>
                      </div>
               </div>
               <div>
                    <button id="dropdown-button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 ">
                      <span class="mr-2">{t("Year")} </span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                      </button>
                      <div id="dropdown-menu" class="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                      
                      <input id="search-input" class="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autocomplete="off" />
                      
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Uppercase</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Lowercase</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Camel Case</a>
                      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kebab Case</a>
                      </div>
               </div>
            </div>
   
        </div>

        <h6 className='myfont font-bold'>Profile details</h6>
        <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>{t("GoogleAuth")}</h5>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button as={Link} className=' bg-white text-black rounded-full border' href='#' variant="flat">
                Link
              </Button>
            </div>
        </div>
        <div className=' mt-3 flex items-center justify-between'>
            <div>
              <h5 className=' font-bold'>{t("FacebookAuth")}</h5>
            </div>
            <div className=' flex items-center justify-between'>
               
                <Button disabled as={Link} className=' bg-white text-black rounded-full border disabled ' href='#' variant="flat">
                Linked
              </Button>
            </div>
        </div>
        
    </div>
  )
}

export default Account