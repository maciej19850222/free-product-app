// Sample data for listings
const listings = [
    {
        id: 1,
        title: "Comfortable Sofa",
        category: "furniture",
        description: "Comfortable three-seater sofa in good condition. Moving out and need to find it a new home.",
        location: "Downtown, City",
        image: "images/placeholder-furniture.jpg",
        contact: "john@example.com",
        date: "March 12, 2025"
    },
    {
        id: 2,
        title: "Working Laptop",
        category: "electronics",
        description: "5-year-old laptop that still works well for basic tasks. Some minor scratches on the case.",
        location: "North District",
        image: "images/placeholder-electronics.jpg",
        contact: "sara@example.com",
        date: "March 15, 2025"
    },
    {
        id: 3,
        title: "Children's Books",
        category: "books",
        description: "Collection of 15 children's books in excellent condition. Suitable for ages 5-8.",
        location: "Westside",
        image: "images/placeholder-books.jpg",
        contact: "mike@example.com",
        date: "March 10, 2025"
    },
    {
        id: 4,
        title: "Winter Clothing Bundle",
        category: "clothing",
        description: "Bundle of winter clothes including jackets, sweaters, and scarves. All clean and in good condition.",
        location: "East End",
        image: "images/placeholder-clothing.jpg",
        contact: "emily@example.com",
        date: "March 18, 2025"
    },
    {
        id: 5,
        title: "Free Math Tutoring",
        category: "services",
        description: "Offering free math tutoring for high school students. One hour per week, flexible scheduling.",
        location: "Online / South District",
        image: "images/placeholder-services.jpg",
        contact: "david@example.com",
        date: "March 14, 2025"
    },
    {
        id: 6,
        title: "LEGO Set",
        category: "toys",
        description: "Complete LEGO city set. Used but all pieces are there. Suitable for kids 8+.",
        location: "Central Park Area",
        image: "images/placeholder-toys.jpg",
        contact: "lisa@example.com",
        date: "March 16, 2025"
    }
];

// Function to display listings
function displayListings(listingsToShow) {
    const listingsContainer = document.getElementById('listings-container');
    listingsContainer.innerHTML = '';
    
    if (listingsToShow.length === 0) {
        listingsContainer.innerHTML = '<p style="text-align: center; width: 100%;">No listings found matching your criteria.</p>';
        return;
    }
    
    listingsToShow.forEach(listing => {
        const listingCard = document.createElement('div');
        listingCard.className = 'listing-card';
        listingCard.setAttribute('data-id', listing.id);
        
        listingCard.innerHTML = `
            <div class="listing-image" style="background-image: url('${listing.image}')"></div>
            <div class="listing-details">
                <h3 class="listing-title">${listing.title}</h3>
                <p class="listing-location">${listing.location}</p>
                <p class="listing-price">Free</p>
                <p class="listing-description">${listing.description.substring(0, 100)}...</p>
                <div class="listing-footer">
                    <span class="listing-date"