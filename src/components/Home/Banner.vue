<style scoped>
/* banner 不需設定 1920px 寬度 */
/* .banner {
max-width: 1920px;
}*/

.banner img.pc {
    object-fit: cover;
    max-width: 1154px;
    width: 100%;
    height: 792px;
}

.banner img.mobile {
    object-fit: cover;
    max-width: 375px;
    width: 100%;
    height: 285px;
}
</style>
<script setup>
import SocialIcon from '@/components/Common/socialIcon.vue';
</script>

<template>
    <section class="banner position-relative">
        <div class="container-fluid mx-auto">
            <div class="d-flex flex-lg-row-reverse row">
                <div class="col-12 col-lg-8">
                    <div class="d-flex justify-content-center justify-content-lg-end">
                        <img src="@/assets/images/Home/hero-lg.png" class="d-none d-lg-block pc" />
                        <img src="@/assets/images/Home/hero-sm.png" class="d-lg-none banner mobile" />
                    </div>
                </div>
                <!-- mobile start-->
                <div class="col d-lg-none">
                    <div class="d-flex justify-content-center my-7">
                        <div class="benner-text-mobile text-center">
                            <h1 class="fw-semibold text-primary-700 mb-4">Hi！我是 AnnA</h1>
                            <div class="fs-5 mb-3 text-primary-600">
                                <p>具有 10 年經驗的</p>
                                <p class="mb-2">
                                    <span>資深 UI 設計師</span>
                                    <span>兼</span>
                                    <span>前端工程師</span>
                                </p>
                                <p>技術雙修並行，</p>
                                <p>熱衷於優化使用者的網頁體驗</p>
                                <p class="fs-6 text-primary-400 mt-3">WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN
                                </p>
                            </div>
                            <SocialIcon class="mt-4 mt-lg-9" />
                        </div>
                    </div>
                </div>
                <!-- mobile end-->
            </div>
        </div>
        <!-- pc start-->
        <div class="container d-lg-block d-none">
            <div class="align-items-center d-flex h-100 position-absolute top-0">
                <div class="benner-text-pc text-start">
                    <h1 class="fw-semibold text-primary-700 mb-4">Hi！我是 AnnA</h1>
                    <div class="fs-5 mb-3 text-primary-600">
                        <!--  -->
                        <p class="mb-2">具有 10 年經驗的 資深 UI 設計師 兼 前端工程師</p>
                        <p>技術雙修並行，熱衷於優化使用者的網頁體驗</p>
                        <!--  -->
                        <p class="fs-6 text-primary-400 mt-3">WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN</p>
                    </div>
                    <SocialIcon class="mt-9 mt-lg-9" />
                </div>
            </div>
        </div>
        <!-- pc end -->
    </section>
</template>