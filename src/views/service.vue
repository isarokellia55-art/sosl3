<template>
  <section class="services">
    <div class="hero-content">
      <h1>Discover Rwanda</h1>

      <p class="intro">
        Rwanda is known as the Land of a Thousand Hills, filled with
        breathtaking landscapes, wildlife adventures, peaceful lakes,
        and unforgettable cultural experiences.
      </p>

      <div class="service-container">
        <div class="card">
          <div class="icon">⛰️</div>
          <h2>Beautiful Hills</h2>
          <p>
            Experience Rwanda’s rolling green hills and stunning mountain
            landscapes that make the country one of Africa’s most beautiful destinations.
          </p>
        </div>

        <div class="card">
          <div class="icon">🦍</div>
          <h2>Gorilla Trekking</h2>
          <p>
            Visit Volcanoes National Park and enjoy the world-famous mountain
            gorilla trekking adventure surrounded by natural beauty.
          </p>
        </div>

        <div class="card">
          <div class="icon">🌊</div>
          <h2>Lake Kivu Tours</h2>
          <p>
            Relax near the peaceful shores of Lake Kivu while enjoying
            boat rides, fresh air, and beautiful sunset views.
          </p>
        </div>

        <div class="card">
          <div class="icon">🌿</div>
          <h2>Nature & Wildlife</h2>
          <p>
            Discover national parks, forests, birds, and wildlife that
            showcase Rwanda’s rich natural environment.
          </p>
        </div>
      </div>

      <button class="explore-btn">
        Explore Rwanda
      </button>
    </div>
  </section>
</template>

<style scoped>
.services {
  min-height: 100vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1600&auto=format&fit=crop")
    center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
}

.hero-content {
  max-width: 1200px;
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: bold;
  color: #facc15;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.intro {
  max-width: 800px;
  margin: auto;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #f3f4f6;
  margin-bottom: 50px;
}

.service-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.card {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 30px 25px;
  backdrop-filter: blur(6px);
  transition: 0.4s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.card:hover {
  transform: translateY(-12px);
  background: rgba(255, 255, 255, 0.2);
}

.icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.card h2 {
  font-size: 1.6rem;
  margin-bottom: 15px;
  color: #facc15;
}

.card p {
  line-height: 1.7;
  color: #e5e7eb;
}

.explore-btn {
  margin-top: 45px;
  padding: 14px 35px;
  border: none;
  border-radius: 30px;
  background: #facc15;
  color: #111827;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

.explore-btn:hover {
  background: #eab308;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .intro {
    font-size: 1rem;
  }
}
</style>