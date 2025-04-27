<template>
  <div>
    <FirstSection title=" عن المتجر " description="للتواصل مع فريق الدعم الفني يرجى ملء النموذج" />
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
