const categories = {
  restaurants: {
    title: "Restaurants",
    primary: {
      name: "Chase Sapphire Preferred",
      reward: "3× points 🍽️",
      image: "images/chase-sapphire-preferred.png",
      applePay: false
    }
  },
  grocery: {
    title: "Grocery Stores",
    primary: {
      name: "AAA Daily Advantage",
      reward: "5% cash back 🛒",
      image: "images/aaa-daily-advantage.png",
      applePay: false
    }
  },
  wholesale: {
    title: "Wholesale Clubs",
    primary: {
      name: "AAA Daily Advantage",
      reward: "3% cash back 🏷️",
      image: "images/aaa-daily-advantage.png",
      applePay: false
    }
  },
  gas: {
    title: "Gas",
    primary: {
      name: "Citi Custom Cash",
      reward: "5% cash back ⛽️",
      image: "images/citi-custom-cash.png",
      applePay: false
    }
  },
  online: {
    title: "Online Shopping",
    primary: {
      name: "Bank of America Cash Rewards",
      reward: "3% cash back 💻",
      image: "images/bofa-cash-rewards.png",
      applePay: false
    }
  },
  everything: {
    title: "Everything Else",
    primary: {
      name: "US Bank Altitude Reserve",
      reward: "2.4% via Apple Pay ✨",
      image: "images/us-bank-altitude-reserve.png",
      applePay: true
    },
    backup: {
      name: "Citi Double Cash",
      reward: "2% cash back 🔁",
      image: "images/citi-double-cash.png"
    }
  }
};

const categoryView = document.getElementById("categoryView");
const resultView = document.getElementById("resultView");

const categoryTitle = document.getElementById("categoryTitle");
const primaryCardImage = document.getElementById("primaryCardImage");
const primaryReward = document.getElementById("primaryReward");
const applePayBadge = document.getElementById("applePayBadge");

const backupSection = document.getElementById("backupSection");
const backupCardImage = document.getElementById("backupCardImage");
const backupReward = document.getElementById("backupReward");

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    if (navigator.vibrate) navigator.vibrate(10);

    const data = categories[button.dataset.category];

    categoryTitle.textContent = data.title;

    primaryCardImage.src = data.primary.image;
    primaryReward.textContent = `${data.primary.name} — ${data.primary.reward}`;

    applePayBadge.classList.toggle("hidden", !data.primary.applePay);

    if (data.backup) {
      backupSection.classList.remove("hidden");
      backupCardImage.src = data.backup.image;
      backupReward.textContent = `${data.backup.name} — ${data.backup.reward}`;
    } else {
      backupSection.classList.add("hidden");
    }

    categoryView.classList.add("hidden");
    resultView.classList.remove("hidden");
  });
});

document.getElementById("backButton").addEventListener("click", () => {
  categoryView.classList.remove("hidden");
  resultView.classList.add("hidden");
});
