import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DetalleTarea() {
  //Recupero los params del router.push() de tareas
  //Desestructuro un objeto para tener constantes por separado y usarlo
  const { id, titulo } = useLocalSearchParams();
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.id}>Identificador: {id}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  contenedor: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  id: { color: "#666" },
});
