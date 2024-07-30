import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemNav } from "./item-nav";
import { menuCompanys, menuLegal, menuProducts, menuResources, menuSocial, menuUseCases } from "@/app/utils/data";

export function Footer () {
  return (
    <footer className="py-12 xl:pt-16">
      <GridContainer >
        <div className="xl:flex grid grid-cols-2 items-start ml-10 xl:ml-0 
         gap-8 xl:gap-0 justify-between pb-12 xl:pb-16">
          <ItemNav title="Product" itemsMenu={menuProducts} />

          <ItemNav title="Company" itemsMenu={menuCompanys} />

          <ItemNav title="Resources" itemsMenu={menuResources} />

          <ItemNav title="Use cases" itemsMenu={menuUseCases} />

          <ItemNav title="Social" itemsMenu={menuSocial} />

          <ItemNav title="Legal" itemsMenu={menuLegal} />
        </div>

        <div className="flex flex-col xl:flex-row xl:items-center items-start justify-between 
          border-t gap-6 xl:gap-0 border-gray-200 pt-8">
          <Image
            src="/logo.svg" 
            width={142}
            height={32}
            alt="logo"
          />
          <p className="text-gray-500">© 2077 Untitled UI. All rights reserved.</p>
        </div>
      </GridContainer>
    </footer>
  )
}