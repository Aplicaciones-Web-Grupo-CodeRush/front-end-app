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
      console.log(response.data);
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
    },
    openUrl(url) {
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }

      window.open(url, '_blank');
    }
  },
}
</script>

<template>
  <div class="filter-container">
    <div class="button-search-container">
      <input type="text" placeholder="Search" v-model="searchTerm" />
    </div>
  </div>
  <div class="resource-container">
    <div v-for="(resource) in filteredResources" :key="resource.id" class="card-container">
      <div class="card-item">
        <h2>{{ resource.title }}</h2>
        <p>Author: {{ resource.author }}</p>
        <p>Content Type: {{ resource.contentType }}</p>
        <p>Url: {{ resource.videoUrl }}</p>
        <pv-button class="view-more-button" label="View More" @click="openUrl(resource.videoUrl)"></pv-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  margin-top: 180px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #a67360;
  border-radius: 10px;
  width: 90%;
}

.button-search-container input[type="text"] {
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
}

.button-search-container input[type="text"]:focus {
  outline: none;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.1);
}

.resource-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
}

.card-container {
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
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
  margin-bottom: 12px;
}
.view-more-button {
  background-color: #F29979;
}
</style>