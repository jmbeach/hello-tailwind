import './App.css';

/*
Challenge:

1) Make the bottom corners of the wrapper div squared (not rounded)

2) Add a square div beneath the chitchat notification.
    * Give it a dark blue background.
    * Give it vertical padding of 6 and horizontal padding of 12
    * Add normal (paragraph-sized) white text that says "Hi, John!"

*/

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
        {/* flex-shrink-0: don't shrink the icon wrapper if the container can't fit the items https://tailwindcss.com/docs/flex-shrink */}
        <div className="flex-shrink-0">
          {/* h-12: sets the height to 3rem https://tailwindcss.com/docs/height
              w-12: sets the width to 3rem https://tailwindcss.com/docs/width */}
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          {/* text-xl: sets the font-size to 1.25rem and line-height to 1.75rem https://tailwindcss.com/docs/font-size
              font-medium: sets the font-weight to 500 https://tailwindcss.com/docs/font-weight
              text-black: sets the text color to black (duh) https://tailwindcss.com/docs/text-color */}
          <div className="text-xl font-medium text-black">ChitChat</div>
          {/* text-gray-500: sets the font color to a medium-level gray color https://tailwindcss.com/docs/text-color */}
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
