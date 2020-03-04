import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

export default () => {
  const ref = useRef()

  const openingRatio = 2;
  const width = 200;
  const height = openingRatio * width;

  const sashes = [
    { vLights: 2 },
    { vLights: 3 }
  ]

  const hLights = 3
  const glazingBarColor = "#A0AEC0"
  const color = "#718096"

  useEffect(() => {
    const svgElement = d3.select(ref.current)

    const lightWidth =  width / hLights
    const lightHeight = height / sashes.reduce((acc, sash) => acc + sash.vLights, 0)
    
    let sashY = 5

    sashes.forEach(({ vLights }, i) => {
      const sashG = svgElement.append("g")
      const lightsG = sashG.append("g")

      for (let i = 0; i < vLights; i++) {
        const y = sashY + i * lightHeight

        for (let j = 0; j < hLights; j++) {
          const x = 5 + j * lightWidth

          lightsG.append("rect")
            .attr("x", x)
            .attr("y", y)
            .attr("height", lightHeight)
            .attr("width", lightWidth)
            .attr("fill", "none")
            .attr("stroke", glazingBarColor)
            .attr("stroke-width", 1)  
        }
      }

      sashG.append("rect")
        .attr("y", sashY)
        .attr("x", 5)
        .attr("width", width)
        .attr("height", vLights * lightHeight)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 5)

      sashY = sashY + vLights * lightHeight
    })

    svgElement.append("rect")
      .attr("x", 5)
      .attr("y", 5)
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 5)
  }, [width, height])

  return <svg width={width + 10} height={height + 10} ref={ref} />
}
