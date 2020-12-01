<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-breadcrumb :items="items2"></b-breadcrumb>
    <b-breadcrumb :items="items3"></b-breadcrumb>
  </div>
</template>
<script>
export default {
  name: 'KitBootstrapBreadcrumbExample',
  data() {
    return {
      items: [
        {
          text: 'Home',
          href: '#',
        },
      ],
      items2: [
        {
          text: 'Home',
          href: '#',
        },
        {
          text: 'Library',
          href: '#',
        },
      ],
      items3: [
        {
          text: 'Home',
          href: '#',
        },
        {
          text: 'Library',
          href: '#',
        },
        {
          text: 'Data',
          active: true,
        },
      ],
    }
  },
}
</script>
