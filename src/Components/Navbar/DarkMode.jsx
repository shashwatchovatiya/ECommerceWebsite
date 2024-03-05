import React from 'react'
import dark from '../../assets/dark.png'
import light from '../../assets/light.png'

export default function DarkMode() {

  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') ? localStorage.getItem("theme") : "light"
  )

  const element = document.documentElement //for html element
  // console.log(element);


  React.useEffect(() => {
   if (theme === "dark"){
    element.classList.add("dark")
    localStorage.setItem("theme","dark")
     // console.log("Dark Mode");
   } else {
    element.classList.remove("dark")
    localStorage.setItem("theme","light")
     // console.log("Light Mode");
   }
  },[theme]);


  return (
    <div className='relative  '>
     <img src={light} 
     alt="" 
     className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]   transition-all duration-300 absolute right-0 z-10 ${theme == "dark" ? "opacity-0": "opacity-100"} `}
     onClick={()=> setTheme(theme == "light"? "dark":"light")}
     />
     <img src={dark} 
     alt="" 
     onClick={()=> setTheme(theme == "light"? "dark":"light")}
     className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]  transition-all duration-300 `}/>
    </div>
  )
}
