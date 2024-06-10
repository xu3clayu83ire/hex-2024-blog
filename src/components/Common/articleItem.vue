<script setup>
const props = defineProps(['data'])
const item = props.data;
</script>

<template>
    <div class="align-items-lg-center d-grid d-lg-flex gap-3 mb-7 mb-lg-10 px-6 py-3">
        <img class="article-image mx-auto rounded-3" :src="data.imageUrl" alt="" />
        <div class="text-start">
            <p class="d-flex justify-content-between justify-content-lg-start align-items-center">
                <span class="text-primary-700 fs-6 me-lg-3">{{ item.date }}</span>
                <span class="badge bg-primary-200 fs-6 lh-1 me-3 rounded-4 text-primary-700">{{ item.tags[0] }}</span>
            </p>
            <h3 class="fs-5 my-3 text-primary-700 fw-semibold">{{ item.title }}</h3>
            <p class="multiline-ellipsis fs-6text-primary-700">{{ item.description }}</p>
        </div>
    </div>
</template>
<style scoped>
.article-image {
    object-fit: cover;
    max-width: 306px;
    width: 100%;
}
</style>