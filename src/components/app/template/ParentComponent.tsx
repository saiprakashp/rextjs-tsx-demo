import { Container } from "@mui/material";
import { useState } from "react";
import NavBarTemplate from "./NavBarTemplate";
import SearchComponentTemplate from "./SearchComponentTemplate";
import { useQuery, gql } from '@apollo/client';
import FilterComponent from "./FilterComponent";
import GridTemplate from "./GridTemplate";

const GET_ROCKET_INVENTORY = gql(/* GraphQL */ `
  query GetRocketInventory($year: Int!) {
    rocketInventory(year: $year) {
      id
      model
      year
      stock
    }
  }
`);
interface Inventory {
    model: string
    stock: string;
}
export default function ParentComponent() {

    const [userSearch, setUserSearch] = useState<number>(-1);
    const { loading, data } = useQuery(
        GET_ROCKET_INVENTORY,
        // variables are also typed!
        { variables: { year: userSearch } }
    );

    const handleUserSearch = (value: number) => {
        console.log(value)
        setUserSearch(value)
    }


    return (
        <Container maxWidth={'xl'}>
            <NavBarTemplate></NavBarTemplate>
            <SearchComponentTemplate handleUserSearch={handleUserSearch} />

            
            <GridTemplate leftBoxWidth={4} rightBoxWidth={8} />
        </Container>

    );
}
