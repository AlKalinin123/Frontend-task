<template>
  <div :class="$style.overlay" @click.self="onClose" tabindex="-1">
    <div :class="$style.modal" ref="modalRef">
      <div :class="$style.header">
        <div>
          <div :class="$style.name">{{ user.name }}</div>
          <a :href="`mailto:${user.email}`" :class="$style.email">{{ user.email }}</a>
        </div>
        <span :class="$style.closeIcon" @click="onClose" role="button" aria-label="Close modal">&#10005;</span>
      </div>
      <div :class="$style.section">
        <div :class="$style.sectionTitle">Address</div>
        <div :class="$style.sectionContent">
          {{ user.address.street }}, {{ user.address.suite }}<br />
          {{ user.address.city }}, {{ user.address.zipcode }}<br />
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}`"
            target="_blank"
            rel="noopener noreferrer"
            :class="$style.link"
          >View on map</a>
        </div>
      </div>
      <div :class="$style.section">
        <div :class="$style.sectionTitle">Contact</div>
        <div :class="$style.sectionContent">
          <div><strong>Phone:</strong> {{ user.phone }}</div>
          <div>
            <strong>Website:</strong>
            <a :href="`http://${user.website}`" target="_blank" rel="noopener noreferrer" :class="$style.link">
              {{ user.website }}
            </a>
          </div>
        </div>
      </div>
      <div :class="$style.section">
        <div :class="$style.sectionTitle">Company</div>
        <div :class="$style.sectionContent">
          <div><strong>Name:</strong> {{ user.company.name }}</div>
          <div><strong>Catchphrase:</strong> {{ user.company.catchPhrase }}</div>
          <div><strong>Business:</strong> {{ user.company.bs }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import type { User } from '../types/user.types';

const props = defineProps<{
  user: User;
  onClose: () => void;
}>();

const modalRef = ref<HTMLElement | null>(null);

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    props.onClose();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
  // Focus modal for accessibility
  modalRef.value?.focus();
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style module src="./UserModal.module.css" /> 