 const btn = document.getElementById("submitBtn");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  // Bắt sự kiện click
  btn.addEventListener("click", function () {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Ví dụ: log ra console
    console.log("Username:", username);
    console.log("Password:", password);

   
    if (!username || !password) {
      alert("Vui lòng điền đầy đủ thông tin!");
    } else {
      alert(`Xin chào ${username}!`);
    }
  });