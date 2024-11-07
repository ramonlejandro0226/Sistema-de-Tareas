import { useState } from 'react';
import UseSearchHook from '../interface/UseSearchHook';

const useSearch = (): UseSearchHook => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    return {
      searchTerm,
      loading,
      error,
      setSearchTerm,
      setLoading,
      setError,
    };
  };
  
  export default useSearch;