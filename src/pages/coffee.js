import React, { useState } from "react"
import Layout from "../components/layout"

const values = [...Array(20).keys()].map(i => i + 18)

export default () => {
  const [ratio, setRatio] = useState(16)
  const [value, setValue] = useState(38)
  const handleChange = (e) => setValue(parseInt(e.target.value))

  const water = (grams) => grams * ratio
  const total = (grams) => water(grams) + grams

  return (
    <div className="p-10">
      <table>
        <thead>
          <tr>
            <th className="pr-3">coffee (g)</th>
            <th className="pr-3">water (g)</th>
            <th>total (g)</th>
          </tr>
        </thead>
        <tbody>
          { values.map(grams =>
              <tr key={grams}>
                <td className="text-center">{grams}</td>
                <td className="text-center">{water(grams)}</td>
                <td className="text-center">{total(grams)}</td>
              </tr>
            )
          }
           <tr>
             <td className="text-center">
                <input
                  type="number"
                  className="w-16 text-center"
                  value={value}
                  onChange={handleChange}
                />
             </td>
             <td className="text-center">{water(value)}</td>
             <td className="text-center">{total(value)}</td>
           </tr>
        </tbody>
      </table>

      <div className="mt-10">
        ratio = <input
                  type="number"
                  className="w-12"
                  value={ratio}
                  onChange={e => setRatio(parseInt(e.target.value))}
                />
      </div>
      <div>
        water(coffee) = coffee * ratio
      </div>
      <div>
        total(coffee) = water(coffee) + coffee
      </div>
   </div>
  )
}
