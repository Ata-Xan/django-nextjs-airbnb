import { create } from "zustand";

interface SignupModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}
// the following ModalStore is used to manage the state of the modal, it means that it will be used to open and close the modal on the screen
const useSignupModal = create<SignupModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useSignupModal;