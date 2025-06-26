<template>
  <div :class="$style.container">
    <div :class="$style.title">Users</div>
    <div v-if="loading" style="text-align:center; padding:2rem;">Loading...</div>
    <div v-else-if="error" style="text-align:center; color:#e11d48; padding:2rem;">{{ error }}</div>
    <template v-else>
      <table :class="$style.table">
        <thead>
          <tr>
            <th>NAME / EMAIL</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
            <th>WEBSITE</th>
            <th>COMPANY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" @click="openModal(user)" :style="{ cursor: 'pointer' }">
            <td :data-label="'NAME / EMAIL'">
              <div>{{ user.name }}</div>
              <a :href="`mailto:${user.email}`" :class="$style.emailLink" @click.stop>{{ user.email }}</a>
            </td>
            <td :data-label="'ADDRESS'">
              {{ user.address.city }}, {{ user.address.street }}, {{ user.address.suite }}
            </td>
            <td :data-label="'PHONE'">{{ user.phone }}</td>
            <td :data-label="'WEBSITE'">
              <a :href="`http://${user.website}`" target="_blank" rel="noopener noreferrer" :class="$style.websiteLink" @click.stop>{{ user.website }}</a>
            </td>
            <td :data-label="'COMPANY'">{{ user.company.name }}</td>
            <td :data-label="'ACTION'">
              <span :class="$style.actionIcon" @click.stop="deleteUser(user.id)" role="button" aria-label="Delete user">&#10005;</span>
            </td>
          </tr>
        </tbody>
      </table>
      <UserModal v-if="selectedUser" :user="selectedUser" :onClose="closeModal" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '../types/user.types';
import UserModal from './UserModal.vue';

const users = ref<User[]>([]);
const loading = ref(true);
const error = ref('');
const selectedUser = ref<User | null>(null);

const fetchUsers = async () => {
  loading.value = true;
  error.value = '';
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Failed to fetch users');
    const data = await res.json();
    users.value = data;
  } catch (e) {
    error.value = 'Error loading users.';
  } finally {
    loading.value = false;
  }
};

const openModal = (user: User) => {
  selectedUser.value = user;
};

const closeModal = () => {
  selectedUser.value = null;
};

const deleteUser = (id: number) => {
  users.value = users.value.filter(u => u.id !== id);
};

fetchUsers();
</script>

<style module src="./UserTable.module.css" /> 