<template>
  <div :class="$style.footer">
    <div :class="$style.footerInner">
      <a
        href="https://sellpixels.com"
        target="_blank"
        rel="noopener noreferrer"
        :class="$style.logo"
      >
        SELLPIXELS
        <span></span>
      </a>
      <br />
      <p class="mb-0">
        Copyright © 2017-2020 Mdtk Soft |
        <a
          href="https://www.mediatec.org/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >Privacy Policy</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "./style.module.scss";
</style>
