const data = [];

const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const signUpSwitch = document.querySelector(".signUpSwitch");
const loginSwitch = document.querySelector(".loginSwitch");

const signNameInput = document.querySelector("#signNameInput"),
  signUserNameInput = document.querySelector("#signUserNameInput"),
  signPassword = document.querySelector("#signPassword"),
  signPasswordConfirm = document.querySelector("#signPasswordConfirm"),
  signBtn = document.querySelector("#signBtn");

const users = document.querySelector(".users");

signBtn.onclick = () => {
  if (signPassword.value != signPasswordConfirm.value) {
    passwordValidation();
  }

  data.push({
    name: signNameInput.value,
    userName: signUserNameInput.value,
    password: signPassword.value,
    id: new Date().getTime(),
  });

  let div = document.createElement("div");
  div.classList.add("user", "p-4", "rounded-3", "bg-white");
  div.innerHTML = `
      <div class="circle rounded-5 mb-3"></div>
      <p class="name lh-lg">${signNameInput.value}</p>
      <p class="username fs-6 lh-base">${signUserNameInput.value}</p>
      <p class="id" class="lh-1">${new Date().getTime()}</p>
  `;

  users.append(div);

  signNameInput.value = "";
  signUserNameInput.value = "";
  signPassword.value = "";
  signPasswordConfirm.value = "";
};

function passwordValidation() {
  signPassword.classList.add("error");
  signPasswordConfirm.classList.add("error");
}

// Login Signup Switching functions
signUpSwitch.onclick = () => switcher();
loginSwitch.onclick = () => switcher();
function switcher() {
  login.classList.toggle("active");
  signup.classList.toggle("active");
}
