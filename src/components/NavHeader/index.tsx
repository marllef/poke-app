import { Container, Separator, Text } from "./styles";

interface Props {
  title?: string;
}

export const NavHeader = ({ title = "TEAMS" }: Props) => {
  return (
    <Container>
      <Separator />
      <Text>{title}</Text>
    </Container>
  );
};
