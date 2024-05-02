<script>
import { reviewApiService } from '../../../review/services/review-api.service.js';
import LawyerList from "../lawyer-list/lawyer-list.component.vue";

export default {
  name: "reviews",
  components:{
    'lawyer-list': LawyerList
  },
  data() {
    return {
      reviews: [],
      searchTerm: '',
      legalSupportReviews: [],
      consultationReviews: [],
    }
  },
  created() {
    reviewApiService.getAll().then(response => {
      this.reviews = response.data;
      this.legalSupportReviews = this.reviews.filter(review => review.rType.includes("Legal Service"));
      this.consultationReviews = this.reviews.filter(review => review.rType.includes("Consultation"));
    }).catch(e => {
      console.log(e);
    });
  },
  methods:{
    lawyerName(id){
      let lawyerA = LawyerList.lawyers.filter(lawyer => lawyer.id.includes(id));
      return lawyerA[0].name;
    }
  }
}
</script>

<template>
  <div class="review-lists">
    <div class="legal-support-container">
      <h2>Legal Services</h2>
      <div v-for="(review) in legalSupportReviews" :key="review.id" class="card-container flex-container">
        <pv-card class="card-item flex-item">
          <template #title>
            {{ review.time.toString() }}
          </template>
          <template #content>
            <p>{{ lawyerName(review.lawyerId) }} </p>
            <p>Costs: {{ review.price }} </p>
            <p>Service Description:</p>
            <p>{{ review.description }}</p>
          </template>
        </pv-card>
      </div>
    </div>
    <div class="consultation-container">
      <h2>Consultations</h2>
      <div v-for="(review) in consultationReviews" :key="review.id" class="card-container flex-container">
        <pv-card class="card-item flex-item">
          <template #title>
            {{ review.time.toString() }}
          </template>
          <template #content>
            <p>{{ lawyerName(review.lawyerId) }} </p>
            <p>Costs: {{ review.price }} </p>
            <p>Lawyer's Recommendation:</p>
            <p>{{ review.description }}</p>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-lists {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.legal-support-container {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.consultation-container {
  display: flex;
  flex-direction: row;
  gap: 15px;
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

</style>