# DevCard

Aplicativo mobile desenvolvido com React Native e Expo Router para criação de cartões digitais de desenvolvedor.

---

# Tecnologias utilizadas

- React Native
- Expo
- Expo Router
- TypeScript
- StyleSheet

---

# Funcionalidades

- Cadastro de desenvolvedor
- Validação de formulário
- Seleção de cor do cartão
- Preview do cartão
- Navegação entre telas
- Tela de sucesso

---

# Instalação

```bash
npm install
```

---

# Executando o projeto

```bash
npx expo start
```

---

# Estrutura de telas

## Home

<p align="center">
  <img src="./assets/index.png" width="250" />
</p>

Tela inicial do aplicativo.

---

## Cadastro

<p align="center">
  <img src="./assets/cadastro.png" width="250" />
</p>

Formulário completo com validações e seleção de cor do cartão.

---

## Preview

<p align="center">
  <img src="./assets/preview.png" width="250" />
</p>

Visualização final do cartão criado.

---

## Sucesso

<p align="center">
  <img src="./assets/sucesso.png" width="250" />
</p>

Tela exibida após finalizar o cartão.

---

# Navegação

O projeto utiliza Expo Router para navegação entre páginas.

Exemplo:

```tsx
router.push("/preview")
```

Enviando parâmetros:

```tsx
router.push({
  pathname: "/preview",
  params: {
    nome,
    cargo,
  },
})
```

---

# Como adicionar as imagens

Coloque os prints dentro da pasta:

```txt
assets/
```

Renomeie para:

```txt
index.png
cadastro.png
preview.png
sucesso.png
```

---

# Autor

Projeto desenvolvido para fins acadêmicos e prática de React Native.

