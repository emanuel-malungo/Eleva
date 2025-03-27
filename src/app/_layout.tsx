import { Stack } from "expo-router";
import "@/assets/styles/global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={ { headerShown: false } } />
      <Stack.Screen name="(auth)" options={ { headerShown: false } } />
      <Stack.Screen name="(dashboard)" options={ { headerShown: false } } />
    </Stack>
  );
}
