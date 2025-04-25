import { create } from "zustand";

const useFilterStore = create((set) => ({
  selectedGenre: "all",
  setSelectedGenre: (genre) => set({ selectedGenre: genre }),
  selectedPopular: "popularity.desc",
  setSelectedPopular: (popular) => set({ selectedPopular: popular }),
}));

export default useFilterStore;