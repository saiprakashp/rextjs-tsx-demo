import { CircularProgress, Container, Snackbar } from "@mui/material";
import { useState } from "react";
import NavBarTemplate from "./NavBarTemplate";
import SearchComponentTemplate from "./SearchComponentTemplate";
import { useQuery, gql, NetworkStatus } from '@apollo/client';
import FilterComponent from "./FilterComponent";
import GridTemplate from "./GridTemplate";

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export default function NavigationComponent() {

  const [userSearch, setUserSearch] = useState<string>('');
  const [showErrorMessage, setErrorMessage] = useState<boolean>(false);
  // const { loading, error, data, refetch, networkStatus } = useQuery(GET_DOG_PHOTO, {
  //   variables: { userSearch },
  //   notifyOnNetworkStatusChange: true,
  // });
  const handleClose = () => {
    setErrorMessage(false)
  };

  const handleUserSearch = (value: string) => {
    setUserSearch(value)
  }

  // if (networkStatus === NetworkStatus.refetch) return <CircularProgress />;
  // if (loading) return <CircularProgress />;


  return (
    <Container maxWidth={'xl'}>
      <NavBarTemplate></NavBarTemplate>
      <SearchComponentTemplate handleUserSearch={handleUserSearch} />


      <GridTemplate leftBoxWidth={4} rightBoxWidth={8} />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={showErrorMessage}
        onClose={handleClose}
        message="SomeThing went wrong"
      />;
    </Container>

  );
}
