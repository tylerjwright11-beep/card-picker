function hapticTap() {
  if (navigator.vibrate) {
    navigator.vibrate(10);
  }
}

const data = {
  "Restaurants": {
    primary: {
      name: "Chase Sapphire Preferred",
      reward: "3X ⭐️",
      image: "images/chase-sapphire-preferred.png"
    }
  },
  "Grocery Stores": {
    primary: {
      name: "AAA Daily Advantage",
      reward: "5% 💰",
      image: "images/aaa-daily-advantage.png"
    }
  },
  "Wholesale Clubs": {
    primary: {
      name: "AAA Daily Advantage",
      reward: "3% 💰",
      image: "images/aaa-daily-advantage.png"
    }
  },
  "Gas": {
    primary: {
      name: "Citi Custom Cash",
      reward: "5% 💰",
      image: "images/citi-custom-cash.png"
    }
  },
  "Online Shopping": {
    primary: {
      name: "Bank of America Cash Rewards",
      reward: "3% 💰",
      image: "images/boa-cash-rewards.png"
    }
  },
  "Everything Else": {
    primary: {
      name: "US Bank Altitude Reserve",
      reward: "2.4% 💰",
      image: "images/us-bank-altitude-reserve.png",
      applePay: true
    },
    backup: {
      name: "Citi Double Cash",
      reward: "2% 💰",
      image: "images/citi-double-cash.png"
    }
  }
};

const categoriesDiv = document.getElementById("categories");
const resultDiv = document.getElementById("result");
const backBtn = document.getElementById("back");

const primaryTitle = document.getElementById("primaryTitle");
const primaryImage = document.getElementById("primaryImage");
const primaryReward = document.getElementById("primaryReward");
const applePayBadge = document.getElementById("applePayBadge");

const backupSection = document.getElementById("backupSection");
const backupImage = document.getElementById("backupImage");
const backupReward = document.getElementById("backupReward");

for (const category in data) {
  const btn = document.createElement("button");
  btn.textContent = category;
  btn.onclick = () => {
    hapticTap();
    showResult(category);
  };
  categoriesDiv.appendChild(btn);
}

function showResult(category) {
  resultDiv.classList.remove("fade-in");

  categoriesDiv.classList.add("hidden");
  resultDiv.classList.remove("hidden");

  const info = data[category];

  primaryTitle.textContent = info.primary.name;
  primaryImage.src = info.primary.image;
  if (info.primary.applePay) {
    applePayBadge.classList.remove("hidden");
  } else {
    applePayBadge.classList.add("hidden");
  }
  primaryReward.textContent = info.primary.reward;

  

  if (info.backup) {
    backupSection.classList.remove("hidden");
    backupImage.src = info.backup.image;
    backupReward.textContent = info.backup.reward;
  } else {
    backupSection.classList.add("hidden");
  }

  requestAnimationFrame(() => {
    resultDiv.classList.add("fade-in");
  });
}

backBtn.onclick = () => {
  hapticTap();
  resultDiv.classList.add("hidden");
  categoriesDiv.classList.remove("hidden");
};




