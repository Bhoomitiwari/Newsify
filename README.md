# News Website

This repository contains the code for a dynamic news website. It includes both a backend and frontend implementation. The website fetches and displays news articles from an external API, providing users with a seamless browsing experience.

---

## Features

- **Frontend**:
  - Responsive navigation bar with categorized news sections.
  - Dynamic news cards displaying headlines, descriptions, sources, and timestamps.
  - Search functionality to fetch news based on user input.
  - Logout button functionality.
  - Interactive and visually appealing UI with hover effects.

- **Backend**:
  - Node.js server using Express.
  - Routes for user authentication.
  - CORS enabled for secure cross-origin requests.
  - MongoDB database connection.

---

## Prerequisites

- Node.js installed on your system.
- MongoDB setup (local or cloud).
- API key from [NewsAPI](https://newsapi.org/).

---

## Installation

### Backend
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add your MongoDB connection string in `ConnectDb.js`.
5. Start the backend server:
   ```bash
   node index.js
   ```

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Replace the `API_KEY` in the `<script>` section of your HTML file with your NewsAPI key.
3. Open the `index.html` file in your browser or use a live server.

---

## File Structure

```
.
├── backend
│   ├── index.js          # Entry point for the backend server.
│   ├── ConnectDb.js      # MongoDB connection logic.
│   ├── routes
│   │   └── auth.js       # Authentication routes.
│   └── package.json      # Backend dependencies.
├── frontend
│   ├── index.html        # Main HTML file.
│   ├── style.css         # Styles for the frontend (if any).
│   └── script.js         # JavaScript for frontend logic.
└── README.md             # Project documentation.
```

---

## API Usage

- **Base URL**: `https://newsapi.org/v2/everything`
- **Sample Endpoint**: `/everything?q={query}&apiKey={API_KEY}`

---

## How to Use

1. **Homepage**:
   - Displays news categorized into topics like IPL, Finance, Politics, and more.
   - News cards display the image, title, description, source, and publication date.

2. **Search**:
   - Type any keyword in the search bar and click on the search button.
   - Results are dynamically fetched and displayed.

3. **Navigation**:
   - Click on any category in the navigation bar to view related news.

4. **Logout**:
   - The logout button is displayed on the top-right corner.

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend
- Node.js
- Express.js
- MongoDB

---

## Deployment

You can deploy the backend using platforms like Heroku, AWS, or Vercel. For the frontend, you can use services like Netlify or GitHub Pages.

---

## Future Improvements

- Add user authentication for personalized news feeds.
- Implement pagination for better user experience.
- Allow users to save their favorite articles.

---

## License

This project is open-source and available under the MIT License.

---

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.

---

## Contact

For any questions or feedback, feel free to contact the project maintainer.
