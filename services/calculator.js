document.addEventListener('DOMContentLoaded', () => {
  const calcBtn = document.querySelector("#calculateBtn");
  const resetBtn = document.querySelector("#resetBtn");
  const summaryBox = document.querySelector("#projectSummary");

  calcBtn.addEventListener("click", () => {
 const websiteSelect = document.querySelector("#websiteType");
 const websiteType = websiteSelect.value;
 const websiteText = websiteSelect.options[websiteSelect.selectedIndex].text;

    const pageCount = parseInt(document.querySelector("#pageCount").value);
    const customDesign = document.querySelector("#customDesign").checked;

    let totalPrice = 0;

    // חישוב לפי סוג אתר
    if (websiteType === "businessSite") {
      totalPrice += 1000;
    } else if (websiteType === "onlineStore") {
      totalPrice += 2000;
    } else if (websiteType === "blog") {
      totalPrice += 1500;
    }

    // תוספת לעמודים
    if (pageCount > 1) {
      totalPrice += (pageCount - 1) * 200;
    }

    // תוספת לעיצוב מותאם
    if (customDesign) {
      totalPrice += 1000;
    }

    // הצגת הסיכום
    document.querySelector("#summaryType").textContent = websiteText;
    document.querySelector("#summaryPages").textContent = pageCount;
    document.querySelector("#summaryCustom").textContent = customDesign ? "Yes" : "No";
    document.querySelector("#summaryPrice").textContent = totalPrice.toLocaleString() + " ₪";

    summaryBox.classList.remove("hidden");
  });

  resetBtn.addEventListener("click", () => {
    document.querySelector("#projectSummary").classList.add("hidden");
  });
});
