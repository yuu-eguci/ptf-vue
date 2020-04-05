<template>
  <div class="default">
    <Navbar/>
    <h1>Sign In page</h1>
    <button @click="setToken()">Sign In</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'SignIn',
  components: {
    Navbar,
  },
  methods: {
    // Vuex の store にトークンを格納します。
    setToken () {
      this.$store.commit('auth/create', 'new-token-xxxx-xxxx')
      // 取得はこう。
      // console.info(this.$store.getters['auth/authToken'])
      this.$router.push({ name: 'SignInUserOnly' })
    },
  },
}
</script>
