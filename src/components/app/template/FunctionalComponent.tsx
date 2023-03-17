import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilters } from "../../../reducers/actions";
import { FilterDataStore, DataStoreDispatch } from "../../../types";

type IStateProps = Pick<FilterDataStore, "data">;



const ShowUser: React.FC = props => {
  
  const dispatch = useDispatch<DataStoreDispatch>();

  const { data } = useSelector<FilterDataStore, IStateProps>(state => ({

    data: state.data
  }));

  React.useEffect(() => {
    dispatch(getFilters("1"))

  }, [dispatch]);

  return !data ? <div>"Loading..."</div> : <div > {data.toLocaleString()} User Name:  </div>;
};

export default ShowUser;
