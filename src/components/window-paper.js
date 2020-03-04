import React, { useEffect, useRef } from 'react'
import * as paper from 'paper'

export default (props) => {
  const ref = useRef()

  const {
    openingRatio,
    horizontalLights,
    casementColor,
    glazingBarColor,
    sashes
  } = props

  const width = 200;
  const height = openingRatio * width;

  // Setup Paper
  useEffect(() => {
    paper.setup(ref.current)
  })

  useEffect(() => {
    const originX = 5
    const originY = 5

    const size = new paper.Size(width, height)
    const rectangle = new paper.Rectangle(new paper.Point(originX, originY), size)
    const path = new paper.Path.Rectangle(rectangle)
    path.strokeColor = casementColor
    path.strokeWidth = 5

    const lightWidth =  width / horizontalLights
    const lightHeight = height / sashes.reduce((acc, sash) => acc + sash.vLights, 0)
    const lightSize = new paper.Size(lightWidth, lightHeight)

    let sashY = originY

    sashes.forEach(({ vLights }, i) => {
      const lightsGroup = new paper.Group()

      for (let i = 0; i < vLights; i++) {
        const y = sashY + i * lightHeight

        for (let j = 0; j < horizontalLights; j++) {
          const x = originX + j * lightWidth

          const lightRectangle = new paper.Rectangle(new paper.Point(x, y), lightSize)
          const lightPath = new paper.Path.Rectangle(lightRectangle)

          lightsGroup.addChild(lightPath)
        }
      }
      
      lightsGroup.strokeColor = glazingBarColor
      lightsGroup.strokeWidth = 1

      const sashHeight = lightHeight * vLights
      const sashSize = new paper.Size(width, sashHeight)
      const sashRect = new paper.Rectangle(new paper.Point(originX, sashY), sashSize)
      const sashPath = new paper.Path.Rectangle(sashRect)
      sashPath.strokeColor = casementColor
      sashPath.strokeWidth = 5

      sashY = sashY + sashHeight
    })
  })

  return <canvas width={width + 10} height={height + 10} ref={ref}></canvas>
}
