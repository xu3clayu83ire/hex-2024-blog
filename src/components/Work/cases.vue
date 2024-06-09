<script setup>
import Card from '@/components/Common/card.vue';
import { ref } from 'vue'

import workImage1 from '@/assets/images/works/work-image1.png';
import workImage2 from '@/assets/images/works/work-image2.png';
import workImage3 from '@/assets/images/works/work-image3.png';
import workImage4 from '@/assets/images/works/work-image4.png';
import workImage5 from '@/assets/images/works/work-image5.png';
import workImage6 from '@/assets/images/works/work-image6.png';


const datas = ref([
    {
        id: 1,
        imageUrl: workImage1,
        title: '星際旅行訂票平台',
        description: '悠遊宇宙的夢想，從這裡開始實現',
        tags: [
            '網頁設計', '響應式設計', 'Bootstrap'
        ]
    },
    {
        id: 2,
        imageUrl: workImage2,
        title: '理財App',
        description: '連動帳戶與行動支付，讓 AI 提供您最好的理財建議',
        tags: [
            'APP設計', 'iOS', 'React'
        ]
    },
    {
        id: 3,
        imageUrl: workImage3,
        title: '醫美診所官網',
        description: '永保青春的秘密，從粹究開始',
        tags: [
            '網頁設計', '響應式設計', 'WordPress'
        ]
    },
    {
        id: 4,
        imageUrl: workImage4,
        title: '美美美早餐店 POS 機 UI Design',
        description: '訂單送單一目瞭然，自動報表分析好輕鬆',
        tags: [
            'UI設計', '前端開發', 'Wix'
        ]
    },
    {
        id: 5,
        imageUrl: workImage5,
        title: '電影院訂票系統',
        description: '三步驟完成訂票，電腦手機都支援',
        tags: [
            '前端開發', '後端支援', 'Vue'
        ]
    },
    {
        id: 6,
        imageUrl: workImage6,
        title: '巧克巧克形象官網設計',
        description: '三步驟完成訂票，電腦手機都支援',
        tags: [
            'UI設計', '設計系統', '網路電商'
        ]
    }
])

</script>
<template>
    <Card :data="datas"></Card>
</template>