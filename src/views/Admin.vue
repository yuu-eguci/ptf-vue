<template>
  <div class="admin">
    <Navbar/>
    <h1>This is admin page.</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Admin',
  components: {
    Navbar,
  }
}
</script>
