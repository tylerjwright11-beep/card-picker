function hapticTap() {
  if (navigator.vibrate) {
    navigator.vibrate(10);
  }
}

const data = {
  "Restaurants": {
    primary: {
      name: "Chase Sapphire Preferred",
      reward: "3X points",
      image: "images/chase-sapphire-preferred.png"
    }
  },
  "Grocery Stores": {
    primary: {
      name: "AAA Daily Advantage",
      reward: "5%",
      image: "images/aaa-daily-advantage.png"
    }
  },
  "Wholesale Clubs": {
    primary: {
      name: "AAA Daily Advantage",
      reward: "3%",
      image: "images/aaa-daily-advantage.png"
    }
  },
  "Gas": {
    primary: {
      name: "Citi Custom Cash",
      reward: "5%",
      image: "images/citi-custom-cash.png"
    }
  },
  "Online Shopping": {
    primary: {
      name: "Bank of America Cash Rewards",
      reward: "3%",
      image: "images/boa-cash-rewards.png"
    }
  },
  "Everything Else": {
    primary: {
      name: "US Bank Altitude Reserve (Apple Pay)",
      reward: "2.4%",
      image: "images/us-bank-altitude-reserve.png"
    },
    backup: {
      name: "Citi Double Cash",
      reward: "2%",
      image: "images/citi-double-cash.png"
    }
  }
};

const categoriesDiv = document.getElementById("categories");
const resultDiv = document.getElementById("result");
const backBtn = document.getElementById("back");

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
  categoriesDiv.classList.add("hidden");
  resultDiv.classList.remove("hidden");

  const info = data[category];

  document.getElementById("primaryTitle").textContent = info.primary.name;
  document.getElementById("primaryImage").src = info.primary.image;
  document.getElementById("primaryReward").textContent = info.primary.reward;

  if (info.backup) {
    document.getElementById("backupSection").classList.remove("hidden");
    document.getElementById("backupImage").src = info.backup.image;
    document.getElementById("backupReward").textContent = info.backup.reward;
  } else {
    document.getElementById("backupSection").classList.add("hidden");
  }
}

backBtn.onclick = () => {
  hapticTap();
  resultDiv.classList.add("hidden");
  categoriesDiv.classList.remove("hidden");
};

