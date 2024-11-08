# pdftron-react-native-link-issue

To run this project first ensure the following

- Follow the steps for both iOS and android in the RN getting started guide [here](https://reactnative.dev/docs/set-up-your-environment)

- `yarn install`

- `cd ios && npx pod-install`

- `yarn start`

- In a new terminal tab run `yarn ios` or `yarn android`


To view the issue

- When the app loads, click on any of the links within the document. You will notice nothing happens as I have overridden the behavior as per the pdftron documentation. If you view the terminal in which the yarn start command is run you will see the associated console log (This is working as expected)

- Now enter reflow mode using the toolbar button bottom right

- Tap any of the links again

- The link is opened in the devices browser. This is incorrect, you would expect the link tap event to also be caught by onBehaviourActivated
