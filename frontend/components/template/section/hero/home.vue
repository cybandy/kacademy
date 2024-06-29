<script setup lang='ts'>
defineProps({
  title: {
    type: String,
    default: 'better future for your kids',
  },
  description: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  img: {
    type: String,
    default: 'https://images.pexels.com/photos/10638208/pexels-photo-10638208.jpeg',
  },
})

const imgOptimizer = useImage()
const avatars = [
  {
    src: imgOptimizer('https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2', { format: 'webp', provider: 'weserv' }),
    alt: 'Kendra',
  },
  {
    src: imgOptimizer('https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2', { format: 'webp', provider: 'weserv' }),
    alt: 'Antoinette',
  },
  {
    src: imgOptimizer('https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2', { format: 'webp', provider: 'weserv' }),
    alt: 'Sam Raphael',
  },
  {
    src: imgOptimizer('https://images.pexels.com/photos/227294/pexels-photo-227294.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2', { format: 'webp', provider: 'weserv' }),
    alt: 'Jewel',
  },
  {
    src: imgOptimizer('https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2', { format: 'webp', provider: 'weserv' }),
    alt: 'Kendra',
  },
  {
    src: imgOptimizer('https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg', { format: 'webp', provider: 'weserv' }),
    alt: 'Antoinette',
  },
  {
    src: imgOptimizer('https://images.unsplash.com/photo-1607990281513-2c110a25bd8c', { format: 'webp', provider: 'weserv' }),
    alt: 'Antoinette',
  },
  {
    src: imgOptimizer('https://images.pexels.com/photos/227294/pexels-photo-227294.jpeg', { format: 'webp', provider: 'weserv' }),
    alt: 'Jewel',
  },
  {
    src: imgOptimizer('https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', { format: 'webp', provider: 'weserv' }),
    alt: 'Kendra',
  },
  {
    src: imgOptimizer('https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg', { format: 'webp', provider: 'weserv' }),
    alt: 'Antoinette',
  },
  {
    src: imgOptimizer('https://images.unsplash.com/photo-1607990281513-2c110a25bd8c', { format: 'webp', provider: 'weserv' }),
    alt: 'Antoinette',
  },
  {
    src: imgOptimizer('https://images.pexels.com/photos/227294/pexels-photo-227294.jpeg', { format: 'webp', provider: 'weserv' }),
    alt: 'Jewel',
  },

]

const xtics = [
  { title: 'Custom', description: '100% tailor-made courses' },
  { title: 'Written', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'Practice', description: 'Lorem ipsum dolor sit amet.' },
]
</script>

<template>
  <div class="relative section grid items-center gap-5 grid-cols-1 md:grid-cols-2">
    <div class="space-y-8">
      <div class="space-y-4">
        <h1 class="font-bold text-4xl xs:text-5xl md:text-6xl text-primary-900 capitalize">
          {{ title }}
        </h1>
        <p class="text-base font-medium text-primary-950 w-full md:w-3/4 xl:w-5/6">
          {{ description }}
        </p>
      </div>

      <div class="flex items-center gap-5">
        <UButton class="button">
          Get Started
        </UButton>
        <UButton
          class="button"
          variant="outline"
        >
          Learn More
        </UButton>
      </div>

      <div class="flex items-center">
        <UAvatarGroup
          size="sm"
          :max="4"
        >
          <UAvatar
            v-for="(teacher, k) of avatars"
            :key="k"
            :src="teacher.src"
            :alt="teacher.alt"
            crossorigin="anonymous"
          />
        </UAvatarGroup>
        <span class="text-sm text-primary-950">Teachers</span>
      </div>
    </div>

    <div>
      <NuxtImg
        :src="img"
        format="webp"
        fit="fill"
        provider="weserv"
        crossorigin="anonymous"
        class="md:h-[625px]"
      />
    </div>

    <div class="hidden md:absolute bottom-[90px] w-full md:flex gap-5 items-center justify-between bg-white/70">
      <CyUiTitleDesc
        title="Our Partners"
        description="Happy students and parents"
      />
      <div class="flex flex-wrap md:flex-nowrap gap-4">
        <CyUiTitleDesc
          v-for="(x, i) of xtics"
          :key="i"
          :title="x.title"
          :description="x.description"
        />
      </div>
    </div>
  </div>
</template>
