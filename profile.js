
// Profile data management
let userProfile = {
    firstName: "Julie",
    lastName: "Morgan",
    tagline: "Reimagining fabrics with creativity and purpose.",
    email: "julie.morgan@example.com",
    location: "Lviv, Ukraine",
    profileImage: "pictures/photo_2025-10-20_23-16-54.jpg"
};

// Function to load profile data from localStorage
function loadProfileData() {
    const savedProfile = localStorage.getItem('reviveUserProfile');
    if (savedProfile) {
        const parsedProfile = JSON.parse(savedProfile);
        userProfile = { ...userProfile, ...parsedProfile };
    }
    updateProfileDisplay();
}

// Function to update profile display
function updateProfileDisplay() {
    document.getElementById('userName').textContent = `${userProfile.firstName} ${userProfile.lastName}`;
    document.getElementById('userTagline').textContent = userProfile.tagline;
    document.getElementById('userEmail').textContent = userProfile.email;
    document.getElementById('userLocation').textContent = userProfile.location;
    document.getElementById('profileImage').src = userProfile.profileImage;
}

// Function to save profile data
function saveProfileData(newProfileData) {
    userProfile = { ...userProfile, ...newProfileData };
    localStorage.setItem('reviveUserProfile', JSON.stringify(userProfile));
    updateProfileDisplay();
    showNotification('Profile updated successfully!');
}

// Achievement system data
const achievements = {
    1: { unlocked: true, target: 1, current: 1, type: 'create' },
    2: { unlocked: false, target: 5, current: 3, type: 'create' },
    3: { unlocked: true, target: 3, current: 3, type: 'original' },
    4: { unlocked: false, target: 10, current: 7, type: 'waste_saved' },
    5: { unlocked: false, target: 5, current: 2, type: 'share' },
    6: { unlocked: false, target: 10, current: 3, type: 'create' },
    7: { unlocked: false, target: 5, current: 4, type: 'zero_waste' },
    8: { unlocked: false, target: 3, current: 1, type: 'technique' },
    9: { unlocked: true, target: 2, current: 2, type: 'collaborate' },
    10: { unlocked: false, target: 50, current: 12, type: 'total_points' }
};

// User stats
let userStats = {
    creations: 3,
    shares: 2,
    originalDesigns: 3,
    wasteSaved: 7,
    zeroWasteProjects: 4,
    techniquesDeveloped: 1,
    collaborations: 2,
    totalPoints: 12
};

// Function to update a single achievement
function updateAchievement(id) {
    const ach = achievements[id];
    const card = document.querySelector(`[data-achievement-id="${id}"]`);
    if (!card) return;

    const progressBar = card.querySelector('.progress-bar');
    const status = card.querySelector('.achievement-status');
    const lockedOverlay = card.querySelector('.locked-overlay');

    let newCurrent;
    switch (ach.type) {
        case 'create':
            newCurrent = userStats.creations;
            break;
        case 'share':
            newCurrent = userStats.shares;
            break;
        case 'original':
            newCurrent = userStats.originalDesigns;
            break;
        case 'waste_saved':
            newCurrent = userStats.wasteSaved;
            break;
        case 'zero_waste':
            newCurrent = userStats.zeroWasteProjects;
            break;
        case 'technique':
            newCurrent = userStats.techniquesDeveloped;
            break;
        case 'collaborate':
            newCurrent = userStats.collaborations;
            break;
        case 'total_points':
            newCurrent = userStats.totalPoints;
            break;
        default:
            newCurrent = ach.current;
    }

    // Update progress
    const percentage = (newCurrent / ach.target) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';

    // Update status text
    if (ach.type === 'waste_saved') {
        status.textContent = `${newCurrent}/${ach.target} kg Saved`;
    } else if (ach.type === 'total_points') {
        status.textContent = `${newCurrent}/${ach.target} Points`;
    } else {
        status.textContent = `${newCurrent}/${ach.target} Completed`;
    }

    // Check if unlocked
    if (newCurrent >= ach.target && !ach.unlocked) {
        ach.unlocked = true;
        card.classList.remove('locked');
        card.classList.add('unlocked');
        if (lockedOverlay) lockedOverlay.remove();
        status.textContent = 'Unlocked! 🎉';
        
        // Award points
        userStats.totalPoints += 5;
        updateAchievement(10);
        
        showNotification(`Achievement Unlocked: ${card.querySelector('.achievement-title').textContent}!`);
    }

    ach.current = newCurrent;
}

// Function to update all achievements
function updateAllAchievements() {
    Object.keys(achievements).forEach(id => updateAchievement(parseInt(id)));
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: var(--brown); color: white; 
        padding: 15px 20px; border-radius: var(--radius); box-shadow: var(--shadow); 
        z-index: 1000; animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Event Listeners
document.getElementById('addProjectBtn').addEventListener('click', function() {
    userStats.creations += 1;
    userStats.wasteSaved += Math.floor(Math.random() * 3) + 1;
    userStats.totalPoints += 3;
    
    if (Math.random() > 0.7) userStats.originalDesigns += 1;
    if (Math.random() > 0.8) userStats.zeroWasteProjects += 1;
    if (Math.random() > 0.9) userStats.techniquesDeveloped += 1;
    
    alert('New project added! Checking achievements...');
    updateAllAchievements();
});

document.querySelectorAll('.action-btn[title="Share"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        userStats.shares += 1;
        userStats.totalPoints += 1;
        alert(`Project shared! Achievement progress updated.`);
        updateAllAchievements();
    });
});

document.querySelectorAll('.action-btn[title="Edit"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (Math.random() > 0.5) {
            userStats.collaborations += 1;
            alert(`Collaboration opportunity unlocked!`);
            updateAllAchievements();
        } else {
            alert(`Editing project...`);
        }
    });
});

// Smooth transition for all links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') === 'Edit_Profile.html') {
            // Don't prevent default for edit profile link
            return;
        }
        e.preventDefault();
        const href = this.href;
        if (href) {
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });
});

// CTA button
document.querySelector('.cta-btn').addEventListener('click', function() {
    alert('Starting your design...');
});

// Sign out button
document.querySelector('.sign-out-btn').addEventListener('click', function() {
    alert('Signing out...');
});

// Check for profile updates from edit page
function checkForProfileUpdates() {
    const profileUpdated = localStorage.getItem('profileUpdated');
    if (profileUpdated === 'true') {
        loadProfileData();
        localStorage.removeItem('profileUpdated');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProfileData();
    updateAllAchievements();
    
    // Check for updates every second (for demo purposes)
    setInterval(checkForProfileUpdates, 1000);
});