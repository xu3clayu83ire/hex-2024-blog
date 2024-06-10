<script setup>
import ArticleContent from '@/components/Blog/articleContent.vue';
import ArticleCard from '@/components/Common/articleCard.vue';
import NavSide from '@/components/Blog/navSide.vue';
import { ref } from 'vue'

import articleImage1 from '@/assets/images/blog/article-image1.png';
import articleImage7 from '@/assets/images/blog/article-image7.png';

const datas = ref([
    {
        id: 1,
        date: '2024/02/10',
        imageUrl: articleImage1,
        title: 'Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)',
        tags: ['UI/UX 新知']
    },
    {
        id: 2,
        date: '2023/07/10',
        imageUrl: articleImage7,
        title: 'Vision Pro 來了！UIUX 設計師的未來在哪裡？',
        tags: ['UI/UX 新知']
    }
]);
</script>
<template>
    <div class="blog-content mt-7 mt-lg-120">
        <div class="container">
            <div class="justify-content-center row row-gap-7 my-7 my-lg-80">
                <div class="col-12 col-lg-3 bg-primary-200 order-lg-3">
                    <NavSide />
                </div>
                <div class="col-lg-1 order-lg-2 d-none d-xl-block"></div>
                <div class="col-12 col-lg-8 px-0">
                    <ArticleContent />
                </div>
            </div>
            <div class="row">
                <div class="mt-7 mb-80 mt-lg-80 mb-lg-120">
                    <h3
                        class="border-top border-primary-400 text-primary-700 fw-bold py-7 pt-lg-80 text-center text-lg-start">
                        相關文章</h3>
                    <ul class="row row-cols-lg-3 row-gap-7">
                        <li v-for=" data in  datas" :key="data.id">
                            <RouterLink class="article-relation-link pointer d-block" aria-current="page"
                                :to="{ name: 'blogContent' }">
                                <articleCard :data="data" />
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>