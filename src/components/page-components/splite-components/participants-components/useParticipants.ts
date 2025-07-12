// hooks/useParticipants.ts
import { useDispatch, useSelector } from "react-redux";
import {
  addParticipant as add,
  removeParticipant as remove,
  resetParticipants as reset,
  editParticipant as edit,
} from "@/redux/participantsSlice/participantsSlice";
import { AppDispatch, RootState } from "@/redux/store";

export const useParticipants = () => {
  const participants = useSelector(
    (state: RootState) => state.participants.participants
  );
  const dispatch = useDispatch<AppDispatch>();

  const addParticipant = (name: string) => dispatch(add(name));
  const removeParticipant = (id: string) => dispatch(remove(id));
  const resetParticipants = () => dispatch(reset());
  const editParticipant = (id: string, name: string) =>
    dispatch(edit({ id, name }));

  return {
    participants,
    addParticipant,
    removeParticipant,
    resetParticipants,
    editParticipant,
  };
};
