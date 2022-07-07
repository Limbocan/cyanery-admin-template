<template>
  <svg
    width="90"
    height="90"
    class="clock-svg"
    viewBox="0 0 200 200"
  >
    <g>
      <circle
        id="circle"
        style="stroke: #FFF; stroke-width: 12px; fill:#20B7AF"
        cx="50%"
        cy="50%"
        r="40%"
      />
    </g>
    <g>
      <line
        id="hourhand"
        x1="100"
        y1="100"
        x2="100"
        y2="55"
        transform="rotate(80 100 100)"
        style="stroke-width: 3px; stroke: #fffbf9;"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="43200s"
          repeatCount="indefinite"
        />
      </line>
      <line
        id="minutehand"
        x1="100"
        y1="100"
        x2="100"
        y2="40"
        style="stroke-width: 4px; stroke: #fdfdfd;"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="3600s"
          repeatCount="indefinite"
        />
      </line>
      <line
        id="secondhand"
        x1="100"
        y1="100"
        x2="100"
        y2="30"
        style="stroke-width: 2px; stroke: #C1EFED;"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="60s"
          repeatCount="indefinite"
        />
      </line>
    </g>
    <circle
      id="center"
      style="fill:#128A86; stroke: #C1EFED; stroke-width: 2px;"
      cx="50%"
      cy="50%"
      r="3"
    />
  </svg>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => initTime())

const initTime = () => {
  const hands = []
  hands.push(document.querySelector('#secondhand > *'))
  hands.push(document.querySelector('#minutehand > *'))
  hands.push(document.querySelector('#hourhand > *'))
  const cx = 100
  const cy = 100

  function shifter(val) {
    return [val, cx, cy].join(' ')
  }
  const date = new Date()
  const hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2
  const minuteAngle = 360 * date.getMinutes() / 60
  const secAngle = 360 * date.getSeconds() / 60
  hands[0].setAttribute('from', shifter(secAngle))
  hands[0].setAttribute('to', shifter(secAngle + 360))
  hands[1].setAttribute('from', shifter(minuteAngle))
  hands[1].setAttribute('to', shifter(minuteAngle + 360))
  hands[2].setAttribute('from', shifter(hoursAngle))
  hands[2].setAttribute('to', shifter(hoursAngle + 360))
  for (let i = 1; i <= 12; i++) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    el.setAttribute('x1', '100')
    el.setAttribute('y1', '30')
    el.setAttribute('x2', '100')
    el.setAttribute('y2', '40')
    el.setAttribute('transform', 'rotate(' + (i * 360 / 12) + ' 100 100)')
    el.setAttribute('style', 'stroke: #ffffff;')
    document.querySelector('.clock-svg').appendChild(el)
  }
}
</script>
