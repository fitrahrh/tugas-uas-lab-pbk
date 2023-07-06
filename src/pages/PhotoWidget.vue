<template>
  <div class="photo-widget">
    <h2>{{ title }}</h2>
    <div class="photo-container">
      <img :src="photoUrl" :alt="title" />
    </div>
    <button class="btn-load-photo" @click="getRandomPhoto">Load New Photo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      photoUrl: '',
    };
  },
  mounted() {
    this.getRandomPhoto();
  },
  methods: {
    async getRandomPhoto() {
      try {
        const apiKey = '38037020-2c48722c03be8437a05b588e6';
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=horizontal`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.hits.length);
        const randomPhoto = data.hits[randomIndex];

        this.title = randomPhoto.tags;
        this.photoUrl = randomPhoto.webformatURL;
      } catch (error) {
        console.error('Error fetching random photo:', error);
      }
    },
  },
};
</script>

<style scoped>
.photo-widget {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.photo-widget h2 {
  margin-top: 0;
  color: #333;
  font-size: 24px;
}

.photo-container {
  width: 100%;
  max-width: 500px;
  height: 300px;
  margin-top: 10px;
  overflow: hidden;
  border-radius: 8px;
}

.photo-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn-load-photo {
  padding: 10px 20px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.btn-load-photo:hover {
  background-color: #ff8d22;
}
</style>
