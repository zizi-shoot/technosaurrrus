<template>
  <div class="loading">
    <svg
      height="128px"
      preserveAspectRatio="xMidYMid"
      style="margin: auto; background-image: none; display: block; shape-rendering: auto;"
      viewBox="0 0 100 100"
      width="128px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" fill="none" r="28" stroke="#9efe02"
              stroke-dasharray="43.982297150257104 43.982297150257104" stroke-linecap="round" stroke-width="7">
        <animateTransform attributeName="transform" dur="0.9900990099009901s" keyTimes="0;1" repeatCount="indefinite"
                          type="rotate" values="0 50 50;360 50 50"></animateTransform>
      </circle>
      <circle cx="50" cy="50" fill="none" r="20" stroke="#272727"
              stroke-dasharray="31.41592653589793 31.41592653589793" stroke-dashoffset="31.41592653589793"
              stroke-linecap="round"
              stroke-width="7">
        <animateTransform attributeName="transform" dur="0.9900990099009901s" keyTimes="0;1" repeatCount="indefinite"
                          type="rotate" values="0 50 50;-360 50 50"></animateTransform>
      </circle>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255 255 255 / 70%);
}
</style>
