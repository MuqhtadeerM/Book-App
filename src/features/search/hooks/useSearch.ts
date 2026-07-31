import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setQuery, clearQuery } from "@/store/search/searchSlice";

export function useSearch() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.search.query);

  return {
    query,
    setQuery: (value: string) => dispatch(setQuery(value)),
    clearQuery: () => dispatch(clearQuery()),
  };
}
