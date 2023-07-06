<template>
  <div class="stopwatch-widget">
    <h2>Stopwatch</h2>
    <p class="time">{{ formatTime }}</p>
    <div class="buttons">
      <button @click="startStopwatch" :disabled="isRunning" class="start-btn">Start</button>
      <button @click="stopStopwatch" :disabled="!isRunning" class="stop-btn">Stop</button>
      <button @click="resetStopwatch" class="reset-btn">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      startTime: null,
      elapsedTime: 0,
    };
  },
  computed: {
    formatTime() {
      const milliseconds = this.elapsedTime % 1000;
      const seconds = Math.floor(this.elapsedTime / 1000) % 60;
      const minutes = Math.floor(this.elapsedTime / 60000) % 60;
      const hours = Math.floor(this.elapsedTime / 3600000);

      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    },
  },
  methods: {
    startStopwatch() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.startTime = Date.now();

        this.timerInterval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
        }, 10);
      }
    },
    stopStopwatch() {
      if (this.isRunning) {
        this.isRunning = false;
        clearInterval(this.timerInterval);
      }
    },
    resetStopwatch() {
      this.isRunning = false;
      clearInterval(this.timerInterval);
      this.elapsedTime = 0;
    },
  },
};
</script>

<style scoped>
.stopwatch-widget {
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
}

.stopwatch-widget h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.stopwatch-widget .time {
  color: #ff5722;
  font-size: 32px;
  margin-bottom: 10px;
}

.stopwatch-widget .buttons {
  display: flex;
  justify-content: center;
}

.stopwatch-widget button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color0.3s ease;
  margin-top: 10px;
}

.stopwatch-widget button:hover {
  background-color: #e64a19;
  transition: background-color0.3s ease;
}

.stopwatch-widget button:disabled {
  background-color: #ccc;
  color: #999;
  cursor: not-allowed;
}
</style>
