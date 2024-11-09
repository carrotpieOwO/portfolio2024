import { create } from 'zustand'

type Store = {
  index: number
  setIndex: (idx:number) => void
}

export const useProject = create<Store>()((set) => ({
    index: 0,
    setIndex: (idx) => set(() => ({ index: idx })),
}))