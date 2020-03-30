<template>
  <div class="signout">
    <Navbar/>
    <h1>Sign Out page</h1>
    <button>Sign Out</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'SignOut',
  components: {
    Navbar,
  }
}
</script>
