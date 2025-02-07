import { create } from "zustand";

type CreateBetSheetHandlerType = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useCreateBetSheetHandler = create<CreateBetSheetHandlerType>((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true })),
    onClose: () => set(() => ({ isOpen: false })),
}));

export default useCreateBetSheetHandler;