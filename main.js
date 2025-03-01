const allSpans = document.querySelectorAll(".buttons span");
const results = document.querySelector(".results > span");
const input = document.getElementById("the-input");

allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }
    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});
function showMessage() {
  if (input.value === "") {
    results.innerHTML = "Input Can't Be Empty";
  }
}
function checkItem() {
  if (input.value !== "") {
    if (window.localStorage.getItem(input.value)) {
      results.innerHTML = `Find Local Storage Item Called <span>${input.value}</span>`;
    } else {
      results.innerHTML = `No Local Storage Item With the Name <span>${input.value}</span>`;
    }
  } else {
    showMessage();
  }
}
function addItem() {
  if (input.value !== "") {
    localStorage.setItem(input.value, "Value");
    results.innerHTML = `Local Storage Item <span>${input.value}</span> Added`;
    input.value = "";
    input.focus();
  } else {
    showMessage();
  }
}
function deleteItem() {
  if (input.value !== "") {
    if (localStorage.getItem(input.value)) {
      localStorage.removeItem(input.value);
      results.innerHTML = `Local Storage Item <span>${input.value}</span> Deleted`;
      input.value = "";
    } else {
      results.innerHTML = `No Local Storage Item With the Name <span>${input.value}</span>`;
    }
    input.focus();
  } else {
    showMessage();
  }
}
function showItems() {
  if (localStorage.length) {
    results.innerHTML  = ``;
    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="keys">${key}</span> `;
    }
  } else {
    results.innerHTML = `Local Storage is Empty`;
  }
}
