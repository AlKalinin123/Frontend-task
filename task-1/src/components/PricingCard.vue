<template>
  <div
    :class="[
      'relative flex flex-col justify-between items-center',
      'w-[200px] h-[330px]', // Card width and initial height
      'pt-8 px-4 pb-6', // Padding: roughly 32px top (pt-8), 16px sides (px-4), 24px bottom (pb-6)
      'transition-all duration-300 ease-in-out', // Smooth transitions for hover effects
      // Conditional background and text colors based on isFeatured prop
      {
        'bg-[#34495E] text-[#FFFFFF]': props.isFeatured, // Dark background, light text for featured card
        'bg-[#FFFFFF] text-[#34495E]': !props.isFeatured, // Light background, dark text for non-featured cards
      },
      // Hover effect classes (desktop only), avoiding layout shifts
      'hover:scale-[1.05] hover:-translate-y-[10px] hover:z-10'
    ]"
  >
    <!-- Card content container, centered -->
    <div class="flex flex-col items-center justify-center h-full w-full text-center">
      <!-- Plan Title -->
      <p class="text-base font-bold mb-0">{{ plan }}</p>
      <!-- Price Header -->
      <h2 class="text-[32px] font-bold mb-4">${{ price }}</h2>

      <!-- Features List -->
      <div class="flex-grow flex flex-col justify-center items-center w-full">
        <template v-for="(feature, index) in features" :key="index">
          <!-- Horizontal divider above each list item -->
          <hr :class="['w-full border-t', !isFeatured ? 'border-[#34495E]' : 'border-[#FFFFFF]']" />
          <p class="py-3 text-[12px] font-bold w-full">{{ feature }}</p>
        </template>
        <!-- Horizontal divider below the last list item -->
        <hr :class="['w-full border-t', !isFeatured ? 'border-[#34495E]' : 'border-[#FFFFFF]']" />
      </div>
    </div>

    <!-- Subscribe Button, positioned at the bottom -->
    <button
      :class="[
        'mt-auto px-4 py-2 rounded-md', // Padding 8px top/bottom (py-2), 16px sides (px-4)
        'font-bold text-[12px]', // Font size 12px, bold
        'transition-colors duration-300 ease-in-out', // Smooth color transitions
        'focus:outline-none focus:ring-2 focus:ring-offset-2', // Focus styles for accessibility
        // Normal button state colors based on card's isFeatured prop
        {
          'bg-[#34495E] text-[#FFFFFF]': props.isFeatured, // Dark button, light text if card is featured
          'bg-[#FFFFFF] text-[#34495E]': !props.isFeatured, // Light button, dark text if card is not featured
        },
        // Button hover state: reverses colors
        {
          'hover:bg-[#FFFFFF] hover:text-[#34495E]': props.isFeatured, // If card is featured, button goes light on hover
          'hover:bg-[#34495E] hover:text-[#FFFFFF]': !props.isFeatured, // If card is not featured, button goes dark on hover
        }
      ]"
    >
      SUBSCRIBE
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Define the props accepted by this component
const props = defineProps<{
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean; // Optional prop
}>();
</script>

<style scoped>
/* No scoped styles needed as Tailwind handles everything */
</style>