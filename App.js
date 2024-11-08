import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DocumentView, RNPdftron, Config } from "@pdftron/react-native-pdf";

RNPdftron.initialize("");
RNPdftron.enableJavaScript(true);


const onBehaviorActivated = ({ action, data }) => {
  console.log("onBehaviorActivated", action, data);
};

export default function App() {
  return (
    <DocumentView
        document={"https://www.acf.hhs.gov/sites/default/files/documents/ocse/pdf_hyperlink_example.pdf"}
        bottomToolbar={[Config.Buttons.thumbnailsButton, Config.Buttons.reflowButton]}
        overrideBehavior={[Config.Actions.linkPress]}
        onBehaviorActivated={onBehaviorActivated}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
