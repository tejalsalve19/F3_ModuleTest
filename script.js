function getUserIP(callback) {
    // Use a third-party service to fetch the IP address
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        callback(ipAddress);
      });
  }
  
  // Call the function and store the IP address in a variable
  let userIP;
  getUserIP(ip => {
    userIP = ip;
  });
  


//   document.getElementById('getDataButton').addEventListener('click', function() {
//     // Fetch the data using the user's IP address
//     fetch(`https://ipinfo.io/61.2.156.223/geo`)
//       .then(response => response.json())
//       .then(data => {
//         // Extract the latitude and longitude from the response
//         const { loc } = data;
//         const [latitude, longitude] = loc.split(',');
  
//         // Update the iframe source with the user's location
//         const iframe = document.createElement('iframe');
//         iframe.src = `https://maps.google.com/maps?q=19.9476113,73.8301322&output=embed`;
//         iframe.width = '100%';
//         iframe.height = '450';
//         document.body.appendChild(iframe);
  
//         // Update the IP address heading with the user's IP address
//         const ipAddressHeading = document.getElementById('ipAddressHeading');
//         ipAddressHeading.innerHTML += ` 61.2.156.223`;
//       });
//   });



document.getElementById('getDataButton').addEventListener('click', function() {
    // Fetch the data using the user's IP address
    fetch(`https://ipinfo.io/61.2.156.223/geo`)
      .then(response => response.json())
      .then(data => {
        // Extract the latitude and longitude from the response
        const { loc } = data;
        const [latitude, longitude] = loc.split(',');
  
        // Construct the Google Maps HTML code
        const googleMapsHTML = `
          <html>
            <body>
              <iframe width="100%" height="450" frameborder="0" style="border:0" 
                src="https://maps.google.com/maps?q=19.9476113,73.8301322&output=embed" 
                width="360" height="270" frameborder="0" style="border:0">
              </iframe>
            </body>
          </html>
        `;
  
        // Update the iframe source with the Google Maps HTML
        const iframe = document.createElement('iframe');
        iframe.srcdoc = googleMapsHTML;
        iframe.width = '100%';
        iframe.height = '450';
        document.body.appendChild(iframe);
  
        // Update the IP address heading with the user's IP address
        const ipAddressHeading = document.getElementById('ipAddressHeading');
        ipAddressHeading.innerHTML += ` 61.2.156.223`;
      });
  });
  
  









  const { timezone } = data;

// Get the current time in the user's timezone
const currentTime = new Date().toLocaleString('en-US', { timeZone: timezone });
console.log('Current time:', currentTime);

// Assuming you have the pincode available in a variable called 'pincode'
fetch(`https://api.postalpincode.in/pincode/422207`)
  .then(response => response.json())
  .then(data => {
    // Extract the list of post offices from the response
    const postOffices = data[0].PostOffice;
    console.log('Post offices:', postOffices);
  });




  const postOfficesList = document.getElementById('postOfficesList');
const searchBox = document.getElementById('searchBox');

// Display all post offices initially
displayPostOffices(postOffices);

// Filter post offices based on search input
searchBox.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredPostOffices = postOffices.filter(postOffice =>
    postOffice.Name.toLowerCase().includes(searchTerm) ||
    postOffice.BranchType.toLowerCase().includes(searchTerm)
  );
  displayPostOffices(filteredPostOffices);
});

function displayPostOffices(postOffices) {
  postOfficesList.innerHTML = '';
  postOffices.forEach(postOffice => {
    const listItem = document.createElement('li');
    listItem.textContent = `${postOffice.Name} (${postOffice.BranchType})`;
    postOfficesList.appendChild(listItem);
  });
}
