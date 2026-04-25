function analyzeComplaint() {

    let text = document.getElementById("complaint").value.toLowerCase();
    let lang = document.getElementById("language").value;
    let result = "";
    let isValid = false;

    if (text.trim() === "") {
        result = "⚠ Please enter your complaint.";
    }

    else if (
        text.includes("damaged") || 
        text.includes("defective") || 
        text.includes("outdated") ||
        text.includes("expired") ||
        text.includes("broken") ||
        text.includes("old")
    ) {
        result = "✅ Valid Complaint: Faulty or outdated product.\nYou can file a complaint.";
        isValid = true;
    }

    else if (
        text.includes("not delivered") || 
        text.includes("delay") ||
        text.includes("late")
    ) {
        result = "✅ Valid Complaint: Delivery issue.\nYou can raise complaint.";
        isValid = true;
    }

    else if (
        text.includes("overcharged") || 
        text.includes("extra money") ||
        text.includes("high price")
    ) {
        result = "✅ Valid Complaint: Overpricing.\nYou can report seller.";
        isValid = true;
    }

    else {
        result = "❓ Not clear. Please explain more details.";
    }

    if (lang === "te") {
        result = "👉 మీ ఫలితం:\n" + result;
    }
    else if (lang === "hi") {
        result = "👉 आपका परिणाम:\n" + result;
    }

    document.getElementById("result").innerText = result;

    let actionArea = document.getElementById("actionArea");

    if (isValid) {
        actionArea.innerHTML = `
            <br>
            <button class="btn action-btn" onclick="goToSite()">
                🚀 File Complaint Now
            </button>
        `;
    } else {
        actionArea.innerHTML = "";
    }
}

// 🔥 Redirect function (guaranteed working)
function goToSite() {
    window.location.href = "https://consumerhelpline.gov.in/";
}
