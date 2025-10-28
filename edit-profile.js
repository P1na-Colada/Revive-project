// Profile data management
let userProfile = {
    firstName: "Mary",
    lastName: "Morgan",
    tagline: "Reimagining fabrics with creativity and purpose.",
    email: "marymorgan@example.com",
    location: "Lviv, Ukraine",
    phone: "+1 (555) 123-4567",
    address: "123 Sustainable Street",
    about: "I'm a sustainable fashion designer passionate about upcycling and giving new life to pre-loved garments. My journey with Revive Project began in 2023, and I've since transformed 8 pieces into unique fashion statements.",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
};

// Photo edit functionality
const editPhotoBtn = document.getElementById('edit-photo-btn');
const profileImage = document.getElementById('profile-image');
const photoModal = document.getElementById('photo-modal');
const cancelPhotoBtn = document.getElementById('cancel-photo');
const savePhotoBtn = document.getElementById('save-photo');
const uploadPhotoOption = document.getElementById('upload-photo');
const removePhotoOption = document.getElementById('remove-photo');

let newProfileImage = null;

// Open photo modal when clicking on edit button OR profile image
editPhotoBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    photoModal.classList.add('active');
});

// Also allow clicking on the profile image to edit
profileImage.addEventListener('click', function() {
    photoModal.classList.add('active');
});

// Close photo modal
cancelPhotoBtn.addEventListener('click', function() {
    photoModal.classList.remove('active');
    savePhotoBtn.style.display = 'none';
    newProfileImage = null;
});

// Upload photo option
uploadPhotoOption.addEventListener('click', function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    
    fileInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(event) {
                // Show preview immediately
                profileImage.src = event.target.result;
                newProfileImage = event.target.result;
                savePhotoBtn.style.display = 'block';
                
                // Show success message for immediate feedback
                showSuccessMessage('New photo selected! Click "Save Photo" to confirm.');
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });
    
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
});

// Remove photo option
removePhotoOption.addEventListener('click', function() {
    const defaultAvatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80';
    profileImage.src = defaultAvatar;
    newProfileImage = defaultAvatar;
    savePhotoBtn.style.display = 'block';
    showSuccessMessage('Photo removed! Click "Save Photo" to confirm.');
});

// Save photo changes
savePhotoBtn.addEventListener('click', function() {
    if (newProfileImage) {
        userProfile.profileImage = newProfileImage;
        saveProfileData();
        updateWelcomeSection();
        showSuccessMessage('Profile photo updated successfully!');
    }
    
    photoModal.classList.remove('active');
    savePhotoBtn.style.display = 'none';
    newProfileImage = null;
});

// Calendar functionality
const calendarToggle = document.getElementById('calendar-toggle');
const calendar = document.getElementById('calendar');
const calendarDays = document.getElementById('calendar-days');
const monthSelect = document.getElementById('month-select');
const yearSelect = document.getElementById('year-select');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const prevYearBtn = document.getElementById('prev-year');
const nextYearBtn = document.getElementById('next-year');
const dobInput = document.getElementById('dob');
const navBtns = document.querySelectorAll('.nav-btn');
const todayBtn = document.querySelector('.today-btn');

let currentDate = new Date(1990, 2, 15); // March 15, 1990
let selectedDate = new Date(currentDate);

// Generate years for dropdown (1900-2030)
function generateYearOptions() {
    const currentYear = new Date().getFullYear();
    yearSelect.innerHTML = '';
    
    for (let year = 1900; year <= 2030; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        option.selected = year === currentDate.getFullYear();
        yearSelect.appendChild(option);
    }
}

// Update selects when date changes
function updateSelects() {
    monthSelect.value = currentDate.getMonth();
    yearSelect.value = currentDate.getFullYear();
}

// Month selection handler
monthSelect.addEventListener('change', function() {
    const selectedMonth = parseInt(this.value);
    currentDate.setMonth(selectedMonth);
    renderCalendar();
});

// Year selection handler
yearSelect.addEventListener('change', function() {
    const selectedYear = parseInt(this.value);
    currentDate.setFullYear(selectedYear);
    renderCalendar();
});

// Month navigation buttons
prevMonthBtn.addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateSelects();
    renderCalendar();
});

nextMonthBtn.addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateSelects();
    renderCalendar();
});

// Year navigation buttons
prevYearBtn.addEventListener('click', function() {
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    updateSelects();
    renderCalendar();
});

nextYearBtn.addEventListener('click', function() {
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    updateSelects();
    renderCalendar();
});

// Quick navigation buttons
navBtns.forEach(btn => {
    if (btn.classList.contains('today-btn')) return;
    
    btn.addEventListener('click', function() {
        const years = parseInt(this.dataset.years);
        currentDate.setFullYear(currentDate.getFullYear() + years);
        updateSelects();
        renderCalendar();
    });
});

// Today button
todayBtn.addEventListener('click', function() {
    currentDate = new Date();
    updateSelects();
    renderCalendar();
});

// Toggle calendar visibility
calendarToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    calendar.classList.toggle('active');
    renderCalendar();
});

// Close calendar when clicking outside
document.addEventListener('click', function() {
    calendar.classList.remove('active');
});

// Prevent calendar from closing when clicking inside
calendar.addEventListener('click', function(e) {
    e.stopPropagation();
});

// Render calendar
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Clear previous calendar days
    calendarDays.innerHTML = '';
    
    // Add day headers
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayNames.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        calendarDays.appendChild(dayElement);
    });
    
    // Get first day of month and number of days in month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-date other-month';
        calendarDays.appendChild(emptyCell);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement('div');
        dateElement.className = 'calendar-date';
        dateElement.textContent = day;
        
        // Check if this date is today
        const today = new Date();
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dateElement.classList.add('today');
        }
        
        // Check if this date is the selected date
        if (year === selectedDate.getFullYear() && 
            month === selectedDate.getMonth() && 
            day === selectedDate.getDate()) {
            dateElement.classList.add('selected');
        }
        
        dateElement.addEventListener('click', function() {
            selectedDate = new Date(year, month, day);
            updateDobInput();
            renderCalendar();
            calendar.classList.remove('active');
        });
        
        calendarDays.appendChild(dateElement);
    }
    
    // Fill remaining cells
    const totalCells = 42; // 6 rows * 7 days
    const currentCells = calendarDays.children.length;
    for (let i = currentCells; i < totalCells; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-date other-month';
        calendarDays.appendChild(emptyCell);
    }
}

// Update the date of birth input with selected date
function updateDobInput() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const formattedDate = `${monthNames[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`;
    dobInput.value = formattedDate;
}

// Load profile data from localStorage
function loadProfileData() {
    const savedProfile = localStorage.getItem('reviveUserProfile');
    if (savedProfile) {
        const parsedProfile = JSON.parse(savedProfile);
        userProfile = { ...userProfile, ...parsedProfile };
        updateFormFields();
        updateWelcomeSection();
    }
}

// Save profile data to localStorage
function saveProfileData() {
    localStorage.setItem('reviveUserProfile', JSON.stringify(userProfile));
    localStorage.setItem('profileUpdated', 'true');
}

// Update form fields with current profile data
function updateFormFields() {
    document.getElementById('first-name').value = userProfile.firstName;
    document.getElementById('last-name').value = userProfile.lastName;
    document.getElementById('email').value = userProfile.email;
    document.getElementById('phone').value = userProfile.phone;
    document.getElementById('location').value = userProfile.location;
    document.getElementById('tagline').value = userProfile.tagline;
    document.getElementById('address').value = userProfile.address;
    document.getElementById('about').value = userProfile.about;
    document.getElementById('profile-image').src = userProfile.profileImage;
}

// Update welcome section with current profile data
function updateWelcomeSection() {
    document.getElementById('welcome-name').textContent = `${userProfile.firstName} ${userProfile.lastName}`;
    document.getElementById('welcome-tagline').textContent = userProfile.tagline;
    document.getElementById('welcome-email').textContent = userProfile.email;
    document.getElementById('welcome-location').textContent = userProfile.location;
    document.getElementById('profile-image').src = userProfile.profileImage;
}

// Form submission
document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Update profile data from form
    userProfile.firstName = document.getElementById('first-name').value;
    userProfile.lastName = document.getElementById('last-name').value;
    userProfile.email = document.getElementById('email').value;
    userProfile.phone = document.getElementById('phone').value;
    userProfile.location = document.getElementById('location').value;
    userProfile.tagline = document.getElementById('tagline').value;
    userProfile.address = document.getElementById('address').value;
    userProfile.about = document.getElementById('about').value;
    
    // Save to localStorage and update display
    saveProfileData();
    updateWelcomeSection();
    showSuccessMessage('Profile updated successfully!');
});

// Discard changes button
document.getElementById('discard-btn').addEventListener('click', function() {
    loadProfileData(); // Reload original data
    showSuccessMessage('Changes discarded');
});

// Show success message
function showSuccessMessage(message) {
    const successMessage = document.getElementById('successMessage');
    successMessage.querySelector('span').textContent = message;
    successMessage.classList.add('show');
    
    setTimeout(function() {
        successMessage.classList.remove('show');
    }, 3000);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProfileData();
    generateYearOptions();
    updateSelects();
    renderCalendar();
});