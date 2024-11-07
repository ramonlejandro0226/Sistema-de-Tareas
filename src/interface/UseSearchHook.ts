 export default interface UseSearchHook {
    searchTerm: string;
    loading: boolean;
    error: string | null;
    setSearchTerm: (term: string) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
  }