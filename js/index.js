function copyAddress() {
  const alertBox = document.getElementById("copy-alert");
  const address = document.getElementById("solana-address").innerText;
  navigator.clipboard.writeText(address).then(() => {
    alertBox.classList.remove("d-none");
    setTimeout(() => {
      alertBox.style.opacity = 1;
    }, 10);
    window.getSelection().removeAllRanges();
    setTimeout(() => {
      alertBox.style.opacity = 0;
      setTimeout(() => {
        alertBox.classList.add("d-none");
      }, 500);
    }, 3000);
  });
}
