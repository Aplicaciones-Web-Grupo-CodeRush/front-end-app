<script>
import { legalcaseApiService } from '../../../review/services/legalcase-api.service.js';
import { lawyerApiService } from '../../../lawyer/services/lawyer-api.service.js';
import {ReviewDetails} from "../../../review/model/legalcase.entity.js";
import { consultationApiService} from "../../../review/services/consultation-api.service.js";
import { Consultation } from "../../../review/model/consultation.entity.js";

export default {
  name: "reviews",
  data() {
    return {
      reviews: [],
      searchTerm: '',
      legalSupportReviews: [],
      consultation: [],
    }
  },
  created() {
    legalcaseApiService.getAll().then(response => {
      this.legalSupportReviews = response.data.map(review => new ReviewDetails(
          review.id,
          review.caseNumber,
          review.description,
          review.status
      ));
    }).catch(e => {
      console.log(e);
    });

    consultationApiService.getAll().then(response => {
      this.consultation = response.data.map(consultation => new Consultation(
          consultation.id,
          consultation.date,
          consultation.legalIssue,
          consultation.description,
          consultation.doctor.id,
          consultation.doctor.name,
          consultation.doctor.specialty,
          consultation.lawyer.id,
          consultation.lawyer.name,
          consultation.lawyer.specialty
      ));
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
    }
  }
}
</script>

<template>
  <div class="review-lists">
    <div class="legal-support-container">
      <h2>Legal Services</h2>
      <div v-for="(review, index) in legalSupportReviews" :key="review.id" class="card-container flex-container">
        <pv-card class="card-item flex-item">
          <template #title>
            <div  class="card-title">
              <!-- Date: {{ review.time.substr(11,8)}}, {{review.time.substr(0,9)}}<br>
              By: {{ review.lawyerName }} -->
              <p>Number of Case: {{ review.caseNumber}}</p>
            </div>
          </template>
          <template #content>
            <h3>Description</h3>
            <p>{{ review.description }} </p>
            <h3>Status</h3>
            <p>{{ review.status}}</p>
          </template>
        </pv-card>
      </div>
    </div>
    <div class="consultation-container">
      <h2>Consultations</h2>
      <div v-for="(review) in consultation" :key="review.id" class="card-container flex-container">
        <pv-card class="card-item flex-item">
          <template #title class="card-title">
            <div  class="card-title">
              <p> By: {{ review.doctor.name }} </p>
              <p> Specialty: {{ review.doctor.specialty }}</p>
            </div>
          </template>
          <template #content>
            <p>Legal Issue: {{ review.legalIssue }} </p>
            <p>Description: {{ review.description}}</p>
            <h3>Lawyer:</h3>
            <p>{{ review.lawyer.name }}</p>
            <p>{{ review.lawyer.specialty}}</p>
          </template>
        </pv-card>
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

</style>