<script>
import { ResourceService } from '../../../educational-resource/services/resource.service.js';

export default {
  name: "educational-resources",
  data() {
    return {
      resources: [],
      searchTerm: '',
      filteredResources: [],
    }
  },
  created() {
    ResourceService.getAll().then(response => {
      this.resources = response.data;
      this.filteredResources = this.resources;
    }).catch(e => {
      console.log(e);
    });
  },
  watch: {
    searchTerm() {
      this.search();
    }
  },
  methods: {
    search() {
      if (this.searchTerm) {
        this.filteredResources = this.resources.filter(resource => resource.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
      } else {
        this.filteredResources = this.resources;
      }
    }
  }
}
</script>

<template>
  <div class="filter-container">
    <div class="button-search-container">
      <input type="text" placeholder="Search" v-model="searchTerm" />
    </div>
  </div>
  <div class="resource-container">
    <div v-for="(resource, index) in filteredResources" :key="resource.id" class="card-container">
      <div class="card-item">
        <h2>{{ resource.title }}</h2>
        <p>{{ resource.description }}</p>
        <p>Author ID: {{ resource.authorId }}</p>
        <p>Type: {{ resource.educationalResourceType }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>



.filter-container {
  margin-top: 120px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f2eedb;
  border-radius: 10px;
}

.button-search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.resource-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card-container {
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
}

.card-item {
  background-color: #fff;
  color: #333;
  padding: 20px;
}

.card-item h2 {
  margin-top: 0;
}

.card-item p {
  margin-bottom: 0;
}
</style>