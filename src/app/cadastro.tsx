import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons";
import { THEME } from "../styles/constants";
import { Input } from "../components/Input";
import { ButtonGroupColors } from "../components/ButtonGroupColors";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const CARD_COLORS = [
  {
    id: "c1",
    name: "Azul",
    colorCode: "#0866e9",
  },
  {
    id: "c2",
    name: "Verde",
    colorCode: "#07b323",
  },
  {
    id: "c3",
    name: "Roxo",
    colorCode: "#6216b4",
  },
  {
    id: "c4",
    name: "Rosa",
    colorCode: "#b40e69",
  },
];

export type Form = {
  fullName: string;
  role: string;
  company?: string;
  experience: string;
  technology: string;
  cardColor: string;
};

type Error = {
  fullName?: string;
  role?: string;
  company?: string;
  experience?: string;
  technology?: string;
  cardColor?: string;
};

export default function Cadastro() {
  const router = useRouter();

  const params = useLocalSearchParams() as unknown as Form;

  const [form, setForm] = useState<{ data: Form; errors: Error }>({
    data: {
      fullName: params.fullName || "",
      role: params.role || "",
      company: params.company || "",
      experience: params.experience || "",
      technology: params.technology || "",
      cardColor: params.cardColor || "",
    },
    errors: {},
  });

  function handleSubmit() {
    router.push({
      pathname: "/preview",
      params: form.data,
    });
  }

  function handleInputChange(fieldName: keyof Form, value: string) {

    setForm((currentForm) => {
      return {
        ...currentForm,
        data: {
          ...currentForm.data,
          [fieldName]: value,
        },
      };
    });

    handleInputValidation(fieldName);
  }

  function handleSetOrRemoveInputError(
    name: keyof Form,
    error: string | undefined,
  ) {
    setForm((currentForm) => {
      return {
        ...currentForm,
        errors: {
          ...currentForm.errors,
          [name]: error,
        },
      };
    });
  }

  function handleInputValidation(field: keyof Form) {
    const { fullName, role, technology, experience } = form.data;

    switch (field) {
      case "fullName":
        if (!fullName || fullName.length < 3) {
          handleSetOrRemoveInputError(
            "fullName",
            "O nome completo deve possuir pelo menos 4 caracteres",
          );
        } else {
          handleSetOrRemoveInputError("fullName", undefined);
        }
        break;

      case "role":
        if (!role) {
          handleSetOrRemoveInputError("role", "Informe o seu cargo");
        } else {
          handleSetOrRemoveInputError("role", undefined);
        }
        break;

      case "technology":
        if (!technology) {
          handleSetOrRemoveInputError(
            "technology",
            "Informe a sua tecnologia favorita",
          );
        } else {
          handleSetOrRemoveInputError("technology", undefined);
        }
        break;

      case "experience":
        if (!experience || Number(experience) < 1) {
          handleSetOrRemoveInputError(
            "experience",
            "Você deve ter pelo menos 1 ano de experiência",
          );
        } else {
          handleSetOrRemoveInputError("experience", undefined);
        }
        break;
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F5F3FF",
      }}
    >
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Cadastro</Text>

            <Text style={styles.subtitle}>
              Preencha seus dados de dev
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <View style={{ gap: 12, marginBottom: 12 }}>
              <Input
                onChangeText={(text) => {
                  handleInputChange("fullName", text);
                }}
                label="Nome Completo"
                defaultValue={form.data.fullName}
                onBlur={() => {
                  handleInputValidation("fullName");
                }}
                errorMessage={form.errors["fullName"]}
              />

              <Input
                onChangeText={(text) => {
                  handleInputChange("role", text);
                }}
                label="Cargo"
                defaultValue={form.data.role}
                onBlur={() => {
                  handleInputValidation("role");
                }}
                errorMessage={form.errors["role"]}
              />

              <Input
                onChangeText={(text) => {
                  handleInputChange("company", text);
                }}
                label="Empresa (Opcional)"
                defaultValue={form.data.company}
                errorMessage={form.errors["company"]}
              />

              <Input
                onChangeText={(text) => {
                  handleInputChange("experience", text);
                }}
                label="Anos de experiência"
                defaultValue={form.data.experience}
                onBlur={() => {
                  handleInputValidation("experience");
                }}
                errorMessage={form.errors["experience"]}
              />

              <Input
                onChangeText={(text) => {
                  handleInputChange("technology", text);
                }}
                label="Tecnologia favorita"
                defaultValue={form.data.technology}
                onBlur={() => {
                  handleInputValidation("technology");
                }}
                errorMessage={form.errors["technology"]}
              />
            </View>

            <ButtonGroupColors
              onSelect={(colorCode) => {
                handleInputChange("cardColor", colorCode);
              }}
              group={CARD_COLORS}
            />
          </View>

          <View style={styles.footerContainer}>
            <Button
              label="Cadastrar Cartão"
              onPress={handleSubmit}
              disabled={
                !form.data.fullName ||
                !form.data.role ||
                !form.data.experience ||
                !form.data.technology ||
                !form.data.cardColor ||
                Object.entries(form.errors).some(
                  ([key, value]) => !!value,
                )
              }
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3FF",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 12,
  },

  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4,
  },

  title: {
    color: THEME.colors.heading,
    fontWeight: "bold",
    fontSize: THEME.text.heading.h3,
    textAlign: "center",
  },

  subtitle: {
    color: THEME.colors.subtitle,
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
  },

  footerContainer: {
    flexDirection: "column",
    gap: 12,
  },
});