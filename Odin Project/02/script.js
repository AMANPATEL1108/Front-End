document.addEventListener("DOMContentLoaded", function () {
  showProfile();
});
function showProfile() {
  const mainContent = document.getElementById("main-content");
  const profileForm = document.getElementById("profile-form");
  const otherForms = document.querySelectorAll(
    ".main > div:not(#profile-form)"
  );

  otherForms.forEach((form) => {
    form.style.display = "none";
  });
  profileForm.style.display = "block";
}

function showEdit() {
  const mainContent = document.getElementById("main-content");
  const editForm = document.getElementById("edit-form");
  const otherForms = document.querySelectorAll(".main > div:not(#edit-form)");

  otherForms.forEach((form) => {
    form.style.display = "none";
  });
  editForm.style.display = "block";
}

function showChange() {
  const mainContent = document.getElementById("main-content");
  const changeForm = document.getElementById("change-form");
  const otherForms = document.querySelectorAll(".main > div:not(#change-form)");

  otherForms.forEach((form) => {
    form.style.display = "none";
  });
  changeForm.style.display = "block";
}

function showMore() {
  const mainContent = document.getElementById("main-content");
  const moreContent = document.getElementById("more-content");
  const otherForms = document.querySelectorAll(
    ".main > div:not(#more-content)"
  );

  otherForms.forEach((form) => {
    form.style.display = "none";
  });
  moreContent.style.display = "block";
}
