
let homeScore = 0;
let homeScoreEl = document.getElementById("home-counter"); 

function addHomePoints(points) { 
    homeScore += points;
    homeScoreEl.textContent = homeScore;
}

// --- GUEST TEAM ---
let guestScore = 0;
let guestScoreEl = document.getElementById("guest-counter"); 

function addGuestPoints(points) { 
    guestScore += points;
    guestScoreEl.textContent = guestScore;
}