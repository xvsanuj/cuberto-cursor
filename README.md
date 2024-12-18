# Cuberto Cursor Animation

A visually appealing custom cursor implementation with smooth animations using GSAP and dynamic hover effects. This project features a cursor that smoothly follows the mouse, rotates dynamically, and displays text inside it.

## Features

- **Smooth Cursor Movement**: The cursor smoothly follows the mouse pointer with a natural animation.
- **Dynamic Rotation**: The cursor dynamically rotates based on the movement direction.
- **Hover Effect**: Cursor scales up when hovering over specific elements like buttons.
- **Custom Text**: A customizable text is displayed inside the cursor.

## Demo

[Live Demo](https://xvsanuj.github.io/cuberto-cursor)

## Tech Stack

- **HTML**: For the structure of the page.
- **CSS**: For styling the cursor and button.
- **JavaScript**: For cursor animation logic.
- **GSAP**: For smooth animations and quick property updates.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xvsanuj/cuberto-cursor.git
   ```

2. Navigate to the project directory:
   ```bash
   cd cuberto-cursor
   ```

3. Open the `index.html` file in your browser.

## Usage

1. The cursor follows the mouse pointer with a smooth animation.
2. The cursor scales up when hovering over the "Hire me" button.
3. The text inside the cursor is customizable (default: "Hello").

## Customization

### Update the Cursor Text

To change the text inside the cursor:

- Edit the `div` with the `mf-cursor-text` class in the `index.html` file:

  ```html
  <div class="cursorText">
      Your Text Here
  </div>
  ```

### Adjust Animation Speed

Modify the `lerp` function parameter in `script.js`:

```javascript
smoothPosition.x = lerp(smoothPosition.x, mousePosition.x, 0.15);
smoothPosition.y = lerp(smoothPosition.y, mousePosition.y, 0.15);
```

Increase or decrease the `0.15` value to adjust the animation speed.

## Project Structure

```plaintext
.
├── index.html       # Main HTML file
├── style.css        # CSS for styling the cursor and button
├── script.js        # JavaScript for cursor animations
└── README.md        # Project documentation
```

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- **GSAP**: For powering the animations.
- **Inspiration**: Custom cursor designs from modern UI/UX trends.

---

*Feel free to fork this project, customize it, and share your own creative ideas!*