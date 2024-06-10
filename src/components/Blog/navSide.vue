<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
</script>


<template>
    <div class="blog-list">
        <div class="d-lg-none overflow-hidden position-relative">
            <swiper :breakpoints="{
                '0': {
                    slidesPerView: 2.5,
                    spaceBetween: 32,
                },
                '375': {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                '475': {
                    slidesPerView: 3.5,
                    spaceBetween: 32,
                },
                '790': {
                    slidesPerView: 5,
                    spaceBetween: 32,
                }
            }" class="nav-swiper my-4 mx-3 fs-5 mx-auto">
                <swiper-slide><a href="" class="active">全部文章</a></swiper-slide>
                <swiper-slide><a href="">UI/UX 新知</a></swiper-slide>
                <swiper-slide><a href="">數位產品設計</a></swiper-slide>
                <swiper-slide><a href="">平面設計</a></swiper-slide>
                <swiper-slide><a href="">前端開發</a></swiper-slide>
            </swiper>
        </div>
        <div class="d-none d-lg-block">
            <ul class="my-lg-80 mx-xl-80 mx-lg-10 fs-5">
                <li class="active"><a href="">全部文章</a></li>
                <li><a href="">UI/UX 新知</a></li>
                <li><a href="">數位產品設計</a></li>
                <li><a href="">平面設計</a></li>
                <li><a href="">前端開發</a></li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.blog-list .swiper {
    max-width: 600px;
    width: 100%;
    height: 100%;
}

.blog-list .swiper-slide {
    width: auto !important;
    /* Center slide text vertically */
    /* display: flex;
    justify-content: start;
    align-items: center; */
}


/* .blog-list li {
    margin-bottom: 0;
    margin-left: 32px;
} */

/* .blog-list li>a, */
.blog-list .swiper-slide a {
    color: #5B5B5B;
    font-size: 1rem;
    display: block;
}

.blog-list .swiper-slide a.active {
    color: #1E1E1E;
    border-bottom: #1E1E1E 2px solid;
    padding-bottom: 4px;
}

.blog-list li:hover>a,
.blog-list .swiper-slide a:hover {
    color: #1E1E1E;
    border-bottom: #5B5B5B 2px solid;
    padding-bottom: 4px;
}

@media (min-width: 992px) {

    .blog-list li {
        margin-bottom: 32px;
        margin-left: 0;
    }

    .blog-list li>a {
        font-size: 1.25rem;
    }

    .blog-list li.active>a {
        color: #1E1E1E;
        border-bottom: #1E1E1E 2px solid;
        padding-bottom: 4px;
    }

}
</style>