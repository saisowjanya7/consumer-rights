function analyzeComplaint() {

    let text = document.getElementById("complaint").value.toLowerCase();
    let lang = document.getElementById("language").value;

    let result = "";
    let isValid = false;

    // 🌐 Language messages
    const messages = {
        en: {
            empty: "⚠ Please enter your complaint.",
            faulty: "✅ Valid Complaint: Faulty or outdated product. You can file a complaint.",
            delivery: "✅ Valid Complaint: Delivery issue. You can raise a complaint.",
            price: "✅ Valid Complaint: Overpricing. You can report the seller.",
            invalid: "❌ Not a valid complaint.",
            unclear: "❓ Not clear. Please explain more details.",
            result: "👉 Your Result:"
        },
        te: {
            empty: "⚠ దయచేసి మీ ఫిర్యాదును నమోదు చేయండి.",
            faulty: "✅ సరైన ఫిర్యాదు: లోపభూయిష్టమైన లేదా పాత ఉత్పత్తి. మీరు ఫిర్యాదు చేయవచ్చు.",
            delivery: "✅ సరైన ఫిర్యాదు: డెలివరీ సమస్య. మీరు ఫిర్యాదు చేయవచ్చు.",
            price: "✅ సరైన ఫిర్యాదు: అధిక ధర వసూలు. మీరు విక్రేతపై ఫిర్యాదు చేయవచ్చు.",
            invalid: "❌ ఇది సరైన ఫిర్యాదు కాదు.",
            unclear: "❓ స్పష్టంగా లేదు. దయచేసి మరిన్ని వివరాలు ఇవ్వండి.",
            result: "👉 మీ ఫలితం:"
        },
        hi: {
            empty: "⚠ कृपया अपनी शिकायत दर्ज करें।",
            faulty: "✅ वैध शिकायत: खराब या पुराना उत्पाद। आप शिकायत कर सकते हैं।",
            delivery: "✅ वैध शिकायत: डिलीवरी समस्या। आप शिकायत कर सकते हैं।",
            price: "✅ वैध शिकायत: अधिक कीमत वसूली। आप विक्रेता की शिकायत कर सकते हैं।",
            invalid: "❌ यह वैध शिकायत नहीं है।",
            unclear: "❓ स्पष्ट नहीं है। कृपया अधिक जानकारी दें।",
            result: "👉 आपका परिणाम:"
        }
    };

    let msg = messages[lang] || messages["en"];

    // 🔍 Logic
    if (text.trim() === "") {
        result = msg.empty;
    }

    else if (
        text.includes("damaged") || 
        text.includes("defective") || 
        text.includes("outdated") ||
        text.includes("expired") ||
        text.includes("broken") ||
        text.includes("old")
    ) {
        result = msg.faulty;
        isValid = true;
    }

    else if (
        text.includes("not delivered") || 
        text.includes("delay") ||
        text.includes("late")
    ) {
        result = msg.delivery;
        isValid = true;
    }

    else if (
        text.includes("overcharged") || 
        text.includes("extra money") ||
        text.includes("high price")
    ) {
        result = msg.price;
        isValid = true;
    }

    else {
        result = msg.invalid;
    }

    // 📢 Show result
    document.getElementById("result").innerText =
        msg.result + "\n" + result;

    let actionArea = document.getElementById("actionArea");

    // 🚀 Button only if valid
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

// 🔥 Redirect
function goToSite() {
    window.location.href = "https://consumerhelpline.gov.in/";
}