
//   // ハンバーガーメニュー

document.addEventListener("DOMContentLoaded", function() {
  // ハンバーガーメニューの要素を取得
  const hamburger = document.querySelector(".hamburger");
  const navi = document.querySelector(".navi");
  const navLinks = document.querySelectorAll(".navi a");

  // ハンバーガーメニューがクリックされたときの処理
  hamburger.addEventListener("click", function() {
    this.classList.toggle("active");
    navi.classList.toggle("active");
  });

  // メニュー内のリンクがクリックされたときの処理
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      hamburger.classList.remove("active");
      navi.classList.remove("active");
    });
  });
});

// ハンバーガーメニュー　↑
// スライドショー　↓
document.addEventListener("DOMContentLoaded", function() {
  // スライドショー
  const slides = document.querySelectorAll(".slide_image");
  let slideIndex = 0;

  function slide_show() {
    // スライドが存在しない場合は何もしない
    if (slides.length === 0) return;

    // 現在表示中のスライドを非表示
    slides[slideIndex].classList.remove("now");

    // 次のスライド番号（最後なら0に戻す）
    slideIndex = (slideIndex + 1) % slides.length;

    // 次のスライドを表示
    slides[slideIndex].classList.add("now");
  }

  // スライドがあるときだけ定期実行
  if (slides.length > 0) {
    setInterval(slide_show, 3000);
  }

  // 開閉メニュー
  const panels = document.querySelectorAll('.submenu dt');
  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      panel.nextElementSibling.classList.toggle('hidden');
    });
  });
});


  // hana.htmlの漫画のポップアップ
  document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const imgPopup = document.getElementById('imgPopup');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');
  const moveBtnLeft = document.getElementById('moveBtn_Left');
  const moveBtnRight = document.getElementById('moveBtn_Right');
  
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

  if (thumbnails.length > 0) {
    thumbnails.forEach((thumbnail, i) => {
      thumbnail.addEventListener('click', (e) => {
        e.preventDefault();
        currentImageIndex = i;
        imgPopup.src = thumbnails[i].src;
        modal.animate(showKeyframes, options);
        mask.animate(showKeyframes, options);
        if (moveBtnLeft && moveBtnRight) {
          moveBtnLeft.animate(showKeyframes, options);
          moveBtnRight.animate(showKeyframes, options);
        }
      });
    });
  }

  if (close) {
    close.addEventListener('click', () => {
      modal.animate(hideKeyframes, options);
      mask.animate(hideKeyframes, options);
      if (moveBtnLeft && moveBtnRight) {
        moveBtnLeft.animate(hideKeyframes, options);
        moveBtnRight.animate(hideKeyframes, options);
      }
    });
  }

  if (mask && close) {
    mask.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      close.click();
    });
  }

  if (moveBtnRight) {
    moveBtnRight.addEventListener('click', () => {
      currentImageIndex++;
      if (currentImageIndex >= thumbnails.length) currentImageIndex = 0;
      imgPopup.src = thumbnails[currentImageIndex].src;
    });
  }

  if (moveBtnLeft) {
    moveBtnLeft.addEventListener('click', () => {
      currentImageIndex--;
      if (currentImageIndex < 0) currentImageIndex = thumbnails.length - 1;
      imgPopup.src = thumbnails[currentImageIndex].src;
    });
  }
});

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

