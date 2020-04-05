<template>
  <div class="default">
    <Navbar/>
    <h1>Sign Out page</h1>
    <button @click="removeToken()">Sign Out</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'SignOut',
  components: {
    Navbar,
  },
  methods: {
    // Vuex の store からトークンを削除します。
    removeToken () {
      this.$store.commit('auth/destroy')
      // 取得はこう。
      // console.info(this.$store.getters['auth/authToken'])
      this.$router.push({ name: 'SignIn' })
    },
  },
}
</script>
