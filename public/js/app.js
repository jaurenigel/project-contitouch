document.getElementById("postData").addEventListener("submit", postData);

// submit form to api
function postData(event) {
  event.preventDefault();
  let rfq_number = document.getElementById("rfq_number").value;
  let rfq_date = document.getElementById("rfq_date").value;
  let rfq_desc = document.getElementById("rfq_desc").value;
  let rfq_condition = document.getElementById("rfq_condition").value;
  let rfq_date_close = document.getElementById("rfq_date_close").value;
  let rfq_item_id = document.getElementById("rfq_item_id").value;
  let rfq_item_amount = document.getElementById("rfq_item_amount").value;
  let rfq_item_desc = document.getElementById("rfq_item_desc").value;
  let employee_name = document.getElementById("employee_name").value;
  fetch("http://localhost:3000/api/quote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rfq_number,
      rfq_date,
      rfq_desc,
      rfq_condition,
      rfq_date_close,
      rfq_item_id,
      rfq_item_amount,
      rfq_item_desc,
      employee_name,
    }),
  })
    .then(res => res.json())
    .then(data => alert("Form Submitted"))
    .catch(err => console.log(err));
}

