<style>
/* section {
  margin-bottom: 80px;
}

@media (min-width: 576px) {
  section {
    margin-bottom: 120px;
  }
} */

/* @media (max-width: 992px) {

    section,
    section h2 {
      margin-bottom: 40px;
    }

  } 

.work .work-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 800px;
}


@media (max-width: 992px) {

  .work .work-bg {
    height: 400px;
  }

}

.work .work-bg.work1 {
  background-image: url("../../src/assets/images/homepage-work1-bg.png");
}

.work .work1 img.pc {
  object-fit: cover;
  max-width: 714px;
  width: 100%;
  height: 720px;
}

.work .work1 img.mobile {
  object-fit: cover;
  max-width: 295px;
  width: 100%;
  height: 297px;
}

.work .work-bg.work2 {
  background-image: url("../../src/assets/images/homepage-work2-lg.png");
}

.work .work-bg.work3 {
  background-image: url("../../src/assets/images/homepage-work3-bg.png");
}*/
</style>


<script setup>
import HomeBanner from '@/components/Home/Banner.vue';
import HomeWorks from '@/components/Home/Works/index.vue';
import HomeServiceItem from '@/components/Home/ServiceItem.vue';
import HomeArticle from '@/components/Home/Article.vue';

const navlinks = document.querySelectorAll('a.nav-link');
navlinks[0].querySelector('span').classList.add("nav-link-active");

</script>
<template>
  <HomeBanner />
  <HomeWorks />
  <HomeServiceItem />
  <HomeArticle />
</template>
