<template>
  <div class="home">

    <!-- HERO SECTION -->
    <section class="hero">
      <div class="floating floating1"></div>
      <div class="floating floating2"></div>
      <div class="floating floating3"></div>

      <div class="overlay">
        <h1>Visit Rwanda</h1>
        <p>The Land of a Thousand Hills</p>

        <router-link to="/about" class="btn">
          Explore Now
        </router-link>
      </div>
    </section>

    <!-- PLACES -->
    <section class="places">
      <h2>Top Destinations</h2>

      <div class="cards">

        <!-- CARD 1 -->
        <div class="card">
          <div class="img-box">
            <img
              src="/src/hills.png"
            />
          </div>

          <div class="card-content">
            <h3>Volcanoes National Park</h3>
            <p>
              Experience mountain gorillas and breathtaking volcanoes.
            </p>

            <button>Discover</button>
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="card">
          <div class="img-box">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
              alt="Lake Kivu"
            />
          </div>

          <div class="card-content">
            <h3>Lake Kivu</h3>
            <p>
              Relax near the peaceful beaches and beautiful sunsets.
            </p>

            <button>Discover</button>
          </div>
        </div>

        <!-- CARD 3 -->
        <div class="card">
          <div class="img-box">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop"
              alt="Akagera National Park"
            />
          </div>

          <div class="card-content">
            <h3>Akagera National Park</h3>
            <p>
              Explore wildlife including lions, elephants, and giraffes.
            </p>

            <button>Discover</button>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
</script>

<style scoped>

/* GLOBAL */
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: Arial, sans-serif;
}

.home{
  overflow:hidden;
}

/* HERO SECTION */
.hero{
  position:relative;
  height:100vh;

  background:
  linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
  url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop');

  background-size:cover;
  background-position:center;

  display:flex;
  justify-content:center;
  align-items:center;

  animation: zoomBackground 20s infinite alternate;
}

/* DARK OVERLAY */
.overlay{
  text-align:center;
  color:white;
  z-index:2;

  animation: fadeUp 1.5s ease;
}

.overlay h1{
  font-size:90px;
  margin-bottom:20px;
  text-shadow:0 5px 15px rgba(0,0,0,0.5);

  animation: glow 2s infinite alternate;
}

.overlay p{
  font-size:30px;
  margin-bottom:30px;
}

/* BUTTON */
.btn{
  display:inline-block;
  padding:15px 35px;
  border-radius:50px;

  background:linear-gradient(45deg,#00c853,#b2ff59);

  color:white;
  text-decoration:none;
  font-size:18px;
  font-weight:bold;

  transition:0.5s;
  box-shadow:0 5px 20px rgba(0,0,0,0.4);
}

.btn:hover{
  transform:translateY(-7px) scale(1.05);
  box-shadow:0 10px 25px rgba(0,0,0,0.5);
}

/* FLOATING CIRCLES */
.floating{
  position:absolute;
  border-radius:50%;
  background:rgba(255,255,255,0.15);
  animation: float 10s infinite linear;
}

.floating1{
  width:120px;
  height:120px;
  left:10%;
  top:20%;
}

.floating2{
  width:80px;
  height:80px;
  right:15%;
  top:30%;
  animation-duration:15s;
}

.floating3{
  width:150px;
  height:150px;
  bottom:10%;
  left:45%;
  animation-duration:18s;
}

/* PLACES SECTION */
.places{
  padding:100px 50px;
  background:#f4f7f9;
}

.places h2{
  text-align:center;
  font-size:55px;
  color:#0f5132;
  margin-bottom:70px;

  position:relative;
}

.places h2::after{
  content:"";
  width:120px;
  height:5px;

  background:linear-gradient(to right,#00c853,#b2ff59);

  position:absolute;
  left:50%;
  bottom:-20px;

  transform:translateX(-50%);
}

/* CARDS */
.cards{
  display:flex;
  justify-content:center;
  gap:35px;
  flex-wrap:wrap;
}

.card{
  width:340px;
  border-radius:25px;
  overflow:hidden;

  background:white;

  box-shadow:0 10px 25px rgba(0,0,0,0.15);

  transition:0.6s;
  position:relative;
}

.card:hover{
  transform:translateY(-15px) rotate(1deg);
}

/* IMAGE */
.img-box{
  overflow:hidden;
}

.card img{
  width:100%;
  height:240px;
  object-fit:cover;

  transition:0.6s;
}

.card:hover img{
  transform:scale(1.15);
}

/* CONTENT */
.card-content{
  padding:25px;
}

.card-content h3{
  font-size:28px;
  margin-bottom:15px;
  color:#222;
}

.card-content p{
  color:#555;
  line-height:1.7;
  margin-bottom:20px;
}

/* BUTTONS */
.card-content button{
  padding:12px 25px;
  border:none;
  border-radius:30px;

  background:linear-gradient(45deg,#00c853,#64dd17);

  color:white;
  font-weight:bold;
  cursor:pointer;

  transition:0.4s;
}

.card-content button:hover{
  transform:scale(1.08);
}

/* ANIMATIONS */
@keyframes fadeUp{
  from{
    opacity:0;
    transform:translateY(60px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }
}

@keyframes glow{
  from{
    text-shadow:0 0 10px #fff;
  }

  to{
    text-shadow:0 0 25px #00ff88;
  }
}

@keyframes zoomBackground{
  from{
    background-size:100%;
  }

  to{
    background-size:110%;
  }
}

@keyframes float{
  0%{
    transform:translateY(0) rotate(0deg);
  }

  50%{
    transform:translateY(-40px) rotate(180deg);
  }

  100%{
    transform:translateY(0) rotate(360deg);
  }
}

/* RESPONSIVE */
@media(max-width:768px){

  .overlay h1{
    font-size:50px;
  }

  .overlay p{
    font-size:20px;
  }

  .places{
    padding:70px 20px;
  }

  .places h2{
    font-size:38px;
  }
}

</style>