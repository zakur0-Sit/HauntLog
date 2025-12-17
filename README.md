# HauntLog 👻

A platform where people can share their personal ghostly encounters and read the paranormal experiences of others. Discover eerie stories from around the world or write your own.

## 📖 About

HauntLog is a web application that allows users to share and explore paranormal sightings from around the world. Whether you've experienced something unexplainable or you're simply curious about others' encounters, HauntLog provides a platform to document and discover ghostly experiences.

## ✨ Features

- **Read Sightings**: Browse through a collection of paranormal encounters from various locations worldwide
- **Share Your Experience**: Upload your own ghostly sighting with location, timestamp, and detailed description
- **Simple & Clean Interface**: Easy-to-use web interface with intuitive navigation
- **RESTful API**: Built with a clean REST API architecture for data management
- **No Database Required**: Uses JSON file storage for simplicity and portability

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zakur0-Sit/HauntLog.git
   cd HauntLog
   ```

2. Install dependencies (if any are added in the future):
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
HauntLog/
├── data/
│   └── data.json           # JSON file storing all sighting records
├── handlers/
│   └── routeHandlers.js    # API route handlers for GET and POST
├── public/
│   ├── images/             # Static images
│   ├── 404.html            # 404 error page
│   ├── index.html          # Home page
│   ├── index.css           # Main stylesheet
│   ├── index.js            # Home page JavaScript
│   ├── sightings.html      # Sightings list page
│   ├── upload-sighting.html # Upload form page
│   └── upload-sighting.js  # Upload form JavaScript
├── utils/
│   ├── addNewSighting.js   # Add new sighting to data store
│   ├── getContentType.js   # Determine MIME types for static files
│   ├── getData.js          # Retrieve all sightings data
│   ├── parseJSONBody.js    # Parse JSON request bodies
│   ├── sendResponse.js     # Send HTTP responses
│   └── serveStatic.js      # Serve static files
├── .gitignore              # Git ignore configuration
├── LICENSE                 # MIT License
├── package.json            # Project metadata and scripts
├── README.md               # This file
└── server.js               # Main server entry point
```

## 🔌 API Endpoints

### GET /api
Retrieve all paranormal sightings.

**Response:**
```json
[
  {
    "uuid": "unique-id",
    "location": "Location name",
    "timeStamp": "Date and time",
    "title": "Sighting title",
    "text": "Detailed description"
  }
]
```

### POST /api
Submit a new paranormal sighting.

**Request Body:**
```json
{
  "location": "Location name",
  "timeStamp": "Date and time",
  "title": "Sighting title",
  "text": "Detailed description"
}
```

**Response:**
- **201 Created**: Sighting successfully added
- **400 Bad Request**: Invalid request data

## 🛠️ Technologies Used

- **Node.js**: Runtime environment
- **Native HTTP Module**: No external frameworks, pure Node.js
- **ES6 Modules**: Modern JavaScript module system
- **JSON**: Simple file-based data storage
- **HTML/CSS/JavaScript**: Frontend technologies

## 📝 Usage

### Viewing Sightings
1. Navigate to the home page
2. Click on "Read" in the navigation menu
3. Browse through the list of paranormal encounters

### Submitting a Sighting
1. Click on "Upload" in the navigation menu
2. Fill in the form with:
   - Location of the sighting
   - Date and time of occurrence
   - A descriptive title
   - Detailed description of your experience
3. Submit the form
4. Your sighting will be added to the collection

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Cazacu Ion

---

*Remember: Not all who wander are lost... but some encounters are simply unexplainable.* 👻
