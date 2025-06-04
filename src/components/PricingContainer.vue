<template>
  <div class="min-h-screen bg-black py-8 px-6 sm:px-12">
    <!-- Header for the pricing section -->
    <h1 class="text-center text-[#FFFFFF] text-[40px] font-bold mb-12">Pricing</h1>

    <!-- Grid container for the pricing cards -->
    <div
      class="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-x-2 justify-items-center sm:justify-center p-5 w-[600px] mx-auto"
    >
      <!-- Loop through pricing plans data and render PricingCard for each -->
      <PricingCard
        v-for="card in pricingPlans"
        :key="card.plan"
        :plan="card.plan"
        :price="card.price"
        :features="card.features"
        :is-featured="card.isFeatured"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PricingCard from './PricingCard.vue';

// Define the interface for a single pricing plan object
interface PricingPlan {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean; // Optional property
}

// Data for the pricing cards
const pricingPlans: PricingPlan[] = [
  {
    plan: 'Basic',
    price: '100',
    features: ['50,000 Requests', '4 contributors', 'Up to 3 GB storage space'],
    isFeatured: false,
  },
  {
    plan: 'Pro',
    price: '200',
    features: ['100,000 Requests', '7 contributors', 'Up to 6 GB storage space'],
    isFeatured: true, // This card will have the featured color scheme
  },
  {
    plan: 'Expert',
    price: '500',
    features: ['200,000 Requests', '11 contributors', 'Up to 10 GB storage space'],
    isFeatured: false,
  },
];
</script>

<style scoped>
/* No scoped styles needed as Tailwind handles everything */
</style>