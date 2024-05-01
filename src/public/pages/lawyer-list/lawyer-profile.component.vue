<script>
import { lawyerApiService } from "../../../lawyer/services/lawyer-api.service.js";

export default {
  name: "lawyers-profile",
  props: {
    lawyerId: String
  },
  data() {
    return {
      dialogVisible: false,
      lawyer: null,
    };
  },
  methods: {
    async loadLawyerDetails(id) {
      const service = new lawyerApiService();
      const response = await service.getLawyerDetails(id);
      this.lawyer = response.data;
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
      this.$emit('close');
    }
  },
  watch: {
    lawyerId: {
      immediate: true,
      handler: function (newId) {
        if (newId) {
          this.loadLawyerDetails(newId);
        }
      }
    }
  }
}

</script>

<template>
  <pv-dialog v-if="lawyer" :visible.sync="dialogVisible" :modal="true" :closable="false" class="p-dialog" >
    <template #header>
      <pv-button label="Close" @click="closeDialog" class="close-button"></pv-button>
    </template>
    <div class="card-content">
      <div class="card-upper">
        <div class="card-image">
          <img :src="lawyer.urlToImage" alt="Lawyer Picture">
        </div>
        <div class="card-details">
          <h2>{{lawyer.name}}</h2>
          <p>Speciality: {{lawyer.specialization}}</p>
          <p>Years of Experience: {{lawyer.yearsOfExperience}}</p>
          <p>Cases Wons: {{lawyer.casesWon}}</p>
          <p>Price: {{lawyer.price}}</p>
        </div>
      </div>
      <div class="card-lower">
        <h2>Contact Information:</h2>
        <div class="contact-info">
          <p>Phone: {{lawyer.phoneNumber}}</p>
          <p>Email: {{lawyer.email}}</p>
        </div>
      </div>
    </div>
  </pv-dialog>
</template>

<style scoped>
:deep(.p-dialog) {
  background-color: #a89226 !important;
  border-radius: 20px 20px 0 0;
}

.card-content {
  display: flex;
  flex-direction: column;
  background-color: #F2C6AC;
  border-radius: 18px;

}

.close-button {
  color : #000000;
  background-color: #f2eedb;
}

.card-upper {
  display: flex;
  padding: 20px;
  margin: 20px;
  flex-wrap: wrap;
  background-color: #F2EFDC;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0, 0, 0.2);
}

.card-image {
  flex: 1;
  padding-right: 20px;
}

.card-image img {
  width: 100%;
  min-width: 200px;
  max-width: 500px;
  border-radius: 15px;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0, 0, 0.2);
}

.card-details {
  flex: 1;
  flex-direction: column;
}

.card-lower {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  flex-wrap: wrap;
  border-radius: 20px;
  background-color: #F2EFDC;
  box-shadow: 0 4px 8px 0 rgba(0,0, 0, 0.2);
}

.contact-info {
  display: flex;
  justify-content: space-between;
  flex: 1;
  flex-direction: column;
}
</style>