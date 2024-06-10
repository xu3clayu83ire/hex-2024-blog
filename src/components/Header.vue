<style>
.nav-link-active::before {
    --size: 8px;
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid #919191;
    mask: conic-gradient(at var(--size) var(--size), rgba(0, 0, 0, 0) 75%, #000 0) 0 0 / calc(100% - var(--size)) calc(100% - var(--size)), linear-gradient(#000 0 0) content-box;
}

header .btn-menu-mobile .menu-icon>svg {
    display: none;
}

header .btn-menu-mobile .menu-icon>svg.active {
    display: block;
}

.navbar {
    position: relative;
}

.navbar-collapse {
    margin-top: 0px;
    z-index: 0;
}

@media (max-width: 992px) {
    .navbar-nav .nav-link {
        font-size: 20px;
        display: inline-block;
    }

    .navbar-collapse {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        z-index: 10;
        background-color: #fff;
        margin-top: 48px;
    }
}
</style>
<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Collapse } from 'bootstrap';
onMounted(() => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    mobileMenuBtn.addEventListener('click', (e) => {
        mobileMenuBtn.querySelector('svg.open').classList?.toggle("active");
        mobileMenuBtn.querySelector('svg.close').classList?.toggle("active");
    });

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            //清除其他
            navItems.forEach(el => {
                el.querySelector('a.nav-link>span').classList.remove("nav-link-active");
            });
            element.querySelector('a.nav-link>span').classList.add("nav-link-active");

            //行動-關閉菜單
            const mobileMenu = document.getElementById('navbarSupportedContent');
            const isMobileMenuShow = mobileMenu.classList.contains('show');
            if (isMobileMenuShow) {
                //var bsCollapse = new Collapse(mobileMenu);
                //bsCollapse.hide();
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                mobileMenuBtn.click();
            }

            //導頁
            const _href = element.querySelector('a.nav-link').dataset.href;
            if (_href.length > 0) {
                location.href = location.origin + '/hex-2024-camp/#/' + _href;
            }
        });
    });
});

</script>


<template>
    <header class="border-primary-200 py-lg-3">
        <nav class="navbar navbar-expand-lg my-0 my-lg-1">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <!-- <img src="@/assets/images/logo.svg" alt="logo"> -->
                    AnnA
                </a>
                <button id="mobileMenuBtn" class="btn-menu-mobile navbar-toggler border-0 shadow-none" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <!-- <span class="material-symbols-outlined fs-1 text-primary-900">menu</span> -->
                    <span class="menu-icon">
                        <svg class="open active" xmlns="http://www.w3.org/2000/svg" height="24px"
                            viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                        <svg class="close" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                            width="24px" fill="#5f6368">
                            <path
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    </span>
                </button>
                <div class="collapse navbar-collapse offset-lg-3" id="navbarSupportedContent">
                    <ul class="fw-semibold me-auto navbar-nav text-center text-lg-start lh-base">
                        <li class="me-0 me-lg-8 nav-item mb-4 mb-lg-0">
                            <a class="nav-link position-relative px-2 py-1 active pointer" data-href="index">
                                <span>首頁</span>
                            </a>
                        </li>
                        <li class="me-0 me-lg-8 nav-item mb-4 mb-lg-0">
                            <a class="nav-link position-relative px-2 py-1 pointer" data-href="works">
                                <span>作品集</span>
                            </a>
                        </li>
                        <li class="me-0 me-lg-8 nav-item mb-4 mb-lg-0">
                            <a class="nav-link position-relative px-2 py-1 pointer" data-href="service">
                                <span>服務項目</span>
                            </a>
                        </li>
                        <li class="me-0 me-lg-8 nav-item mb-4 mb-lg-0">
                            <a class="nav-link position-relative px-2 py-1 pointer" data-href="blog">
                                <span>部落格</span>
                            </a>
                        </li>
                        <li class="nav-item mb-4 mb-lg-0 ">
                            <a class="nav-link position-relative px-2 py-1 pointer" data-href="">
                                <span>聯絡我</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>