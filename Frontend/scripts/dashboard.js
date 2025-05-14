const token = localStorage.getItem('token');

fetch('http://localhost:5000/api/auth/dashboard', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`, // Passing the token in header
  },
})
  .then((res) => res.json())
  .then((data) => {
    if (data.user) {
      console.log("Dashboard User:", data.user);

      // Display user data in the HTML
      document.getElementById('name').textContent = data.user.name;
      document.getElementById('email').textContent = data.user.email;
    } else {
      alert("Access denied or token expired");
    }
  })
  .catch((err) => {
    console.error("Dashboard fetch error:", err);
    alert("Error fetching user data.");
  });

// Handle Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
  // Remove the token from localStorage
  localStorage.removeItem('token');
  
  // Redirect to login page (or any page you want after logout)
  window.location.href = '/login.html';  // You can change this to your actual login page URL
});
