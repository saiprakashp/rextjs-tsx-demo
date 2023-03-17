import { Container } from "@mui/material";
import NavBarTemplate from "./NavBarTemplate";
import SearchComponentTemplate from "./SearchComponentTemplate";

export default function ParentComponent() {
    return (
        <Container maxWidth={'xl'}>
            <NavBarTemplate></NavBarTemplate>
            <SearchComponentTemplate />
        </Container>

    );
}
