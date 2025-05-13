document.addEventListener('DOMContentLoaded', () => {
// Connecting the "Calculate Price" button
    const calcBtn = document.querySelector("#calculateBtn");
    const resetButton = document.querySelector("#resetBtn");
    summaryBox = document.querySelector("#projectSummary");


    calcBtn.addEventListener('click', calculatePrice);
// Connecting the "Reset" button in order to clear the summary box
    resetButton.addEventListener('click', function () {

    document.querySelector('#summaryType').textContent = '';
    document.querySelector('#summaryPages').textContent = '';
    document.querySelector('#summaryCustom').textContent = '';
    document.querySelector('#summaryPrice').textContent = '';
  });
  });
  
function calculatePrice() {
  const websiteSelect = document.querySelector("#websiteType");
  const websiteType = websiteSelect.value;
  const websiteText = websiteSelect.options[websiteSelect.selectedIndex].text;

  let pageCount = parseInt(document.querySelector("#pageCount").value);
  const customDesign = document.querySelector("#customDesign").checked;

  let totalPrice = 0;

// Limiting the number of pages to 10
  if (pageCount > 10) {
    pageCount = 10;
    document.querySelector("#pageCount").value = 10;
  }

// Base price, based on the website type
  if (websiteType === "-1") {
    totalPrice = 0;
  } else if (websiteType === "businessSite") {
    totalPrice += 1000;
  } else if (websiteType === "onlineStore") {
    totalPrice += 2000;
  } else if (websiteType === "blog") {
    totalPrice += 1500;
  }

// Additional cost for extra pages
  if (websiteType !== "-1" && pageCount > 1) {
    totalPrice += (pageCount - 1) * 200;
  }

// Additional cost for custom design
  if (websiteType !== "-1" && customDesign) {
    totalPrice += 1000;
  }

// Summary box display
  document.querySelector('#summaryType').textContent = websiteText;
  document.querySelector('#summaryPages').textContent = pageCount;
  document.querySelector('#summaryCustom').textContent = customDesign ? 'Yes' : 'No';
  document.querySelector('#summaryPrice').textContent = totalPrice.toLocaleString() + ' ₪';
}

  