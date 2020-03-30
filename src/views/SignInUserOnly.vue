<template>
  <div class="signinuseronly">
    <Navbar/>
    <h1>Sign In User Only page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'SignInUserOnly',
  components: {
    Navbar,
  }
}
</script>
