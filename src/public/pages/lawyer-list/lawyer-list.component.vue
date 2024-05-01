<script>
import { lawyerApiService } from '../../../lawyer/services/lawyer-api.service.js';
import LawyerProfile from "./lawyer-profile.component.vue";

export default {
  name: "abogados",
  components: {
    'lawyer-profile': LawyerProfile
  },
  data() {
    return {
      lawyers: [],
      searchTerm: '',
      filteredLawyers: [],
      selectedLawyerId: null
    }
  },
  created() {
    lawyerApiService.getAll().then(response => {
      this.lawyers = response.data;
      this.filteredLawyers = this.lawyers;
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
        this.filteredLawyers = this.lawyers.filter(lawyer => lawyer.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      } else {
        this.filteredLawyers = this.lawyers;
      }
    },
    selectLawyer(id) {
      this.selectedLawyerId = id;
    },
    closeProfile() {
      this.selectedLawyerId = null;
    }
  }
}
</script>

<template>
  <div class="filter-container">
    <div class="button-search-container">
      <pv-button label="Filters" class="filter-button" @click="openFilterDialog"></pv-button>
      <div class="search-container">
        <div class="p-inputgroup">
          <input type="text" placeholder="Search" v-model="searchTerm" />
        </div>
      </div>
    </div>
  </div>
  <div class="parent-container">
    <div v-for="(lawyer, index) in filteredLawyers" :key="lawyer.id" class="card-container flex-container">
      <pv-card class="p-mr-2 card-item flex-item">
        <template #content>
          <img :src="lawyer.urlToImage" alt="Lawyer Image" class="lawyer-image">
        </template>
      </pv-card>
      <pv-card class="card-item flex-item">
        <template #title>
          {{ lawyer.name }}
        </template>
        <template #content>
          <p>Years of Experience: {{ lawyer.yearsOfExperience }}</p>
          <p>Price: {{ lawyer.price }}</p>
          <pv-button label="Review"  @click="selectLawyer(lawyer.id)" class="p-mt-2"></pv-button>
        </template>
      </pv-card>
    </div>
    <lawyer-profile :lawyerId="selectedLawyerId" @close="closeProfile"></lawyer-profile>
  </div>
</template>

<style scoped>
.lawyer-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.parent-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-container {
  flex: 0 0 48%;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 15px;
  margin-top: 10px;
}

.card-item {
  position: relative;
  overflow: hidden;
  background-color:#f2c6ac;
}

.flex-container {
  display: flex;
  flex-direction: row;
}

.flex-item {
  flex: 1;
}
.p-mt-2 {
  background-color:#f39979;
}
.filter-container {
  margin-top:120px;
  margin-bottom:20px;
}
.button-search-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}
.p-inputgroup {
  background-color: white;
}
.search-container {
  width: 100%;
  flex-grow: 1;
}

.p-inputgroup input {
  width: 100%;
  border: none ;
  height: 40px;
}

.search-input {
  width: 100%;
}
.filter-button {
  color : #000000;
  background-color: #f2eedb;
}
</style>