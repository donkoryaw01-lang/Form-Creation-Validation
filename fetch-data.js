// Step 1: Define an async function
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Step 2: API URL
  const dataContainer = document.getElementById('api-data');   // Step 3: select container

  try {
    // Step 4: Fetch the data
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Step 5: Clear loading message
    dataContainer.innerHTML = '';

    // Step 6: Create list element
    const userList = document.createElement('ul');

    // Step 7: Loop through users
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name; // only names
      userList.appendChild(li);
    });

    // Step 8: Append the list to container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 9: Handle errors
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching data:', error);
  }
}

// Step 10: Run function after page loads
document.addEventListener('DOMContentLoaded', fetchUserData);
