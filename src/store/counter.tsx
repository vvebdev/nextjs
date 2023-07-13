import { create } from 'zustand'

interface CounterState {
  count: number
  increment: (state?: any) => void
  setCount: (value: number) => void
}

export const useCounter = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  setCount: (value: number) => set(() => ({count: value}))
}))
