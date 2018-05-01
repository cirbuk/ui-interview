# UI Interview setup for react

**Setup**
  - `git clone https://github.com/KubricIO/ui-interview.git`
  - `cd ui-interview`
  - `npm install`
  - `npm run build`

This will start a storybook server running on `http://localhost:6006`

**Writing a test**
  - Write your react component in a new js file in `src` folder(Refer `src/TestComponent/index.js`)
  - Write your story in `stories` folder in a new js file(Refer `stories/test.js`)
  - Include the story file in `stories/index.js`
  - Your new component should be now visible in `http://localhost:6006`