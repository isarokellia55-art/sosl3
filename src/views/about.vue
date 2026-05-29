<template>
  <section class="about">
    <div class="overlay"></div>

    <div class="content">
      <h1>Discover Rwanda</h1>

      <p>
        Rwanda is known as the Land of a Thousand Hills because of its
        beautiful green mountains and landscapes.
      </p>

      <p>
        Tourists visit Rwanda to see mountain gorillas, national parks,
        lakes, culture, and modern cities.
      </p>

      <p>
        Kigali is one of the cleanest and safest cities in Africa.
      </p>

      <router-link to="/" class="btn">
        Back Home
      </router-link>
    </div>

    <div class="hills.png">
      <img
        src="/src/assets/hills.png"
        alt="Beautiful Rwanda"
      />
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 60px;
  flex-wrap: wrap;
  overflow: hidden;

  background: linear-gradient(
    135deg,
    #0f2027,
    #203a43,
    #2c5364
  );

  animation: bgMove 10s infinite alternate;
}

/* Animated background */
@keyframes bgMove {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  top: 0;
  left: 0;
}

.content {
  position: relative;
  z-index: 2;
  flex: 1;
  min-width: 300px;

  animation: slideLeft 1.2s ease;
}

.content h1 {
  font-size: 60px;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}

.content p {
  font-size: 18px;
  line-height: 1.9;
  margin-bottom: 20px;
  color: #f1f1f1;
}

.image {
  position: relative;
  z-index: 2;
  flex: 1;
  min-width: 300px;

  animation: slideRight 1.2s ease;
}

.image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);

  transition: transform 0.5s ease;
}

.image img:hover {
  transform: scale(1.05) rotate(1deg);
}

.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 14px 30px;
  background: #00c853;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.4s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.btn:hover {
  background: #00e676;
  transform: translateY(-5px);
}

/* Animations */
@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-80px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(80px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .about {
    padding: 30px;
    text-align: center;
  }

  .content h1 {
    font-size: 40px;
  }
}
</style>