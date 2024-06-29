<script setup lang='ts'>
const menus = [
  {
    title: 'Legal',
    show: {
      desktop: true,
      mobile: false,
      tablet: true,
    },
    links: [
      {
        label: 'About Us',
        to: '/about-us',
      },
      {
        label: 'Terms & Condition',
        // to:'/about-us'
      },
      {
        label: 'We are hiring',
        // to:'/about-us'
      },
      {
        label: 'Blog',
        // to:'/about-us'
      },
    ],
  },
  {
    title: 'Features',
    show: {
      desktop: true,
      mobile: false,
      tablet: false,
    },
    links: [
      {
        label: 'Courses',
        // to: '/about-us'
      },
      {
        label: 'Our teachers',
        // to:'/about-us'
      },
      {
        label: 'Unlimited support',
        // to:'/about-us'
      },
      {
        label: 'Live class',
        // to:'/about-us'
      },
    ],
  },
  {
    title: 'Get In Touch',
    show: {
      desktop: true,
      mobile: true,
      tablet: true,
    },
    links: [
      {
        label: '(00) 123-456-789',
        // to: '/about-us'
      },
      {
        label: 'Via Cacchi 16 Roma',
        // to:'/about-us'
      },
      {
        label: 'info@kacademy.com',
        // to:'/about-us'
      },

    ],
  },

]
</script>

<template>
  <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-between">
    <div class="flex flex-col gap-5">
      <CyUiLogo />
      <p class="text-sm font-medium text-primary-950">
        We offer high quality English tutoring education for your kids. Contact or visit us today for more information
      </p>
    </div>

    <template
      v-for="(item, i) of menus"
      :key="i"
    >
      <TemplateFooterMenu
        :title="item.title"
        :links="item.links"
        :class="[!item.show.mobile && 'hidden sm:flex', !item.show.tablet && 'md:hidden lg:flex', !item.show.desktop && 'lg:hidden']"
      />
    </template>
  </div>
</template>
