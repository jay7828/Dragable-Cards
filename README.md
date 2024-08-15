# Interactive Canvas with Draggable and Resizable Cards

This React project creates an interactive canvas where users can add draggable and resizable cards, connect them with arrows, and visualize relationships between them.


![Canvas Overview](./src/assets/Drag%20Card%20Img.png)
## Features

- Add, remove, and move cards on the canvas.
- Resize cards dynamically.
- Connect cards with arrows to represent relationships.
- View full card content in a modal.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/interactive-canvas.git
    ```
2. Navigate to the project directory:
    ```bash
    cd interactive-canvas
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Run the development server:
    ```bash
    npm start
    ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Components

### `Canvas`

The main component that contains all the cards and manages their state.

### `Card`

A draggable and resizable card component that contains text and allows interaction through a modal.

### `Arrow`

A component that draws an arrow between two cards on the canvas.

## Dependencies

- `react-draggable`
- `react-resizable`
- `react-modal`
