import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { AreaCtas } from "./AreaCtas";
import { TagFeature } from "./TagFeature";



export function SectionHero () {
  return(
    <section className="py-16 xl:pb-0 xl:pt-24">
      <GridContainer>
        <div className="text-center">
          <TagFeature />
          <h1 className="text-4xl xl:text-6xl font-semibold text-gray-900 mt-4 mb-6">
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-md/relaxed xl:text-xl/6 text-gray-600 max-w-3xl mx-auto mb-12">
            Powerful, self-serve product and growth analytics to help you convert, 
            engage, and retain more users. Trusted by over 4,000 startups.
          </p>
          <AreaCtas />
        </div>

        <Image 
         src="/mackbook.jpg" 
         alt="mackbook" 
         width={1216}
         height={480}
         className="hidden xl:block mx-auto"
        />

        <Image 
         src="/mobile-mac.jpg" 
         alt="mackbook" 
         width={343}
         height={200}
         className="block xl:hidden mx-auto"
        />
        <hr className="hidden xl:block border-gray-200"/>
      </GridContainer>
    </section>
  )
}