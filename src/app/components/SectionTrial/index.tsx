import { GridContainer } from "../GridContainer";

export function SectionTrial () {
  return (
    <section className="py-24 bg-gray-50">
      <GridContainer className="text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-5">
          Start your free trial
        </h2>
        <p className="text-xl/6 text-gray-600 mb-10">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="py-3 px-5 text-gray-700 bg-white border
           border-gray-300 font-semibold rounded-lg hover:bg-gray-100 leading-normal transition">
              Learn more
            </button>
            <button className="font-semibold py-3 px-5 bg-brand-600 rounded-lg text-white
            leading-normal hover:bg-brand-700 transition">
              Get started
            </button>
        </div>
      </GridContainer>
    </section>
  )
}