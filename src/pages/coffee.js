import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const values = [...Array(20).keys()].map(i => i + 24)

export default () => {
  const [ratio, setRatio] = useState(16)
  const [bloomRatio, setBloomRatio] = useState(2)
  const [grams, setGrams] = useState(44)

  const bloom = g => Math.round(g * bloomRatio)
  const water = g => g * ratio
  const total = g => water(g) + g

  return (
    <Layout>
      <SEO title="Coffee" />

      <h1>Coffee</h1>

      <table>
        <thead>
          <tr>
            <th className="pr-3">coffee (g)</th>
            <th className="pr-3">bloom (g)</th>
            <th className="pr-3">water (g)</th>
            <th>total (g)</th>
          </tr>
        </thead>
        <tbody>
          {values.map(g => (
            <tr key={g}>
              <td className="text-center">{g}</td>
              <td className="text-center">{bloom(g)}</td>
              <td className="text-center">{water(g)}</td>
              <td className="text-center">{total(g)}</td>
            </tr>
          ))}
          <tr>
            <td className="text-center">
              <input
                type="number"
                className="w-16 text-center"
                value={grams}
                onChange={e => setGrams(parseInt(e.target.value))}
              />
            </td>
            <td className="text-center">{bloom(grams)}</td>
            <td className="text-center">{water(grams)}</td>
            <td className="text-center">{total(grams)}</td>
          </tr>
        </tbody>
      </table>

      <section>
        <h3>Adjust the ratios to your liking:</h3>

        <div>
          water ratio ={" "}
          <input
            type="number"
            className="w-12"
            value={ratio}
            onChange={e => setRatio(parseInt(e.target.value))}
          />
        </div>
        <div>
          bloom ratio ={" "}
          <input
            type="number"
            className="w-12"
            value={bloomRatio}
            step="0.1"
            onChange={e => setBloomRatio(parseFloat(e.target.value))}
          />
        </div>
      </section>

      <section>
        <h3>Equations:</h3>

        <div>bloom(coffee) = coffee * bloom ratio</div>
        <div>water(coffee) = coffee * water ratio</div>
        <div>total(coffee) = water(coffee) + coffee</div>
      </section>

      <section>
        <h3>Brewing instructions:</h3>

        <ol>
          <li className="mb-3">
            Open the filter and place it in the Chemex with the 3-layer side
            facing the spout.
          </li>
          <li className="mb-3">
            Rinse the filter with boiling water. Swirl the water to warm the
            glass and then pour it out.
          </li>
          <li className="mb-3">
            Slowly pour the bloom(g) over the grounds and wait 30 to 60 seconds
            for the grounds to release C02 from the grounds.
          </li>
          <li className="mb-3">
            Pour water over in batches until you reach the final weight. Stir
            the brewing grounds with the flow of water.
          </li>
          <li className="mb-3">
            Pour into your cup and enjoy.
          </li>
          <li>
            If the coffee gets cold, heat the Chemex over low heat.
          </li>
        </ol>
      </section>

      <section>
        <h3>Mindset instructions:</h3>
        <ul>
          <li>Find a comfortable place.</li>
          <li>Don't be distracted. Set the phone down and do this one thing.</li>
        </ul>
      </section>
    </Layout>
  )
}
