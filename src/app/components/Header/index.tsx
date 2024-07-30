import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemMenu } from "./item-menu";
import { FiMenu } from "react-icons/fi";


const menuItems = [
  {
    url: "/",
    title: "Home",
    dropdown: false,
  }, 
  {
    url: "/products", 
    title: "Products",
    dropdown: true,
  },
  { 
    url: "/resources", 
    title: "Resources",
    dropdown: true,
  }, 
  {
    url: "/pricing", 
    title: "Pricing",
    dropdown: false,
  }
]

export function Header () {
  return (
    <header className="flex items-center sticky top-0 w-full h-[80px] z-50
     bg-white border-b border-b-gray-100">
      <GridContainer className="flex items-center justify-between">
        <div className="w-full xl:w-auto flex items-center justify-between gap-10">
           <Image 
            src="/logo.svg" 
            width={142}
            height={32}
            alt="logo"
           />
           <nav className="hidden xl:flex items-center gap-8">
             {menuItems.map(({url, title, dropdown}, index) => (
                <ItemMenu 
                 key={index} 
                 url={url} 
                 title={title} 
                 hasDropdown={dropdown}
                />
              ))
             }
           </nav>

           <button>
             <FiMenu 
              size={30}
              className="block xl:hidden "
            />
           </button>
        </div>

        <div>
          <Image 
            className="hidden xl:block"
            src="/avatar.jpg"
            alt="avatar" 
            width={40}
            height={40}
          /> 
        </div>
      </GridContainer>
    </header>
  )
}