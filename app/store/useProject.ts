import { create } from 'zustand'
import works from '../utill/works'

type Store = {
  projectColor: string
  index: number,
  setIndex: (idx:number) => void
}

export const useProject = create<Store>()((set) => ({
    projectColor: works[0].color,
    index: 0,
    setIndex: (idx) => set(() => ({ 
      index: idx,
      projectColor: works[idx].color 
    })),
}))