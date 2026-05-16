import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {View,Text,TextInput, StyleSheet,TouchableOpacity,} from "react-native";

import { router } from "expo-router";

import { THEME } from "../styles/constants";
import { Button } from "../components/Buttons";

export default function CadastroScreen() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [anos, setAnos] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [cor, setCor] = useState("Azul");


  const [nomeErro, setNomeErro] = useState("");
  const [cargoErro, setCargoErro] = useState("");
  const [anosErro, setAnosErro] = useState("");
  const [tecnologiaErro, setTecnologiaErro] = useState("");
  const [corErro, setCorErro] = useState("");

  function validarFormulario() {
    let valido = true;

    setNomeErro("");
    setCargoErro("");
    setAnosErro("");
    setTecnologiaErro("");
    setCorErro("");

    if (!nome || nome.trim().length < 3) {
      setNomeErro("Digite um nome com pelo menos 3 caracteres");
      valido = false;
    }

    if (!cargo.trim()) {
      setCargoErro("Cargo obrigatório");
      valido = false;
    }

    if (!anos.trim()) {
      setAnosErro("Informe os anos de experiência");
      valido = false;
    } else if (Number(anos) <= 0) {
      setAnosErro("O número deve ser maior que 0");
      valido = false;
    }

    if (!tecnologia.trim()) {
      setTecnologiaErro("Tecnologia obrigatória");
      valido = false;
    }

    if (!cor) {
      setCorErro("Selecione uma cor");
      valido = false;
    }

    return valido;
  }

  function handleGerarCartao() {
    const formularioValido = validarFormulario();

    if (!formularioValido) return;

    router.push({
      pathname: "/preview",
      params: {
        nome,
        cargo,
        empresa,
        anos,
        tecnologia,
        cor,
      },
    });
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Cadastro</Text>

          <Text style={styles.subtitle}>
            Preencha seus dados de dev
          </Text>
        </View>

        <View style={styles.form}>
       
          <View>
            <Text style={styles.label}>Nome completo</Text>

            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="João Silva"
            />

            {nomeErro ? (
              <Text style={styles.errorText}>{nomeErro}</Text>
            ) : null}
          </View>


          <View>
            <Text style={styles.label}>Cargo</Text>

            <TextInput
              style={styles.input}
              value={cargo}
              onChangeText={setCargo}

            />

            {cargoErro ? (
              <Text style={styles.errorText}>{cargoErro}</Text>
            ) : null}
          </View>

      
          <View>
            <Text style={styles.label}>Empresa (opcional)</Text>

            <TextInput
              style={styles.input}
              value={empresa}
              onChangeText={setEmpresa}

            />
          </View>

        
          <View>
            <Text style={styles.label}>Anos de experiência</Text>

            <TextInput
              style={styles.input}
              value={anos}
              onChangeText={setAnos}
              keyboardType="numeric"
            />

            {anosErro ? (
              <Text style={styles.errorText}>{anosErro}</Text>
            ) : null}
          </View>

     
          <View>
            <Text style={styles.label}>Tecnologia favorita</Text>

            <TextInput
              style={styles.input}
              value={tecnologia}
              onChangeText={setTecnologia}
              placeholder="React Native"
            />

            {tecnologiaErro ? (
              <Text style={styles.errorText}>{tecnologiaErro}</Text>
            ) : null}
          </View>

     
          <View>
            <Text style={styles.label}>Cor do cartão</Text>

            <View style={styles.colorsContainer}>
              <TouchableOpacity
                style={[
                  styles.colorButton,
                  cor === "Azul" && styles.selectedBlue,
                ]}
                onPress={() => setCor("Azul")}
              >
                <View
                  style={[styles.colorCircle, { backgroundColor: "#3B82F6" }]}
                />

                <Text>Azul</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.colorButton,
                  cor === "Verde" && styles.selectedGreen,
                ]}
                onPress={() => setCor("Verde")}
              >
                <View
                  style={[styles.colorCircle, { backgroundColor: "#10B981" }]}
                />

                <Text>Verde</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.colorButton,
                  cor === "Roxo" && styles.selectedPurple,
                ]}
                onPress={() => setCor("Roxo")}
              >
                <View
                  style={[styles.colorCircle, { backgroundColor: "#8B5CF6" }]}
                />

                <Text>Roxo</Text>
              </TouchableOpacity>
            </View>

            {corErro ? (
              <Text style={styles.errorText}>{corErro}</Text>
            ) : null}
          </View>
        </View>

        <Button
          label="Gerar Cartão"
          onPress={handleGerarCartao}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    justifyContent: "space-between",
  },

  headerContainer: {
    gap: 4,
  },

  title: {
    fontSize: THEME.text.heading.h1,
    fontWeight: "bold",
    color: THEME.colors.heading,
  },

  subtitle: {
    color: "#666",
    fontSize: 14,
  },

  form: {
    gap: 16,
  },

  label: {
    fontWeight: "600",
    marginBottom: 6,
    color: THEME.colors.heading,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: "#FFF",
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },

  colorsContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },

  colorButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  colorCircle: {
    width: 12,
    height: 12,
    borderRadius: 999,
  },

  selectedBlue: {
    borderColor: "#3B82F6",
    borderWidth: 2,
  },

  selectedGreen: {
    borderColor: "#10B981",
    borderWidth: 2,
  },

  selectedPurple: {
    borderColor: "#8B5CF6",
    borderWidth: 2,
  },
});