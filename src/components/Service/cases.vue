<script setup>
import { ref } from 'vue'

import work4 from '@/assets/images/Service/work-image4.png';
import work5 from '@/assets/images/Service/work-image5.png';
import work6 from '@/assets/images/Service/work-image6.png';
import work7 from '@/assets/images/Service/work-image7.png';

const datas = ref([
    {
        id: 1,
        imageUrl: work4,
        title: '美美美早餐店 POS 機 UI Design',
        description: '訂單送單一目瞭然，自動報表分析好輕鬆',
        tags: [
            'UI設計', '前端開發', 'Wix'
        ]
    },
    {
        id: 2,
        imageUrl: work5,
        title: '巧克巧克形象官網設計',
        description: '三步驟完成訂票，電腦手機都支援',
        tags: [
            'UI設計', '設計系統', '網路電商'
        ]
    },
    {
        id: 3,
        imageUrl: work7,
        title: '電影院訂票系統',
        description: '三步驟完成訂票，電腦手機都支援',
        tags: [
            '前端開發', '後端支援', 'Vue'
        ]
    },
    {
        id: 4,
        imageUrl: work6,
        title: '2023 餉茶坊飲料旗艦店活動官網設計',
        description: '主打水果主題，冰鎮夏天暑氣',
        tags: [
            '網頁設計', '切版服務', 'Javascript'
        ]
    }
])

</script>

<template>
    <div class="container">
        <div class="d-flex flex-wrap gap-4 justify-content-center">
            <div v-for=" data in  datas" :key="data.id">
                <img class="img-fluid mb-4 rounded-3" :src="data.imageUrl" alt="">
                <div>
                    <h3 class="text-primary-700 fs-2 fw-bold mb-2">{{ data.title }}</h3>
                    <p class="text-primary-500 fs-6 mb-3">{{ data.description }}</p>
                    <div>
                        <span class="badge bg-primary-200 fs-6 lh-1 me-3 rounded-4 text-primary-700">{{
                data.tags[0] }}</span>
                        <span class="badge bg-primary-200 fs-6 lh-1 me-3 rounded-4 text-primary-700">{{
                data.tags[1] }}</span>
                        <span class="badge bg-primary-200 fs-6 lh-1 me-3 rounded-4 text-primary-700">{{
                            data.tags[2] }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>