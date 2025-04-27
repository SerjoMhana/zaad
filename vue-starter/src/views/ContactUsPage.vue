<template>
  <div>
    <FirstSection title="تواصل معنا" description="للتواصل مع فريق الدعم الفني يرجى ملء النموذج" />
    <ContactForm/>
  </div>
</template>

<script>
import FirstSection from '../Component/shared/FirstSection.vue'
import ContactForm from '../Component/shared/ContactForm.vue'

export default {
  name: 'ContactUsPage',
  components: {
    FirstSection,
    ContactForm
  }
}
</script>
