What's My Weather?

Coding example gets you location and pre populates your weather based on your coordinates should you allow it. You can find another zipcodes weather by entering a zip code.

I used component composition, for the components. The complexity of the application is extremely simple, thus something like Redux, or containers or stateful routing wasn't necessary. However, I did include react-router, because it's something I have found useful in the past and I would include it in any new project. I chose to add Redux, not out of necessity but to show that I generally follow a duck pattern. This is something I've had success with in the past, and today. https://github.com/erikras/ducks-modular-redux note the pattern I follow is slightly different.

Containers are something I usually use as a higher order component to the components themselves, generally this is where things like data fetching or events are handled. I prefer to keep components pure when possible.

Hooks are something I generally use when possible, since they have changed how I view and write react for the better. If I can avoid a class component in react, I do. I did not have a need for any in depth hooks usage however I do use a useEffect hook for the initialization of the location.

I have added testing. Unit tests on the pure javascript. Admittedly, we probably could have a more verbose testing suite, but in the interest of time, I did not flesh this out. I feel that testing UI components can be problematic and time consuming, if this was truly for prod, they would be necessary. I would also add cypress automated tests to create a more robust UI testing suite.

I have added storybook, as I use it often in my day to day work. Storybook shines best, when you have multiple devs working on the same page in parallel but different components. Here, I just included a basic example, of how I broke this down into components and how each component stands independently of one another.

Below are more commands but basically run yarn and yarn start, navigate to localhost:9001 and the page should display.

It will retrieve your location and populate your weather automatically, but should you want to, you can search by zipcode.

That's it, I look forward to hearing from you and please reach out with any questions.

Getting Started
To run on your computer

brew install yarn
yarn install
yarn start
Technologies Being Used
React
Redux
React-Router
RxJS
ImmutableJS
SASS
Jest
Enzyme
Yarn
Webpack
Babel
Getting Started
To run on your computer

brew install yarn
yarn install
yarn start
Developer Command Reference
yarn start Compile the app in a dev environment, watch for changes and do hot-reloading. The app starts on http://localhost:9001
yarn build Creates a dist build folder containing minified production assets.
yarn storybook Launches the storybook for the project. Which is a nice place to develop react components, it provides many different useful tools to speed up the development process.
yarn test Runs unit tests once.
yarn test -u Runs the unit tests and updates Jest snapshots so that snapshots don't fail when you have made changes to a react component.
Testing
Snapshot Testing with Jest
"Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case for a mobile app renders a UI component, takes a screenshot, then compares it to a reference image stored alongside the test. The test will fail if the two images do not match: either the change is unexpected, or the screenshot needs to be updated to the new version of the UI component."

What is Storybook
Storybook is a UI development environment for your UI components. With it, you can visualize different states of your UI components and develop them interactively.

Storybook runs outside of your app. So you can develop UI components in isolation without worrying about app specific dependencies and requirements.

Enabled Storybook Addons
The list of currently added Addon's that are registered to the story book are as follows:

a11y
With a11y you can test compliance of your stories with web accessibility standards.

Actions
With actions, you can inspect events related to your components. This is pretty neat when you are manually testing your components.

Also, you can think of this as a way to document events in your components.

Knobs
Knobs allow you to edit React props dynamically using the Storybook UI. You can also use Knobs as dynamic variables inside your stories.

Notes
With this addon, you can write notes for each story in your component. This is pretty useful when you are working with a team.

Info
If you are using Storybook as a style guide, then this addon will help you to build a nice-looking style guide with docs, automatic sample source code with a PropType explorer.

Viewport
Viewport allows your stories to be displayed in different sizes and layouts in Storybook. This helps build responsive components inside of Storybook.
