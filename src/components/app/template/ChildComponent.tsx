import { Container } from "@mui/material";
import GridTemplate from "./GridTemplate";

export default function ChildComponent() {
    return (
        <Container maxWidth={'xl'}>
            <GridTemplate leftBoxWidth={4} rightBoxWidth={8}  />
        </Container>

    );
}
