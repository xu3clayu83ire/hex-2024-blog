<script setup>
import ArticleList from '@/components/Blog/articleList.vue'
import NavSide from '@/components/Blog/navSide.vue'
</script>
<template>
    <div class="my-7 my-lg-120">
        <div class="text-center">
            <h2 class="fs-2 fw-semibold text-primary-700 title-deco">精選文章</h2>
            <p class="mt-3 text-primary-500">不定期分享技術文章</p>
        </div>
        <div class="container my-7 my-lg-80">
            <div class="row row-gap-7">
                <div class="col-12 col-lg-3 bg-primary-200 order-lg-1">
                    <NavSide />
                </div>
                <ul class="col">
                    <ArticleList />
                </ul>
            </div>
        </div>
    </div>
</template>
