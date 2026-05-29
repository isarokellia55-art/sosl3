<template>
  <section class="contact-page">
    <div class="overlay">
      <div class="contact-container">

        <h1>Contact Visit Rwanda</h1>

        <p class="subtitle">
          Have questions about Rwanda’s beautiful destinations, tourism
          experiences, or travel adventures? We are here to help you
          explore the Land of a Thousand Hills.
        </p>

        <div class="contact-content">

          <div class="contact-info">
            <div class="info-box">
              <span class="icon">📍</span>
              <div>
                <h2>Location</h2>
                <p>Kigali, Rwanda</p>
              </div>
            </div>

            <div class="info-box">
              <span class="icon">📞</span>
              <div>
                <h2>Phone</h2>
                <p>+250 788 000 000</p>
              </div>
            </div>

            <div class="info-box">
              <span class="icon">✉️</span>
              <div>
                <h2>Email</h2>
                <p>visitrwanda@gmail.com</p>
              </div>
            </div>
          </div>

          <form class="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message"></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  background:
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop")
    center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
}

.overlay {
  width: 100%;
  max-width: 1200px;
}

.contact-container {
  color: white;
  text-align: center;
}

.contact-container h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: #facc15;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.subtitle {
  max-width: 750px;
  margin: auto;
  margin-bottom: 50px;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #f3f4f6;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-box {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255,255,255,0.12);
  padding: 20px;
  border-radius: 18px;
  backdrop-filter: blur(6px);
  text-align: left;
  transition: 0.3s ease;
}

.info-box:hover {
  transform: translateX(10px);
  background: rgba(255,255,255,0.18);
}

.icon {
  font-size: 2rem;
}

.info-box h2 {
  margin-bottom: 5px;
  color: #facc15;
}

.info-box p {
  color: #e5e7eb;
}

.contact-form {
  background: rgba(255,255,255,0.12);
  padding: 35px;
  border-radius: 20px;
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form input,
.contact-form textarea {
  padding: 15px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
}

.contact-form button {
  padding: 15px;
  border: none;
  border-radius: 30px;
  background: #facc15;
  color: #111827;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

.contact-form button:hover {
  background: #eab308;
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-container h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>