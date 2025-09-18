---
layout: default
---

# Where to find Demo Time?

- https://demotime.show
- https://github.com/estruyf/vscode-demo-time

<style>
  .slide__content__inner {
    a {
      color: white !important;
      text-decoration: none !important;
    }
  }
</style>

---
layout: quote
---

# “PowerPoint made talks repeatable. Demo Time makes technical talks repeatable.”

---
layout: quote
---

# “Let your next demo be remembered for what you said, not the mistakes you made”

---
layout: intro
---

# Thank you and enjoy using Demo Time!

Elio Struyf



<div class="bg-video-bg" aria-hidden="true">
  <video autoplay loop muted playsinline preload="auto" src="https://file+.vscode-resource.vscode-cdn.net/Users/eliostruyf/Developer/demotime/demo-time-vscode/.demo/assets/vscode.mp4"></video>
</div>

<style>
  .slide__content__inner {
    background-image: none !important;

    h1 {
      line-height: 1.2 !important;
    }
    
    p {
      text-transform: uppercase;
      font-weight: 100;
    }

    img { width: 100%; }
  }

  /* Full-slide background video */
  .bg-video-bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
  }

  .bg-video-bg video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
    filter: brightness(0.65); /* dim the video so foreground text stays readable */
  }
</style>