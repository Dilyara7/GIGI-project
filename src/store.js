import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default {
    data() {
      return {
        isModalOpen: false,
        modalImage: ''
      };
    },
    methods: {
      openModal(imageUrl) {
        this.modalImage = imageUrl;
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        this.modalImage = '';
      }
    }
  };
  