import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function SectionCompanies() {
  return(
    <section className="pt-24">
      <GridContainer>
         <p className="text-center text-gray-600 font-medium mb-8">
           Join 4,000+ companies already growing
          </p>
         <div className="flex items-center justify-between">
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
         <hr className="mt-24 border-gray-200"/>
      </GridContainer>
    </section>
  )
}