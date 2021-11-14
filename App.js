import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
import { AuthProvider } from "./hooks/useAuth";
import StackNavigatior from "./StackNavigatior";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigatior />
      </AuthProvider>
    </NavigationContainer>
  );
}
