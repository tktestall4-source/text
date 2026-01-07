(function () {
  // ICON RIÊNG CỦA BẠN
  const loaderIcons = [
    "tải_xuống__1_-removebg-preview.png",
    "tải_xuống__2_-removebg-preview.png",
    "tải_xuống-removebg-preview.png",
  ];

  // tạo loader
  const loader = document.createElement("div");
  loader.id = "pageLoader";

  // random icon
  const img = document.createElement("img");
  img.id = "loaderIcon";

  const randomIcon =
    loaderIcons[Math.floor(Math.random() * loaderIcons.length)];

  img.src = randomIcon;
  img.alt = "Loading";

  loader.appendChild(img);
  document.body.appendChild(loader);

  // ẩn loader sau khi load
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hide"), 900);
  });
})();
