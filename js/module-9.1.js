const loginForm = document.querySelector(".login-form");
const inputCheckbox = document.querySelector("input[name='checkbox']");

const userData = JSON.parse(localStorage.getItem("userInfo")) ?? {};

const getDataFromLS = () => {
  try {
    if (userData === null || userData === "undefined") {
      return;
    }
    for (const key in userData) {
      loginForm.elements[key].value = userData[key];
    }
    if (userData.checkbox === "on") {
      inputCheckbox.checked = true;
    }
  } catch (e) {
    console.log(e.message);
  }
};
getDataFromLS();

const onLoginFormInput = (e) => {
  const { name, value } = e.target;
  userData[name] = value;

  if (inputCheckbox && inputCheckbox.checked === false) {
    userData.checkbox = "off";
  } else if (inputCheckbox) {
    userData.checkbox = "on";
  }
  localStorage.setItem("userInfo", JSON.stringify(userData));
};

const onLoginFormSubmit = (e) => {
  e.preventDefault();

  const { name, email, checkbox } = loginForm.elements;
  if (name.value.trim() === "" || email.value.trim() === "") {
    alert("Type info!");
    return;
    }
    const data = {
      [name.name]: name.value,
      [email.name]: email.value,
      [checkbox.name]: checkbox.value,
    };
    console.log(data);

  localStorage.removeItem("userInfo");
  loginForm.reset();
};

loginForm.addEventListener("input", onLoginFormInput);

loginForm.addEventListener("submit", onLoginFormSubmit);
