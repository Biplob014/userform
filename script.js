document.getElementById("eye-span").addEventListener("click", () => {
  let passInput = document.getElementById("input");
  let eyeicon = document.getElementById("eye");
  let eyeslashicon = document.getElementById("eye-slash");

  if (passInput.type === "password") {
    passInput.type = "text";
    eyeicon.style.display = "block";
    eyeslashicon.style.display = "none";
  } else {
    passInput.type = "password";
    eyeicon.style.display = "none";
    eyeslashicon.style.display = "block";
  }
});
