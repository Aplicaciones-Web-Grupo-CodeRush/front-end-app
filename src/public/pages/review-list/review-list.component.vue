<script>
import { reviewApiService } from '../../../review/services/review-api.service.js';
import { lawyerApiService } from '../../../lawyer/services/lawyer-api.service.js';
import {Lawyer} from "../../../lawyer/model/lawyer.entity.js";
import SubscriptionPayComponent from "../subscription/subscription-pay.component.vue";

export default {
  name: "reviews",
  components: {
    'subscription-pay': SubscriptionPayComponent
  },
  data() {
    return {
      reviews: [],
      searchTerm: '',
      legalSupportReviews: [],
      consultationReviews: [],
      lawyer: new Lawyer(),
      dialogVisible: false
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
    lawyerGet(id){
      const service = new lawyerApiService();
      service.getLawyerDetails(id).then(response => {
        this.lawyer = response.data;
      });
    },
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
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
            <div  class="card-title">
              Date: {{ review.time.substr(11,8)}}, {{review.time.substr(0,9)}}<br>
              By: {{ review.lawyerName }}
            </div>
          </template>
          <template #content>
            <p>Costs: {{ review.price }} </p>
            <h3>Service Description:</h3>
            <p>{{ review.description }}</p>
          </template>
        </pv-card>
      </div>
      <div class="redirects">
        <router-link to="/abogados">
          <pv-button class="re-button">Request Legal Case</pv-button>
        </router-link>
      </div>
    </div>
    <div class="consultation-container">
      <h2>Consultations</h2>
      <div v-for="(review) in consultationReviews" :key="review.id" class="card-container flex-container">
        <pv-card class="card-item flex-item">
          <template #title class="card-title">
            <div  class="card-title">
              Date: {{ review.time.substr(11,8)}}, {{review.time.substr(0,9)}}<br>
              By: {{ review.lawyerName }}
            </div>
          </template>
          <template #content>
            <p>Costs: {{ review.price }} </p>
            <h3>Lawyer's Recommendation:</h3>
            <p>{{ review.description }}</p>
          </template>
        </pv-card>
      </div>
      <div class="redirects">
        <pv-button class="re-button" @click="openDialog">Make a Consultation</pv-button>
        <subscription-pay v-if="dialogVisible" @close="closeDialog"></subscription-pay>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-lists {
  display: grid;
  flex: 1 0 20%;
  grid-template-columns: repeat(2, 1fr);
  justify-items:center;
  flex-direction: row;
  gap: 30px;
}

.legal-support-container {
  max-width: 400px;
  max-height: 400px;
  min-width: 400px;
  min-height: 400px;
  align-items:center;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.review-lists h2 {
  border-radius: 25px;
  background-color: #f29979;
  padding: 20px;
  width: 200px;
  height: 150px;
  text-align: center;
  background-position: center;
}

.consultation-container {
  max-width: 400px;
  max-height: 400px;
  min-width: 400px;
  min-height: 400px;
  align-items:center;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card-container {

  flex: 0 0 48%;
  margin-bottom: 15px;
  margin-top: 10px;
  text-align: justify;
}

.card-title {
  padding: 10px;
  background-color: #f29979;
}

.card-item {
  background-color:#F2EFDC;
  max-width: 400px;
  max-height: 400px;
  min-width: 400px;
  min-height: 400px;
  position: relative;
  overflow: hidden;
}

.flex-container {
  display: flex;
  flex-direction: row;
}

.flex-item {
  flex: 1;
}
.redirects{
  justify-items:center;
  flex-direction: row;
}

.re-button {
  background-color: #F29979;
  color: #000000;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 30px;
  padding-left: 30px;
  margin-bottom: 30px;
  border-radius: 30px;
  font-size: 18px;
}

</style>