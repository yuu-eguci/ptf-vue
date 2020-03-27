<template>
  <div class="about">
    <Navbar/>
    <h1>{{$t('about.message')}}</h1>
    <h2>{{$tc('about.wolves', 0)}}</h2>
    <h2>{{$tc('about.wolves', 1)}}</h2>
    <h2>{{$tc('about.wolves', 5)}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'About',
  components: {
    Navbar,
  }
}
</script>
