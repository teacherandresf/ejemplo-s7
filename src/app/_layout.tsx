import { Stack } from "expo-router";
//Cómo cambiar el título que aparece en cada página de nuestra app
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Página de inicio" }} />
    </Stack>
  );
}
