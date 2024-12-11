# Custom Cursor with Smooth Animation and Hover Effect

A visually appealing custom cursor implementation with smooth animations using GSAP and dynamic hover effects. This project features a cursor that smoothly follows the mouse, rotates dynamically, and displays text inside it.

## Features

- **Smooth Cursor Movement**: The cursor smoothly follows the mouse pointer with a natural animation.
- **Dynamic Rotation**: The cursor dynamically rotates based on the movement direction.
- **Hover Effect**: Cursor scales up when hovering over specific elements like buttons.
- **Custom Text**: A customizable text is displayed inside the cursor.

## Demo

[Live Demo](#) *(Replace with the live demo link once hosted)*

## Tech Stack

- **HTML**: For the structure of the page.
- **CSS**: For styling the cursor and button.
- **JavaScript**: For cursor animation logic.
- **GSAP**: For smooth animations and quick property updates.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repo-name
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
  <div class="mf-cursor-text">
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

## Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- **GSAP**: For powering the animations.
- **Inspiration**: Custom cursor designs from modern UI/UX trends.

---

*Feel free to fork this project, customize it, and share your own creative ideas!*