import './App.css';

function App() {
  /**
   * Explained:
   *  p-6: "padding 6" on all sides of the div https://tailwindcss.com/docs/padding
   *  max-w-sm: sets the max-width of the div to 24rem https://tailwindcss.com/docs/max-width
   *  mx-auto: sets the margin to auto in the horizontal direction https://tailwindcss.com/docs/margin
   *  bg-white: background white (duh) https://tailwindcss.com/docs/background-color
   *  rounded-xl: uses large rounding on the corners - 0.75rem https://tailwindcss.com/docs/border-radius
   *  flex: makes the div display = flex https://tailwindcss.com/docs/flex
   *  items-center: flex modifier to set align-items = center https://tailwindcss.com/docs/align-items
   *  space-x-4: modifies space between elements in x direction https://tailwindcss.com/docs/space#class-reference
   */
  return (
    <div className="App">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
