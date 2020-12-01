<template>
  <div :class="$style.topbar">
    <div class="mr-4">
      <cui-fav-pages />
    </div>
    <div class="mr-auto">
      <cui-search />
    </div>
    <div class="mr-4 d-none d-md-block">
      <cui-issues-history />
    </div>
    <div class="mb-0 mr-auto d-xl-block d-none">
      <cui-project-management />
    </div>
    <div class="mr-4 d-none d-sm-block">
      <cui-language-switcher />
    </div>
    <div class="mr-4 d-none d-sm-block">
      <cui-actions />
    </div>
    <div>
      <cui-user-menu />
    </div>
  </div>
</template>

<script>
import CuiIssuesHistory from './IssuesHistory'
import CuiProjectManagement from './ProjectManagement'
import CuiSearch from './Search'
import CuiLanguageSwitcher from './LanguageSwitcher'
import CuiActions from './Actions'
import CuiUserMenu from './UserMenu'
import CuiFavPages from './FavPages'

export default {
  components: {
    CuiIssuesHistory,
    CuiProjectManagement,
    CuiSearch,
    CuiLanguageSwitcher,
    CuiActions,
    CuiUserMenu,
    CuiFavPages,
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
