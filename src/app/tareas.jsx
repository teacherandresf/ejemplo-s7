import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
//Página que visualiza una lista de tareas y cada una lleva a la vista individual al hacer click

//Listado de objetos tareas
const tareas = [
  { id: 1, titulo: "tarea1", completada: true },
  { id: 2, titulo: "tarea2", completada: false },
  { id: 3, titulo: "tarea3", completada: false },
];

//Componente para visualizar una tarea individual que recibe dos props título y completada
function TareaItem({ titulo, completada }) {
  return (
    <View>
      <Text>{titulo + " " + completada}</Text>
    </View>
  );
}

//Componente principal que se renderiza al cargar localhost:8081/tareas
export default function App() {
  return (
    <View>
      {
        //Pata cada tarea devuelvo un JSX cuyo padre es un Pressable
        //En la función onPress hago la llamada a router.push()
        //Dentro del push defino un objeto con dos atributos pathname y params
        //Pathname es la ruta donde voy a enviar las cosas
        //Params los parámetros que irán cambiando en función de cada tarea
        //En concreto envío el título y el id
        tareas.map((t) => (
          <Pressable
            key={t.id}
            onPress={() =>
              router.push({
                pathname: "/tarea/[id]",
                params: { id: t.id, titulo: t.titulo },
              })
            }
          >
            <TareaItem titulo={t.titulo} completada={t.completada} />
          </Pressable>
        ))
      }
    </View>
  );
}
