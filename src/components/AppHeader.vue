<template>
  <header
    class="py-md-4 border-bottom border-primary-200"
    style="margin-bottom: 1px;"
  >
    <nav class="navbar navbar-expand-md py-md-1">
      <div class="container">
        <a class="navbar-brand py-0" href="/">
          <img src="@/assets/images/logo.svg" alt="logo">
        </a>
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="material-symbols-outlined fs-1 text-primary-900">menu</span>
        </button>
        <div class="collapse navbar-collapse offset-md-2 offset-lg-3" id="navbarToggler">
          <ul class="navbar-nav me-auto mb-2 mb-md-0 text-center">
            <li class="nav-item mb-4 mb-md-0 me-md-3 me-lg-7">
              <a class="nav-link active" aria-current="page" href="/">
                <span class="position-relative px-2 py-1">首頁</span>
              </a>
            </li>
            <li class="nav-item mb-4 mb-md-0 me-md-3 me-lg-7">
              <a class="nav-link" href="/collection">
                <span class="position-relative px-2 py-1">作品集</span>
              </a>
            </li>
            <li class="nav-item mb-4 mb-md-0 me-md-3 me-lg-7">
              <a class="nav-link" href="/service">
                <span class="position-relative px-2 py-1">服務項目</span>
              </a>
            </li>
            <li class="nav-item mb-4 mb-md-0 me-md-3 me-lg-7">
              <a class="nav-link" href="/blog">
                <span class="position-relative px-2 py-1">部落格</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                <span class="position-relative px-2 py-1">聯絡我</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
