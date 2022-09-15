import create from 'zustand'

const useGlobalTimer = create((set) => ({
    globalTimerStatus: false,
    resetTimer: true,
    setGlobalTimerStatus: (status) => set(() => ({ globalTimerStatus: status })),
    setResetTimer: () => set((state) => ({ resetTimer: !state.resetTimer }))
}))

export default useGlobalTimer