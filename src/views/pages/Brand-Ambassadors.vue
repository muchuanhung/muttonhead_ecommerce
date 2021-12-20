<template>
    <div class="brand-wrapper">
			<h4 class="brand-wrapper__title">BRAND AMBASSADORS</h4>
      <div class="brand-wrapper__content">
       
<!--Album-->
<section id="album">
  <div class="container">
    <div class="album-wrapper">
      <div class="card">
        <img src="../../assets/images/pages/brand-01.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Rylan Wheaton!</h3>
        </div>
      </div>
      <div class="card">
        <img src="../../assets/images/pages/brand-02.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Makayla Donahue</h3>
        </div>
      </div>
       <div class="card">
        <img src="../../assets/images/pages/brand-03.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Brad Flowerdew</h3>
        </div>
      </div>
       <div class="card">
        <img src="../../assets/images/pages/brand-04.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Floyd Gonzales</h3>
        </div>
      </div>
       <div class="card">
        <img src="../../assets/images/pages/brand-05.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Stephen Attong</h3>
        </div>
      </div>
       <div class="card">
        <img src="../../assets/images/pages/brand-06.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Kelsi Sorensen</h3>
        </div>
      </div>
       <div class="card">
        <img src="../../assets/images/pages/brand-07.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Rachel Connell</h3>
        </div>
      </div>
       <div class="card">
        <img src="../../assets/images/pages/brand-08.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Tom Kahler</h3>
        </div>
      </div>
       <div class="card">
        <img src="../../assets/images/pages/brand-09.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">The So Fly Crew</h3>
        </div>
      </div>
       <div class="card">
        <img src="../../assets/images/pages/brand-10.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Stephen Powling</h3>
        </div>
      </div>
       <div class="card">
        <img src="../../assets/images/pages/brand-11.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Shaina Bostin</h3>
        </div>
      </div>
       <div class="card">
        <img src="../../assets/images/pages/brand-12.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Rebecca Ramsdale</h3>
        </div>
      </div>
       <div class="card">
        <img src="../../assets/images/pages/brand-12.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Rebecca Ramsdale</h3>
        </div>
      </div>

      <div class="card">
        <img src="../../assets/images/pages/brand-13.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Pat O'Rourke</h3>
        </div>
      </div>  

      <div class="card">
        <img src="../../assets/images/pages/brand-14.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Emma Rogers</h3>
        </div>
      </div>

      <div class="card">
        <img src="../../assets/images/pages/brand-15.jpg" class="card-img" />
        <div class="card-text">
          <h3 class="card-title">Chris Ruiter</h3>
        </div>
      </div>  
    </div>
  </div>
</section>  
      </div> 
    </div> 
</template>


<style lang="scss" scoped>
.brand-wrapper {
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  height: 350px;
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