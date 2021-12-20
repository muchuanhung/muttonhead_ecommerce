<template>
    <div class="contact-wrapper">
			<h4 class="contact-wrapper__title">MUTT OF THE MONTH</h4>
      <div class="contact-wrapper__content">
       
<!--Album-->
<section id="album">
  <div class="container">
    <div class="album-wrapper">
      <div class="card">
        <img src="../../assets/images/pages/pet-01.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Meet Maggie!</h3>
          <p class="card-description">7 Age</p>
        </div>
      </div>
      <div class="card">
        <img src="../../assets/images/pages/pet-02.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Meet Maisy!</h3>
          <p class="card-description">5 Age</p>
        </div>
      </div>
      <div class="card">
        <img src="../../assets/images/pages/pet-03.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Meet Freja!</h3>
          <p class="card-description">3 Age</p>
        </div>
      </div>
      <div class="card">
        <img src="../../assets/images/pages/pet-04.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Meet Misty!</h3>
          <p class="card-description">7 Age</p>
        </div>
      </div>
      <div class="card">
       <img src="../../assets/images/pages/pet-05.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Meet Penny!</h3>
          <p class="card-description">3 Age</p>
        </div>
      </div>
      <div class="card">
        <img src="../../assets/images/pages/pet-06.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Meet Benny (aka Benedict Cumberdoge)!</h3>
          <p class="card-description">5 Age</p>
        </div> 
      </div>
    </div>
  </div>
</section>  
      </div> 
    </div> 
</template>


<style lang="scss" scoped>
.contact-wrapper {
  margin: 5rem 1rem 2rem 1rem;
  //處理溢版問題
  overflow-x: hidden;
  overflow-y: visible;
  position: relative;
  cursor: default;
  
  &__title {
  display: flex;
  justify-content: center;
  padding: 30px;
	font-size: 2rem;
	font-weight: 700;
  }

   &__content{
   flex-direction: column;
   text-align: center;
   letter-spacing: 0.75px;
   line-height: 200%;
   padding: 20px 0;
  }

.container {
  width: 85%;
  margin: 0 auto 3rem auto;
}
/*Album*/
.album-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  width: 100%;
  grid-gap: 1.5rem;
}

.card {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background: #a9a9a9;
  -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  transition: transform 0.4s ease-out;
}

.card::before {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  transform: scale(0, 1);
}

.card::after {
  border-left: 1px solid white;
  border-right: 1px solid white;
  transform: scale(1, 0);
}

.card:hover::before {
  transform: scale(1.05, 1);
}

.card:hover::after {
  transform: scale(1, 1.05);
}

.card-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  transition: opacity 0.2s ease-out;
}

.card:hover .card-img {
  opacity: 0.4;
}

.card-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.card:hover .card-text {
  opacity: 1;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.2em;
}

.card-description {
  font-size: 1rem;
}

}
</style>