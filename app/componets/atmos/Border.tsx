import { styled } from "@mui/material";

const Border = () => {
  return (
    <Container>
      <SBorder />
    </Container>
  );
};

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SBorder = styled("div")({
  width: "40%",
  height: 7,
  backgroundColor: "#F0EDED",
  borderRadius: 20,
  marginBottom: 15,
});

export default Border;
