function showProfile() {
  const mainContent = document.getElementById("main-content");
  const profileForm = document.getElementById("profile-form");
  const otherForms = document.querySelectorAll(
    ".main > div:not(#profile-form)"
  );

  // Hide other forms, show profile form
  otherForms.forEach((form) => {
    form.style.display = "none";
  });
  profileForm.style.display = "block";
}

function showEdit() {
  const mainContent = document.getElementById("main-content");
  const editForm = document.getElementById("edit-form");
  const otherForms = document.querySelectorAll(".main > div:not(#edit-form)");

  // Hide other forms, show edit form
  otherForms.forEach((form) => {
    form.style.display = "none";
  });
  editForm.style.display = "block";
}

function showChange() {
  const mainContent = document.getElementById("main-content");
  const changeForm = document.getElementById("change-form");
  const otherForms = document.querySelectorAll(".main > div:not(#change-form)");

  // Hide other forms, show change form
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

  // Hide other forms, show more content
  otherForms.forEach((form) => {
    form.style.display = "none";
  });
  moreContent.style.display = "block";
}
