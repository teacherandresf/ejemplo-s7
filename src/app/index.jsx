import { Link } from "expo-router";
import { View } from "react-native";

//Uso de Link para redirigir a páginas cuando no quiero pasar información de una a otra
//Se utiliza para el desplazamiento normal entre páginas distintas de nuestra app
export default function App() {
  return (
    <View>
      <Link href="/acerca" style={{ color: "#2563EB", padding: 8 }}>
        Acerca de
      </Link>
    </View>
  );
}
