
# Clock Application

This repository contains a React-based clock application that displays the current time in a visually appealing format. The clock updates every second and adjusts for 12-hour format with AM/PM indicators. The background features a scenic image with a blurred overlay for the clock container.

## Features

- Real-time clock updates every second.
- Displays time in 12-hour format with AM/PM notation.
- Stylish design with a background image and blurred clock container.
- Responsive layout using CSS.

## Files

### `Clock.jsx`
This file contains the main React component for the clock application. It uses `useState` and `useEffect` hooks to manage and update the time.

### `index.css`
Defines the styles for the clock application, including the background image, text styling, and layout.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/clock-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd clock-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Customization

- **Background Image**: Update the `background-image` property in `index.css` to change the background image.
- **Clock Font and Style**: Modify the styles in the `.clock` and `.clock-contain` classes in `index.css` to customize the clock's appearance.

## Code Explanation

### `Clock.jsx`
- **`formatTime` Function**:
  - Formats the current time into a 12-hour clock format with leading zeros for single-digit values.
- **`padzero` Function**:
  - Ensures single-digit numbers are padded with a leading zero.
- **`useEffect` Hook**:
  - Sets up an interval to update the time every second.
  - Cleans up the interval when the component unmounts.

### `index.css`
- Applies a fullscreen scenic background image.
- Styles the clock container with a blurred overlay and centered alignment.

## Screenshots

![image](https://github.com/user-attachments/assets/6c2d341e-7a41-4c60-92d7-f8a5c185dc1b)


## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Background image from [icolorpalette.com](https://icolorpalette.com).
