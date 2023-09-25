# Feedback App Explanation

The website created from this source code is hosted at [https://master--chic-hotteok-a293f4.netlify.app/](https://master--chic-hotteok-a293f4.netlify.app/). This document provides an explanation of the components and code snippets used in the Feedback App project.

## App Component (App.js)

The `App` component serves as the main entry point of the application. It utilizes the React Router for navigation and provides the layout structure for the different pages and components. Here's an overview of its structure:

- It wraps the entire application in a `FeedbackProvider` context provider to manage feedback data and state.
- It includes a `Router` component for setting up routing in the application.
- The `Header` component is rendered at the top of every page.
- The main content is enclosed within a `div` with a class of "container".
- The `Routes` component defines the routes for different pages:
    - The home page ("/") displays the `FeedbackForm`, `FeedbackStats`, `FeedbackList`, and an `AboutIconLink`.
    - The "/about" route displays the `AboutPage`.

## FeedbackForm Component (FeedbackForm.js)

The `FeedbackForm` component is responsible for gathering and submitting feedback. Key features and functionality include:

- It manages the state for `text`, `rating`, `btnDisabled`, and `message`.
- Utilizes the `FeedbackContext` to access functions like `addFeedback`, `updateFeedback`, and `feedbackEdit`.
- Allows users to enter feedback text and select a rating using a `RatingSelect` component.
- Validates user input, enabling/disabling the submission button based on input length and displays error messages.
- Handles both adding new feedback and updating existing feedback when in edit mode.

## AboutIconLink Component (AboutIconLink.js)

The `AboutIconLink` component is a simple component that renders a link to the "/about" page. It utilizes the `react-router-dom` library for routing and displays a question mark icon (using `react-icons/fa`) as a clickable link.

## FeedbackContext and FeedbackProvider (FeedbackContext.js)

- `FeedbackContext` is created using the `createContext` function from React. It defines the context that provides feedback-related data and functions to the components.
- `FeedbackProvider` is a component that wraps the entire application with the `FeedbackContext.Provider`. It initializes and manages the feedback data and provides functions like `addFeedback`, `deleteFeedback`, `editFeedback`, and `updateFeedback` to its children components.

## Card Component (Card.js)

The `Card` component is a styled component that wraps content with a card-like appearance. It takes the `children` prop to render content within the card. It also accepts an optional `reverse` prop that can be used to change the card's appearance.

## FeedbackItem Component (FeedbackItem.js)

The `FeedbackItem` component displays individual feedback items within a card. It uses icons from `react-icons/fa` for delete and edit actions. It utilizes the `FeedbackContext` to access the `deleteFeedback` and `editFeedback` functions.

## RatingSelect Component (RatingSelect.js)

The `RatingSelect` component displays a radio button group for selecting a rating. It allows users to choose a rating from 1 to 10 and updates the selected rating in the state. The `FeedbackEdit` context is used to synchronize the selected rating when in edit mode.

---

This explanation provides an overview of the key components and functionality within the Feedback App project. For detailed implementation and code, refer to the respective component files.
