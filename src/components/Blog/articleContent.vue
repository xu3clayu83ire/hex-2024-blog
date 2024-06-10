<script setup>
import { ref } from 'vue';
import visionPro from '@/assets/images/blog/contents/article4/vision-pro.png'
import oculusRift from '@/assets/images/blog/contents/article4/oculus-rift.png'
import htcVive from '@/assets/images/blog/contents/article4/htc-vive.png'
import playstationVr from '@/assets/images/blog/contents/article4/playstation-vr.png'
</script>
<template>
    <div class="article-content container">
        <div class="header mb-4 mb-lg-10">
            <p class="d-flex d-lg-inline-block fs-6 justify-content-between text-primary-500 mb-3 mb-lg-7">
                <span>數位產品設計</span>
                <span class="mx-2 d-none d-lg-inline-block">/</span>
                <span>2023/09/20 發佈</span>
            </p>
            <div class="text-center text-primary-700">
                <h2 class="fs-2 fw-bold mb-3 mb-lg-4">虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究</h2>
                <p>- 探索虛擬實境技術的現狀與前景 -</p>
            </div>
        </div>
        <div class="content">
            <div class="text">
                在當今數位科技的快速發展下，虛擬實境（VR）技術日益受到關注。VR技術為使用者提供了身臨其境的體驗，並在多個領域中得到應用，如遊戲、教育、醫療等。然而，要實現真正的沈浸感需要考慮多個因素，其中介面設計是至關重要的一環。本研究旨在探討不同介面設計對使用者在虛擬環境中的沈浸感的影響，以期為優化VR技術的使用者體驗提供參考。
            </div>
            <div>
                <p class="title">大眾看法</p>
                <div>
                    虛擬實境技術近年來受到越來越多人的關注和接受。人們對VR技術的潛力持樂觀態度，認為它能夠提供全新的體驗和娛樂方式，並在教育、訓練等領域中有著廣泛的應用前景。然而，也有一些人擔心虛擬實境技術的成熟度和可靠性，對其潛在風險抱有顧慮。
                </div>
            </div>
            <div>
                <p class="title">現行產品</p>
                <div>目前市面上有許多虛擬實境產品，如Vision Pro、Oculus Rift、HTC Vive、PlayStation
                    VR等。這些產品在硬件性能、軟件支持和使用者體驗等方面存在差異，而介面設計是影響使用者體驗的重要因素之一。不同的介面設計可以影響使用者的操作方式、感知真實度以及沈浸感。</div>
            </div>
            <div class="content-imgs row row-gap-6">
                <div class="col-12 col-lg-6 text-center text-lg-start">
                    <img :src="visionPro" alt="Vision Pro" />
                    <p>Vision Pro</p>
                </div>
                <div class="col-12 col-lg-6 text-center text-lg-end">
                    <img :src="oculusRift" alt="Oculus Rift" />
                    <p>Oculus Rift</p>
                </div>
                <div class="col-12 col-lg-6 text-center text-lg-start">
                    <img :src="htcVive" alt="HTC Vive" />
                    <p>HTC Vive</p>
                </div>
                <div class="col-12 col-lg-6 text-center text-lg-end">
                    <img :src="playstationVr" alt="PlayStation VR" />
                    <p>PlayStation VR</p>
                </div>




            </div>
            <div>
                <p class="title">技術創新</p>
                <div>
                    隨著硬件技術的不斷進步，VR設備的性能和功能也在不斷提升。高解析度的顯示器、感應器、追蹤技術等創新技術的應用，使得虛擬實境的感知和互動性能夠更加真實和流暢。然而，技術創新也帶來了一些挑戰，例如圖像質量、感知延遲等問題仍然存在，需要進一步解決。
                    <br>
                    技術瓶頸：儘管虛擬實境技術取得了巨大進步，但仍然存在一些技術瓶頸需要克服。例如，許多使用者報告在使用VR設備時出現眩暈和不適感，這與感知延遲和畫面模糊等問題有關。此外，虛擬實境的內容和應用也需要更多的創新和豐富，以滿足不同使用者的需求。
                </div>
            </div>
            <div>
                <p class="title">技術瓶頸</p>
                <div>
                    儘管虛擬實境技術取得了巨大進步，但仍然存在一些技術瓶頸需要克服。例如，許多使用者報告在使用VR設備時出現眩暈和不適感，這與感知延遲和畫面模糊等問題有關。此外，虛擬實境的內容和應用也需要更多的創新和豐富，以滿足不同使用者的需求。
                </div>
            </div>
            <div>
                <p class="title">未來展望</p>
                <div>
                    未來，虛擬實境技術將繼續向前發展。我們可以期待更加先進的硬件設備和更加豐富多彩的虛擬內容。同時，介面設計也將繼續演進，以提供更加直觀和便捷的操作方式，進一步增強使用者的沈浸感和參與感。總的來說，虛擬實境技術的未來是充滿希望和潛力的，我們期待著看到它在各個領域中的廣泛應用和發展。
                </div>
            </div>
            <div class="mb-0">
                Noel 主筆
            </div>
        </div>
    </div>


</template>
<style scoped>
.article-content .content-imgs>div>img {
    object-fit: cover;
    max-width: 416px;
    width: 100%;
}

.article-content .content-imgs>div>p {
    color: #5B5B5B;
    text-align: center;
    margin-top: 8px;
}

.article-content .content div.text {
    font-size: 1rem;
}

.article-content .content p.title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1rem;
}

.article-content .content>div {
    margin-bottom: 32px;
}

@media (min-width: 992px) {

    .article-content .content>div {
        margin-bottom: 40px;
    }

    .article-content .content div.text {
        font-size: 1.25rem;
    }

}
</style>