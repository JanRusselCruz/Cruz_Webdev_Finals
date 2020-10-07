function validateForm() {
  var x = document.forms["form"]["txtName"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  var x = document.forms["form"]["txtlastName"].value;
  if (x == "") {
    alert("Last Name must be filled out");
    return false;
  }
}
