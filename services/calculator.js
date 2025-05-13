document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.querySelector("#calculateBtn");
    const resetButton = document.querySelector("#resetBtn");
    summaryBox = document.querySelector("#projectSummary");



    calcBtn.addEventListener('click', calculatePrice);
    resetButton.addEventListener('click', function () {

    document.querySelector('#summaryType').textContent = '';
    document.querySelector('#summaryPages').textContent = '';
    document.querySelector('#summaryCustom').textContent = '';
    document.querySelector('#summaryPrice').textContent = '';
    document.querySelector('#pricing-table').classList.remove('show');
  });
  });
  
function calculatePrice() {
  const websiteSelect = document.querySelector("#websiteType");
  const websiteType = websiteSelect.value;
  const websiteText = websiteSelect.options[websiteSelect.selectedIndex].text;

  let pageCount = parseInt(document.querySelector("#pageCount").value);
  const customDesign = document.querySelector("#customDesign").checked;

  let totalPrice = 0;

  if (pageCount > 10) {
    pageCount = 10;
    document.querySelector("#pageCount").value = 10;
  }

  if (websiteType === "-1") {
    totalPrice = 0;
  } else if (websiteType === "businessSite") {
    totalPrice += 1000;
  } else if (websiteType === "onlineStore") {
    totalPrice += 2000;
  } else if (websiteType === "blog") {
    totalPrice += 1500;
  }

  if (websiteType !== "-1" && pageCount > 1) {
    totalPrice += (pageCount - 1) * 200;
  }

  if (websiteType !== "-1" && customDesign) {
    totalPrice += 1000;
  }

  document.querySelector('#summaryType').textContent = websiteText;
  document.querySelector('#summaryPages').textContent = pageCount;
  document.querySelector('#summaryCustom').textContent = customDesign ? 'Yes' : 'No';
  document.querySelector('#summaryPrice').textContent = totalPrice.toLocaleString() + ' ₪';
  document.querySelector('#pricing-table').classList.add('show');
 

}

  