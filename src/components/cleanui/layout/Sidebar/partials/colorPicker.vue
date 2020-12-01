<template>
  <div>
    <template v-for="item in colors">
      <a
        :key="item"
        href="javascript: void(0);"
        @click="colorPickerHandler(setting, item)"
        :class="{
          [$style.cui__sidebar__select__item]: true,
          [$style.cui__sidebar__select__item__active]: value === item,
          [$style.cui__sidebar__select__item__black]: item === 'dark',
          [$style.cui__sidebar__select__item__white]: item === 'white',
          [$style.cui__sidebar__select__item__gray]: item === 'gray',
          [$style.cui__sidebar__select__item__blue]: item === 'blue',
          [$style.cui__sidebar__select__item__img]: item === 'image',
        }"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    setting: String,
    value: String,
    colors: Array,
  },
  methods: {
    colorPickerHandler(setting, value) {
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
  },
}
</script>

<style lang="scss" module>
@import "../style.module.scss";
</style>
