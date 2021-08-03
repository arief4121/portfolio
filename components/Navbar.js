import { useState } from "react"


export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    return (
       <>
         <header className="w-full fixed">
             <nav className={`${click ? "bg-gray-900" : "bg-transparent"} lg:bg-transparent flex justify-between lg:items-center lg:w-10/12 p-5 mx-auto lg:py-5 flex-col lg:flex-row`}>  
                <div className="flex justify-between items-center w-full">
                    <div className="duration-300 hover:scale-x-110">
                      <a href="#" className="text-gray-300 font-bold text-3xl">Portfolio<span className="text-primary text-4xl font-extrabold">.</span></a>
                    </div>
                    <div className="lg:hidden">
                      <button onClick={handleClick}>
                        {!click ? <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        }
                      </button>
                    </div>
                </div>
                <div className={`${click ? "block" : "hidden"} lg:block my-5 lg:my-0`}>
                    <div className="flex flex-col lg:flex-row">
                      <a href="#" className="text-gray-300 text-xl font-semibold py-2 lg:py-0 lg:px-4 hover:text-primary" onClick={closeMobileMenu}>Home</a>
                      <a href="#" className="text-gray-300 text-xl font-semibold py-2 lg:py-0 lg:px-4 hover:text-primary" onClick={closeMobileMenu}>About</a>
                      <a href="#" className="text-gray-300 text-xl font-semibold py-2 lg:py-0 lg:px-4 hover:text-primary" onClick={closeMobileMenu}>Skill</a>
                      <a href="#" className="text-gray-300 text-xl font-semibold py-2 lg:py-0 lg:px-4 hover:text-primary" onClick={closeMobileMenu}>Services</a>
                      <a href="#" className="text-gray-300 text-xl font-semibold py-2 lg:py-0 lg:px-4 hover:text-primary" onClick={closeMobileMenu}>Contact</a>
                    </div>
                </div>
             </nav>
         </header>
       </>
    )
}
