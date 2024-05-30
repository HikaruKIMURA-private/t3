import { create } from "zustand";
import { UpdateTaskInput } from "../schema/todo";

type state = {
  editedTask: UpdateTaskInput;
  updateEditedTask: (payload: UpdateTaskInput) => void;
  resetEditedTask: () => void;
};

const useStore = create<state>((set) => ({
  editedTask: { taskId: "", title: "", body: "" },
  updateEditedTask: (payload) =>
    set({
      editedTask: payload,
    }),
  resetEditedTask: () =>
    set({ editedTask: { taskId: "", title: "", body: "" } }),
}));

export default useStore;
