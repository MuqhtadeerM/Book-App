import { genres } from "@/features/browse/api/browse.api";

export function useGenres() {
  // Static for now. Swap for useQuery({ queryKey: ["genres"], queryFn: fetchGenres })
  // once the backend endpoint exists — the return shape below is designed to match
  // what that hook will eventually provide, so call sites won't need to change.
  return {
    data: genres,
    isLoading: false,
    error: null as Error | null,
  };
}
