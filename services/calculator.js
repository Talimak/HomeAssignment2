document.addEventListener('DOMContentLoaded', () => {
    // חיבור כפתור "Calculate Price"
    const calcBtn = document.querySelector('button[type="button"]');
    const resetButton = document.querySelector('button[type="reset"]');
    const summaryBox = document.querySelector("#projectSummary");
    const result = document.querySelector("#totalPrice");

    calcBtn.addEventListener('click', calculatePrice);
    // חיבור כפתור reset לאיפוס התוצאה
    resetButton.addEventListener('click', function () {
    summaryBox.classList.add('hidden');

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

  // הגבלה על מספר העמודים
  if (pageCount > 10) {
    pageCount = 10;
    document.querySelector("#pageCount").value = 10;
  }

  // מחיר בסיס לפי סוג האתר
  if (websiteType === "-1") {
    totalPrice = 0;
  } else if (websiteType === "businessSite") {
    totalPrice += 1000;
  } else if (websiteType === "onlineStore") {
    totalPrice += 2000;
  } else if (websiteType === "blog") {
    totalPrice += 1500;
  }

  // תוספת לעמודים נוספים
  if (websiteType !== "-1" && pageCount > 1) {
    totalPrice += (pageCount - 1) * 200;
  }

  // תוספת עבור עיצוב מותאם אישית
  if (websiteType !== "-1" && customDesign) {
    totalPrice += 1000;
  }

  // הצגת הסיכום
  document.querySelector('#summaryType').textContent = websiteText;
  document.querySelector('#summaryPages').textContent = pageCount;
  document.querySelector('#summaryCustom').textContent = customDesign ? 'Yes' : 'No';
  document.querySelector('#summaryPrice').textContent = totalPrice.toLocaleString() + ' ₪';
  document.querySelector('#projectSummary').classList.remove('hidden');
}

  