import Link from "next/link";
import { Container, Separator, Text } from "./styles";

interface Props {
  title?: string;
}

export const NavHeader = ({ title = "TEAMS" }: Props) => {
  return (
    <Container>
      <Separator />
      <Link href={title === "TEAMS" ? "/teams" : "/"}>
        <Text>{title.toLocaleUpperCase()}</Text>
      </Link>
    </Container>
  );
};
