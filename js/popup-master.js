      // Попап-вікно для відео
      const openBtn = document.getElementById('open-video-popup');
      const closeBtn = document.getElementById('close-video-popup');
      const modal = document.getElementById('video-modal');
      const video = document.getElementById('popup-video');

      openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        video.play();
      });

      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0;
      });

      // Закриття кліком поза відео
      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
          video.pause();
          video.currentTime = 0;
        }
      });