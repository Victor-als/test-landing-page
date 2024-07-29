import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemNav } from "./item-nav";
import { menuCompanys, menuLegal, menuProducts, menuResources, menuSocial, menuUseCases } from "@/app/utils/data";

export function Footer () {
  return (
    <footer className="pt-16 pb-12">
      <GridContainer >
        <div className="flex items-start justify-between pb-16">
          <ItemNav title="Product" itemsMenu={menuProducts} />

          <ItemNav title="Company" itemsMenu={menuCompanys} />

          <ItemNav title="Resources" itemsMenu={menuResources} />

          <ItemNav title="Use cases" itemsMenu={menuUseCases} />

          <ItemNav title="Social" itemsMenu={menuSocial} />

          <ItemNav title="Legal" itemsMenu={menuLegal} />
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-8">
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