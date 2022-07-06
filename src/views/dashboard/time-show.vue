<template>
  <!-- <div class="clock">
    <div class="clock__second" />
    <div class="clock__minute" />
    <div class="clock__hour" />
    <div class="clock__axis" />
    <section
      v-for="item in 60"
      :key="item"
      class="clock__indicator"
    />
  </div> -->
  <svg
    width="90"
    height="90"
    class="clock-svg"
    viewBox="0 0 200 200"
  >
    <filter
      id="innerShadow"
      x="-20%"
      y="-20%"
      width="140%"
      height="140%"
    >
      <feGaussianBlur
        in="SourceGraphic"
        stdDeviation="3"
        result="blur"
      />
      <feOffset
        in="blur"
        dx="2.5"
        dy="2.5"
      />
    </filter>
    <g>
      <!-- <circle
        id="shadow"
        style="fill:rgba(0,0,0,0.1)"
        cx="97"
        cy="100"
        r="87"
        filter="url(#innerShadow)"
      /> -->
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

// const initTime = () => {
//   const currentSec = getSecondsToday()
//   const seconds = (currentSec / 60) % 1
//   const minutes = (currentSec / 3600) % 1
//   const hours = (currentSec / 43200) % 1

//   setTime(60 * seconds, 'second')
//   setTime(3600 * minutes, 'minute')
//   setTime(43200 * hours, 'hour')
// }

// const getSecondsToday = () => {
//   const now = new Date()
//   const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
//   const diff = now - today
//   return Math.round(diff / 1000)
// }
// const setTime = (left, hand) => {
//   const dom = `.clock__${hand}`
//   document.querySelector(dom).style.animationDelay = `${left * -1}s`
// }
</script>

<style lang="scss" scoped>

.clock {
  --clock-size: 90px;
  height: var(--clock-size);
  width: var(--clock-size);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: relative;

  .clock__second, .clock__minute, .clock__hour, .clock__indicator {
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    background: #f4eed7;
    transform-origin: bottom center;
    z-index: 2;
    border-radius: 1px;
  }
  .clock__second {
    height: calc((var(--clock-size) / 2) - 10px);
    margin-top: 10px;
    background: #4b9aaa;
    animation: time 60s infinite steps(60);
    z-index: 3;
  }
  .clock__minute {
    height: calc((var(--clock-size) / 2) - 20px);
    margin-top: 20px;
    opacity: 0.75;
    animation: time 3600s linear infinite;
  }
  .clock__hour {
    height: calc((var(--clock-size) / 2) - 30px);
    margin-top: 30px;
    animation: time 43200s linear infinite;
  }
  .clock__indicator {
    height: calc((var(--clock-size) / 2) - 2px);
    border-top: 2px solid #4b9aaa;
    background: none;
  }
  .clock__indicator:nth-of-type(5n) {
    opacity: 1;
    height: calc((var(--clock-size) / 2) - 2px);
    border-top: 4px solid #f4eed7;
  }
  .clock__axis {
    background: #4b9aaa;
    width: 4px;
    height: 4px;
    border-radius: 3px;
    position: absolute;
    z-index: 4;
    top: calc(50% - 2px);
    left: calc(50% - 2px);
  }
}

section:nth-of-type(1) { transform: rotateZ(calc(6deg * 1)); }
section:nth-of-type(2) { transform: rotateZ(calc(6deg * 2)); }
section:nth-of-type(3) { transform: rotateZ(calc(6deg * 3)); }
section:nth-of-type(4) { transform: rotateZ(calc(6deg * 4)); }
section:nth-of-type(5) { transform: rotateZ(calc(6deg * 5)); }
section:nth-of-type(6) { transform: rotateZ(calc(6deg * 6)); }
section:nth-of-type(7) { transform: rotateZ(calc(6deg * 7)); }
section:nth-of-type(8) { transform: rotateZ(calc(6deg * 8)); }
section:nth-of-type(9) { transform: rotateZ(calc(6deg * 9)); }
section:nth-of-type(10) { transform: rotateZ(calc(6deg * 10)); }
section:nth-of-type(11) { transform: rotateZ(calc(6deg * 11)); }
section:nth-of-type(12) { transform: rotateZ(calc(6deg * 12)); }
section:nth-of-type(13) {transform: rotateZ(calc(6deg * 13)); }
section:nth-of-type(14) { transform: rotateZ(calc(6deg * 14)); }
section:nth-of-type(15) { transform: rotateZ(calc(6deg * 15)); }
section:nth-of-type(16) { transform: rotateZ(calc(6deg * 16)); }
section:nth-of-type(17) { transform: rotateZ(calc(6deg * 17)); }
section:nth-of-type(18) { transform: rotateZ(calc(6deg * 18)); }
section:nth-of-type(19) { transform: rotateZ(calc(6deg * 19)); }
section:nth-of-type(20) { transform: rotateZ(calc(6deg * 20)); }
section:nth-of-type(21) { transform: rotateZ(calc(6deg * 21)); }
section:nth-of-type(22) { transform: rotateZ(calc(6deg * 22)); }
section:nth-of-type(23) { transform: rotateZ(calc(6deg * 23)); }
section:nth-of-type(24) { transform: rotateZ(calc(6deg * 24)); }
section:nth-of-type(25) { transform: rotateZ(calc(6deg * 25)); }
section:nth-of-type(26) { transform: rotateZ(calc(6deg * 26)); }
section:nth-of-type(27) { transform: rotateZ(calc(6deg * 27)); }
section:nth-of-type(28) { transform: rotateZ(calc(6deg * 28)); }
section:nth-of-type(29) { transform: rotateZ(calc(6deg * 29)); }
section:nth-of-type(30) { transform: rotateZ(calc(6deg * 30)); }
section:nth-of-type(31) { transform: rotateZ(calc(6deg * 31)); }
section:nth-of-type(32) { transform: rotateZ(calc(6deg * 32)); }
section:nth-of-type(33) { transform: rotateZ(calc(6deg * 33)); }
section:nth-of-type(34) { transform: rotateZ(calc(6deg * 34)); }
section:nth-of-type(35) { transform: rotateZ(calc(6deg * 35)); }
section:nth-of-type(36) { transform: rotateZ(calc(6deg * 36)); }
section:nth-of-type(37) { transform: rotateZ(calc(6deg * 37)); }
section:nth-of-type(38) { transform: rotateZ(calc(6deg * 38)); }
section:nth-of-type(39) { transform: rotateZ(calc(6deg * 39)); }
section:nth-of-type(40) { transform: rotateZ(calc(6deg * 40)); }
section:nth-of-type(41) { transform: rotateZ(calc(6deg * 41)); }
section:nth-of-type(42) { transform: rotateZ(calc(6deg * 42)); }
section:nth-of-type(43) { transform: rotateZ(calc(6deg * 43)); }
section:nth-of-type(44) { transform: rotateZ(calc(6deg * 44)); }
section:nth-of-type(45) { transform: rotateZ(calc(6deg * 45)); }
section:nth-of-type(46) {transform: rotateZ(calc(6deg * 46)); }
section:nth-of-type(47) { transform: rotateZ(calc(6deg * 47)); }
section:nth-of-type(48) { transform: rotateZ(calc(6deg * 48)); }
section:nth-of-type(49) { transform: rotateZ(calc(6deg * 49)); }
section:nth-of-type(50) { transform: rotateZ(calc(6deg * 50)); }
section:nth-of-type(51) { transform: rotateZ(calc(6deg * 51)); }
section:nth-of-type(52) { transform: rotateZ(calc(6deg * 52)); }
section:nth-of-type(53) { transform: rotateZ(calc(6deg * 53)); }
section:nth-of-type(54) { transform: rotateZ(calc(6deg * 54)); }
section:nth-of-type(55) { transform: rotateZ(calc(6deg * 55)); }
section:nth-of-type(56) { transform: rotateZ(calc(6deg * 56)); }
section:nth-of-type(57) { transform: rotateZ(calc(6deg * 57)); }
section:nth-of-type(58) { transform: rotateZ(calc(6deg * 58)); }
section:nth-of-type(59) { transform: rotateZ(calc(6deg * 59)); }
section:nth-of-type(60) { transform: rotateZ(calc(6deg * 60)); }

@keyframes time {
  to { transform: rotateZ(360deg); }
}
</style>
