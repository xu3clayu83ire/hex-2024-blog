<script setup>
const props = defineProps(['data'])
const item = props.data;
</script>
<template>
    <div class="article-card mx-4 mx-lg-0 text-center">
        <img class="img-fluid rounded-3" :src="data.imageUrl" alt="">
        <div class="text-start">
            <h3 class="fs-4 my-3 text-primary-700 fw-bold">{{ item.title }}</h3>
            <p class="d-flex justify-content-between align-items-center">
                <span class="text-primary-700 fs-6 me-lg-3">{{ item.date }}</span>
                <span class="badge bg-primary-200 fs-6 lh-1 me-3 rounded-4 text-primary-600">{{ item.tags[0] }}</span>
            </p>
        </div>
    </div>
</template>
<style scoped>
.article-card>img {
    object-fit: cover;
    max-width: 416px;
    width: 100%;
}
</style>