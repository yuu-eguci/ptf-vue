<template>
  <div class="default">
    <Navbar/>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld :msg="$t('home.message')"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Navbar,
  }
}
</script>
