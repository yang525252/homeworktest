document.addEventListener('DOMContentLoaded', (event) => //document.addEventListener('DOMContentLoaded', (event) => { ... }); 用於檢測頁面是否加載完成。一旦加載完成，內部的函數就會執行
{
    let progressBar = document.getElementById("progressBar");
    let value = 0;
    let interval = setInterval(function() {
        value++;
        progressBar.value = value;
        if (value >= 100) {
            value = 0; // 當進度條達到 100 後，將值重置為 0
            progressBar.value = value; // 立即更新進度條為 0，以顯示進度條已歸零
          }
    }, 10); // 這裡的 100 毫秒是進度條更新的頻率，可以根據需要調整
});
