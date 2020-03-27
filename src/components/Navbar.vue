<template>
  <div id="nav">
    <!-- 描画された locale は this.$i18n.locale が変更されるとリアルタイムに変更されます。 -->
    <router-link :to="'/'+this.$i18n.locale">Home</router-link> |
    <router-link :to="'/'+this.$i18n.locale+'/about'">About</router-link>
    <!-- $i18n.locale を変更する select です。 -->
    <select v-model="$i18n.locale">
      <!-- :key は 2.2.0 以降必須。 -->
      <option v-for="lang in ['en', 'ja', 'ro']" :key="lang.id" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
