<script setup>
import WorkCase from '@/components/Work/cases.vue'
</script>
<template>
    <section class="bg-primary-100">
        <div class="container pb-80 pt-7 pt-lg-80">
            <div class="row justify-content-center d-flex mb-7 mb-lg-4">
                <div class="quote-area col-12 col-lg-7">
                    <img class="quote-left" src="@/assets/images/works/quote-left.png" />
                    <div class="quote-text text-primary-800 fs-4">
                        <p>讓使用者在觀賞與使用的旅程中，發現設計的價值</p>
                        <p>而我在設計與開發的過程中，看見自己的價值</p>
                    </div>
                    <img class="quote-right" src="@/assets/images/works/quote-right.png" />
                </div>
            </div>
            <div class="row justify-content-center d-flex ">
                <div class="col-12 col-lg-7">
                    <div class="row-gap-4 gap-lg-7 row text-center">
                        <div class="col-12 col-lg-6">
                            <p class="text-primary-600">2B經驗</p>
                            <div class="border border-2 border-primary-400 d-inline-block mb-2 mt-0" style="width:24px">
                            </div>
                            <p class="text-primary-700">內部監控系統、庫存系統、採購系統、行銷整合系統</p>
                        </div>
                        <div class="col">
                            <p class="text-primary-600">2C經驗</p>
                            <div class="border border-2 border-primary-400 d-inline-block mb-2 mt-0" style="width:24px">
                            </div>
                            <p class="text-primary-700">跨國美妝保養電商、個人品牌網站、醫美網站、電子商務</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="my-80 my-sm-120">
        <WorkCase />
        <nav aria-label="" class="mt-11 d-flex justify-content-center">
            <ul class="pagination pagination mb-0">
                <li class="page-item active" aria-current="page">
                    <span class="page-link">1</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
        </nav>
    </section>
</template>

<style scope>
.quote-area {
    text-align: center;
}

.quote-area>img.quote-left {
    display: inline-block;
}

.quote-area>img.quote-right {
    display: none;
}

/* ---===============--- */
/* pc  */
/* ---===============--- */
@media (min-width: 992px) {
    .quote-area {
        position: relative;
        max-width: 680px;
        height: 192px;
    }

    .quote-area>div.quote-text {
        position: absolute;
        top: 72px;
        left: 72px;
        right: 72px;
    }

    .quote-area>img.quote-left {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
    }

    .quote-area>img.quote-right {
        position: absolute;
        display: block;
        bottom: 0;
        right: 0;
    }

}

.page-link {
    color: #3B3B3B;
    border: none;
    font-size: 24px;
}

.page-item+.page-item {
    margin-left: 1rem;
}

.page-link.active,
.active>.page-link {
    z-index: 3;
    color: #fff;
    background-color: #1E1E1E;
    border-color: #1E1E1E;
    border-radius: 4px;
}

.page-link:hover {
    z-index: 2;
    color: #1E1E1E;
    background-color: var(--bs-pagination-hover-bg);
    border-color: none;
    border-radius: 4px;
}
</style>