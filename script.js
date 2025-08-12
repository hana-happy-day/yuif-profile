$(function() {
  // ハンバーガーメニュー
  $(".hamburger").click(function() {
    $(this).toggleClass("active");
    $(".navi").toggleClass("active");
  });

  $(".nav a").click(function() {
    $(".hamburger").removeClass("active");
    $(".navi").removeClass("active");
  });
});

// jQueryに依存しないスクリプトは、DOMContentLoadedイベントリスナーで囲むことで、
// HTML要素が完全に読み込まれた後に実行されることを保証します。
document.addEventListener("DOMContentLoaded", function() {
  // スライドショー
  const slides = document.querySelectorAll(".slide_image");
  let slideIndex = 0;

  function slide_show() {
    // 現在表示中のスライドを非表示
    slides[slideIndex].classList.remove("now");

    // 次のスライド番号（最後なら0に戻す）
    slideIndex = (slideIndex + 1) % slides.length;

    // 次のスライドを表示
    slides[slideIndex].classList.add("now");
  }

  // 3秒ごとに切り替え
  setInterval(slide_show, 3000);

  // 開閉メニュー
  const panels = document.querySelectorAll('.submenu dt');
  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      // hiddenクラスがあれば削除、なければ追加する
      panel.nextElementSibling.classList.toggle('hidden');
    });
  });

  // hana.htmlの漫画のポップアップ
  const thumbnails = document.querySelectorAll('.thumbnail');
  const imgPopup = document.querySelector('#imgPopup');
  const close = document.querySelector('#close');
  const modal = document.querySelector('#modal');
  const mask = document.querySelector('#mask');
  const moveBtnLeft = document.querySelector('#moveBtn_Left');
  const moveBtnRight = document.querySelector('#moveBtn_Right');
  let currentImageIndex = 0;

  const showKeyframes = {
    opacity: [0, 1],
    visibility: 'visible',
  };

  const hideKeyframes = {
    opacity: [1, 0],
    visibility: 'hidden',
  };

  const options = {
    duration: 500,
    easing: 'ease',
    fill: 'forwards',
  };

  // モーダル表示
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener('click', (event) => {
      event.preventDefault();
      currentImageIndex = i;
      imgPopup.src = thumbnails[currentImageIndex].src;
      modal.animate(showKeyframes, options);
      mask.animate(showKeyframes, options);
      if (moveBtnLeft && moveBtnRight) {
        moveBtnLeft.animate(showKeyframes, options);
        moveBtnRight.animate(showKeyframes, options);
      }
    });
  });

  // モーダル閉じる
  close.addEventListener('click', () => {
    modal.animate(hideKeyframes, options);
    mask.animate(hideKeyframes, options);
    if (moveBtnLeft && moveBtnRight) {
      moveBtnLeft.animate(hideKeyframes, options);
      moveBtnRight.animate(hideKeyframes, options);
    }
  });

  // マスククリックで閉じる（遷移防止つき）
  mask.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    close.click();
  });

  // 右移動
  if (moveBtnRight) {
    moveBtnRight.addEventListener('click', () => {
      currentImageIndex++;
      if (currentImageIndex >= thumbnails.length) currentImageIndex = 0;
      imgPopup.src = thumbnails[currentImageIndex].src;
    });
  }

  // 左移動
  if (moveBtnLeft) {
    moveBtnLeft.addEventListener('click', () => {
      currentImageIndex--;
      if (currentImageIndex < 0) currentImageIndex = thumbnails.length - 1;
      imgPopup.src = thumbnails[currentImageIndex].src;
    });
  }

  // 華のトリミング画像ランダム表示
  window.hana_trimming = function() {
    let data;
    let img_data;
    data = Math.random();

    if (data >= 0.8) {
      img_data = "img/hana/photo2.png";
    } else if (data >= 0.6) {
      img_data = "img/hana/photo3.png";
    } else if (data >= 0.4) {
      img_data = "img/hana/photo4.png";
    } else if (data >= 0.2) {
      img_data = "img/hana/photo5.png";
    } else {
      img_data = "img/hana/photo6.png";
    }
    document.getElementById("hana_trimming_img").src = img_data;
  };

});
