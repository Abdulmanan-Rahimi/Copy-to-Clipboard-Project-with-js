const copyBtn = document.querySelector("button");
const textarea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
  textarea.select();
  let textValue = textarea.value;
  navigator.clipboard.writeText(textValue);
  copyBtn.innerHTML = "Copied";
  copyBtn.style.backgroundColor = "#03a9f4";

  setTimeout(() => {
    copyBtn.innerHTML = "Copy";
    copyBtn.style.backgroundColor = "#B3E5FC";
  }, 1500);
});