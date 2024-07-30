import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function SectionCompanies() {
  return(
    <section className="pt-0 pl-6 xl:pt-24">
      <GridContainer>
         <p className="text-center text-gray-600 font-medium mb-8">
           Join 4,000+ companies already growing
          </p>
         <div className="grid gap-y-4 gap-x-10 grid-cols-2 xl:flex items-center 
           xl:gap-y-0 xl:gap-x-0 xl:justify-between">
            <Image 
              width={146}
              height={48}
              src="/layers.svg" 
              alt=""
            />
            <Image 
              width={146}
              height={48}
              src="/sisyphus.svg" 
              alt="" 
            />
            <Image 
              width={146}
              height={48}
              src="/circooles.svg" 
              alt="" 
            />
            <Image 
              width={146}
              height={48}
              src="/catalog.svg" 
              alt="" 
            />
            <Image 
              width={146}
              height={48}
              src="/quotient.svg" 
              alt="" 
            />
         </div>
         <hr className="mt-16 xl:mt-24 border-gray-200"/>
      </GridContainer>
    </section>
  )
}