<template>
  <div>
    <FirstSection title=" عن المتجر " description="تعرف على قصتنا ورؤيتنا وقيمنا" />
    <AboutUsSection/>
  </div>
</template>

<script>
import FirstSection from '../Component/shared/FirstSection.vue'
import AboutUsSection from '../Component/shared/AboutUsSection.vue'

export default {
  name: 'AboutUsPage',
  components: {
    FirstSection,
    AboutUsSection
  }
}
</script>
