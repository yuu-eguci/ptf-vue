<template>
  <div class="signin">
    <Navbar/>
    <h1>Sign In page</h1>
    <button>Sign In</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'SignIn',
  components: {
    Navbar,
  }
}
</script>
