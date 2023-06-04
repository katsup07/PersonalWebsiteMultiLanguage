<template>
  
    <section>
     <div class="info-container">
        <h1>将来の夢<img class="cloud-moon-icon" src="~/static/assets/icons/cloud-moon-icon.svg"/></h1>
        <p>13年間、生徒に教えていること、そして教師の様々な仕事を通して教師であることを何を意味するか理解できて、楽しんできました。しかし、今は新しいことに挑戦して、異なる分野で働きたいです。ものをデザインしたり作ったり、数学的、論理的な問題を解いたりすることが好きなので、プログラマーとして働くのが自分に向いていると思います。プログラムを計画、作成、維持するための方法についてもっと学びたいです。</p>   
      </div>
    </section>
  
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 2rem 4rem;
  background: url("~/static/assets/images/clouds.jpg");
  background-size: cover;
  min-height: 100vh;
}


h1 {
  margin: 0;
  font-weight: 600;
  text-align: center;
  font-size: 1.9rem;
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}

  img.cloud-moon-icon{
  max-width: 2.7rem;
  border: 0.01rem solid rgb(255, 255, 255);
  margin-left: 0.4rem;
}

.info-container {
  box-shadow: 0 1.5px 1.5px rgb(59, 59, 59);
  margin: 0.5rem;
  padding: 1rem;
  border: 0.1rem double rgb(35, 35, 35);
  background-color: white;
  min-width: 40%;
  text-align: left;
}

@media screen and (max-width: 800px){
     
   h1{
    font-size: 1.3rem;
   }
  }
</style>
