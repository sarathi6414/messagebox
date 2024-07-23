document.querySelector(".accept").addEventListener("click", function (e) {
    alert("Question Submits Successfully");
    document.querySelector("input").value = "";
  });
  
  document.querySelector(".Delete").addEventListener("click", function (e) {
    document.querySelector("input").value = "";
  });