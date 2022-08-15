// edit profile pic

var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

// toggle my account boxes

const sideAccountDashboard = document.getElementById('sideAccountDashboard');
const sideFavourites = document.getElementById('sideFavourites');
const sideOrders = document.getElementById('sideOrders');
const sideInbox = document.getElementById('sideInbox');
const sideAccountSettings = document.getElementById('sideAccountSettings');
const userAccountDashboard = document.getElementById('userAccountDashboard');
const userFavourites = document.getElementById('userFavourites');
const userOrders = document.getElementById('userOrders');
const userInbox = document.getElementById('userInbox');
const userAccountSettings = document.getElementById('userAccountSettings');


sideAccountDashboard.addEventListener('click', () => {
    userAccountDashboard.style.display = "flex";
    userFavourites.style.display = "none";
    userOrders.style.display = "none";
    userInbox.style.display = "none";
    userAccountSettings.style.display = "none";
})
sideFavourites.addEventListener('click', () => {
    userAccountDashboard.style.display = "none";
    userFavourites.style.display = "flex";
    userOrders.style.display = "none";
    userInbox.style.display = "none";
    userAccountSettings.style.display = "none";
})
sideOrders.addEventListener('click', () => {
    userAccountDashboard.style.display = "none";
    userFavourites.style.display = "none";
    userOrders.style.display = "flex";
    userInbox.style.display = "none";
    userAccountSettings.style.display = "none";
})
sideInbox.addEventListener('click', () => {
    userAccountDashboard.style.display = "none";
    userFavourites.style.display = "none";
    userOrders.style.display = "none";
    userInbox.style.display = "flex";
    userAccountSettings.style.display = "none";
})
sideAccountSettings.addEventListener('click', () => {
    userAccountDashboard.style.display = "none";
    userFavourites.style.display = "none";
    userOrders.style.display = "none";
    userInbox.style.display = "none";
    userAccountSettings.style.display = "flex";
})
  