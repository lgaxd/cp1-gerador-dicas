import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const tips = [
    "Organize sua mesa de trabalho no final do dia. O seu 'eu' do amanhã vai agradecer.",
    "Beba um copo de água assim que acordar para reidratar o corpo e despertar o cérebro.",
    "Antes de comprar algo por impulso, espere 24 horas. Na maioria das vezes, a vontade passa.",
    "Faça pequenas pausas durante o trabalho para manter a produtividade.",
    "Evite usar o celular antes de dormir para melhorar a qualidade do sono.",
  ];

  const getRandomTip = () =>
    tips[Math.floor(Math.random() * tips.length)];

  const [tip, setTip] = useState(getRandomTip());

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.phone}>
        <Text style={styles.title}>Gerador de Dicas</Text>

        <View style={styles.card}>
          <View style={styles.icon}>
            <MaterialIcons name="lightbulb" size={24} color="#e0a800" />
          </View>

          <Text style={styles.tip}>{tip}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setTip(getRandomTip())}
        >
          <Text style={styles.buttonText}>Nova dica</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  phone: {
    width: 320,
    height: 640,
    borderRadius: 30,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "#dfe7f3",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: "#2f3a45",
    marginTop: 10,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#f4f4f4",
    borderRadius: 20,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: -25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f3e8c8",
    justifyContent: "center",
    alignItems: "center",

    // sombra
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  tip: {
    fontSize: 15,
    color: "#2f3a45",
    textAlign: "center",
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#3f7ae0",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});