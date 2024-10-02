<script lang="ts" setup>
import Join from '@/components/Join.vue'
import IntroAbout from '@/components/intro/About.vue'
import IntroWhyPaidRelay from '@/components/intro/WhyPaidRelay.vue'
import IntroWhyBvRelay from '@/components/intro/WhyBvRelay.vue'
import IntroWhitelisting from '@/components/intro/Whitelisting.vue'
import IntroAdmission from '@/components/intro/Admission.vue'
</script>

<template>
  <section class="d-flex align-items-center text-center justify-content-center bg-background"
    style="height: 90vh; z-index: 1;" id="join">
    <Join />
  </section>
  <div class="row justify-content-center">
    <div class="col col-md-10 col-lg-6">
      <section class="d-flex justify-content-center py-2 px-2 py-md-5 px-md-5" id="about">
        <IntroAbout />
      </section>
      <img src="@/assets/blue-spark.webp" class="position-absolute top-250 start-40 opacity-75 translate-middle"
        style="z-index: -1;">
      <section class="d-flex justify-content-center py-2 px-2 py-md-5 px-md-5" id="whyPaidRelay">
        <IntroWhyPaidRelay />
      </section>
      <section class="d-flex justify-content-center py-2 px-2 py-md-5 px-md-5" id="whyBvRelay">
        <IntroWhyBvRelay />
      </section>
      <section class="d-flex justify-content-center py-2 px-2 py-md-5 px-md-5" id="whitelisting">
        <IntroWhitelisting />
      </section>
      <section class="d-flex justify-content-center py-2 px-2 py-md-5 px-md-5" id="admission">
        <IntroAdmission />
      </section>
    </div>
  </div>
</template>