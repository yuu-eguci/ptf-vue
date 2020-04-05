<template>
  <div class="ptf">
    <!-- Hero area -->
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="light">
      <template v-slot:header>
        I'm<br>
        Flexible
      </template>

      <template v-slot:lead>
        {{ $t('ptf.jumbotron-description') }}
      </template>

      <hr class="my-4">

      <b-form-group label="Select your locale">
        <b-form-radio-group
          v-model="$i18n.locale"
          :options="this.selectableLocales"
          buttons
          button-variant="outline-light"
          @change="setLocale"
        ></b-form-radio-group>
      </b-form-group>
    </b-jumbotron>

    <!-- I develop -->
    <!-- I draw -->
    <!-- I run -->
    <!-- Other interests -->
    <!-- Writtern By -->

    <!-- テスト用ボタンです。 -->
    <b-button @click="foo()">Button</b-button>
  </div>
</template>

<script>
export default {
  name: 'Ptf',
  components: {
  },
  data() {
    return {
      // 選択可能な locale 一覧です。キー名 text, value は固定です。 b-form-radio-group :options に渡すため。
      selectableLocales: [
        { text: 'English', value: 'en' },
        { text: '日本語', value: 'ja' },
        { text: 'Română', value: 'ro' },
      ],
    }
  },
  methods: {
    // どこのドキュメントにも書いていないのだが、
    // b-form-radio-group @change に指定した関数の引数には選択された value が入っているようだ(謎)。
    setLocale (selectedLocale) {
      this.$store.commit('i18n/set', selectedLocale)
    },

    // テスト用メソッドです。
    foo () {
      console.info({ currentI18nLocale: this.$i18n.locale, currentStoreI18nLocale: this.$store.getters['i18n/locale']})
    },
  },
}
</script>

<style scoped>
</style>
