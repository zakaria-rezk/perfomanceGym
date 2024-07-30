<template>
  <div class="hero d-flex">
    <div class="d-flex hero-imag">
      <div class="">
        <img src="../assets/imges/sport-men-slider-1.png" alt="" ref="hero" />
      </div>
      <div class="text-white align-self-center overflow">
        <p class="text-h3 text-uppercase font-weight-medium line-break title">
          <span class="text-black"> Pro</span> Performance <br />online store
        </p>
         <p class="text-uppercase  fakeTitle">
          performance gym
        </p> 
      </div>
    </div>
    <div class="wave">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style="
          position: absolute;
          right: 100px;
          width: 100%;
          transform: scale(2);
        "
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,128L34.3,122.7C68.6,117,137,107,206,128C274.3,149,343,203,411,208C480,213,549,171,617,154.7C685.7,139,754,149,823,160C891.4,171,960,181,1029,165.3C1097.1,149,1166,107,1234,112C1302.9,117,1371,171,1406,197.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style="
          position: absolute;
          right: 100px;
          width: 100%;
          transform: scale(1.6);
        "
      >
        <path
          fill="#fff"
          fill-opacity="0.5"
          d="M0,160L26.7,149.3C53.3,139,107,117,160,138.7C213.3,160,267,224,320,218.7C373.3,213,427,139,480,138.7C533.3,139,587,213,640,234.7C693.3,256,747,224,800,213.3C853.3,203,907,213,960,213.3C1013.3,213,1067,203,1120,218.7C1173.3,235,1227,277,1280,266.7C1333.3,256,1387,192,1413,160L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style="
          position: absolute;
          right: 100px;
          width: 100%;
          transform: scale(1.6);
        "
      >
        <path
          fill="#fff"
          fill-opacity="0.3"
          d="M0,128L13.3,144C26.7,160,53,192,80,176C106.7,160,133,96,160,106.7C186.7,117,213,203,240,250.7C266.7,299,293,309,320,261.3C346.7,213,373,107,400,90.7C426.7,75,453,149,480,181.3C506.7,213,533,203,560,192C586.7,181,613,171,640,138.7C666.7,107,693,53,720,64C746.7,75,773,149,800,181.3C826.7,213,853,203,880,192C906.7,181,933,171,960,144C986.7,117,1013,75,1040,80C1066.7,85,1093,139,1120,154.7C1146.7,171,1173,149,1200,122.7C1226.7,96,1253,64,1280,53.3C1306.7,43,1333,53,1360,101.3C1386.7,149,1413,235,1427,277.3L1440,320L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup>
const hero = ref(null);
const handelousemove = (e) => {
  if (!e.srcElement.closest(".hero")) return;
  const containerWidth = hero.value.clientWidth;
  if (
    +e.clientX - +containerWidth <= 10 &&
    +e.clientX - +containerWidth >= -10
  ) {
    hero.value.style.transform = `translateX(${e.clientX - containerWidth}px)`;
  }
  if (
    +e.clientY - +containerWidth <= 10 &&
    +e.clientY - +containerWidth >= -10
  ) {
    hero.value.style.transform = `translateY(${e.clientY - containerWidth}px)`;
  }
};
onMounted(() => {
  window.addEventListener("mousemove", handelousemove);
});
</script>
<style scoped>
.hero {
  position: relative;
  top: -50px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden !important;
  background: linear-gradient(to top, #ef6c00, #ffa726);
  width: 100%;
  height: 100vh;
}
.hero-imag {
  cursor: pointer !important;
}
.line-break {
  line-height: 1.4;
}

.fakeTitle {
  position: absolute;
  opacity: 0.1;
  font-size: 10rem !important;
  scale: (3) !important ;
 
  bottom: 10%;
  left: 10%;
}
.wave {
  position: relative;
  bottom: 25%;
  flex-grow: 1;
  z-index: 111;
}
img {
  position: relative;
  max-width: 100%;
  perspective: 100px;
  height: 100vh;
  transition: all 1s ease-in;
}

@media (min-width: 768px) {
  .hero {
    padding-left: 10%;
  }
  .fakeTitle{
    font-size:2rem ;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .wave {
    bottom: 25% !important;
  }
}
@media (min-width: 1430px) {
  .wave {
    bottom: 15% !important;
  }
}
@media (max-width: 760px) {
  .wave {
    bottom: 15%;
  }
  .title {
    text-align: center;
    position: absolute;
    bottom: 250px;
    right: 50%;
    left: 20%;
    flex-direction: column;
    font-weight: 800;
    font-size: 2rem !important;
  }
}
</style>
