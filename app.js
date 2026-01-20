const categories = {
  restaurants: {
    title: "Restaurants",
    primary: {
      name: "Chase Sapphire Preferred",
      reward: "3X Points ⭐️",
      image: "images/chase-sapphire-preferred.png",
      applePay: false
    }
  },
  grocery: {
    title: "Grocery Stores",
    primary: {
      name: "AAA Daily Advantage",
      reward: "5% Cash Back 💰",
      image: "images/aaa-daily-advantage.png",
      applePay: false
    }
  },
  wholesale: {
    title: "Wholesale Clubs",
    primary: {
      name: "AAA Daily Advantage",
      reward: "3% Cash Back 💰",
      image: "images/aaa-daily-advantage.png",
      applePay: false
    }
  },
  gas: {
    title: "Gas",
    primary: {
      name: "Citi Custom Cash",
      reward: "5% Cash Back 💰",
      image: "images/citi-custom-cash.png",
      applePay: false
    }
  },
  online: {
    title: "Online Shopping",
    primary: {
      name: "Bank of America Cash Rewards",
      reward: "3% Cash Back 💰",
      image: "images/boa-cash-rewards.png",
      applePay: false
    }
  },
  everything: {
    title: "Everything Else",
    primary: {
      name: "US Bank Altitude Reserve",
      reward: "2.4X Points ⭐️",
      image: "images/us-bank-altitude-reserve.png",
      applePay: true
    },
    backup: {
      name: "Citi Double Cash",
      reward: "2% Cash Back 💰",
      image: "images/citi-double-cash.png"
    }
  }
};

const homeHeader = document.getElementById("homeHeader");
const categoryView = document.getElementById("categoryView");
const resultView = document.getElementById("resultView");

const categoryTitle = document.getElementById("categoryTitle");
const primaryCard = document.getElementById("primaryCard");
const primaryCardName = document.getElementById("primaryCardName");
const primaryCardImage = document.getElementById("primaryCardImage");
const primaryReward = document.getElementById("primaryReward");

const divider = document.getElementById("divider");

const backupSection = document.getElementById("backupSection");
const backupCardName = document.getElementById("backupCardName");
const backupCardImage = document.getElementById("backupCardImage");
const backupReward = document.getElementById("backupReward");

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    if (navigator.vibrate) navigator.vibrate(10);

    const data = categories[button.dataset.category];

    categoryTitle.textContent = data.title;

    // REMOVE existing Apple Pay badge if present
    const existingBadge = document.getElementById("dynamicApplePay");
    if (existingBadge) existingBadge.remove();

    // Primary card
    primaryCardName.textContent = data.primary.name;
    primaryCardImage.src = data.primary.image;
    primaryReward.textContent = data.primary.reward;

    // Inject Apple Pay badge ONLY if card requires it
    if (data.primary.applePay) {
      const badge = document.createElement("img");
      badge.src = "images/apple-pay-badge.png";
      badge.alt = "Apple Pay";
      badge.className = "apple-pay";
      badge.id = "dynamicApplePay";
      primaryCard.insertBefore(badge, primaryCardImage);
    }

    // Backup card
    if (data.backup) {
      backupSection.classList.remove("hidden");
      divider.classList.remove("hidden");

      backupCardName.textContent = data.backup.name;
      backupCardImage.src = data.backup.image;
      backupReward.textContent = data.backup.reward;
    } else {
      backupSection.classList.add("hidden");
      divider.classList.add("hidden");
    }

    homeHeader.classList.add("hidden");
    categoryView.classList.add("hidden");
    resultView.classList.remove("hidden");
  });
});

document.getElementById("backButton").addEventListener("click", () => {
  homeHeader.classList.remove("hidden");
  categoryView.classList.remove("hidden");
  resultView.classList.add("hidden");

  // Remove Apple Pay badge on back
  const existingBadge = document.getElementById("dynamicApplePay");
  if (existingBadge) existingBadge.remove();

  divider.classList.add("hidden");
});
