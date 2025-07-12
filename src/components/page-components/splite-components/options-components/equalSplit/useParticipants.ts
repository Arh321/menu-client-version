// hooks/useEqualSplit.ts

import { Participant } from "@/redux/participantsSlice/participantsSlice";

export const useEqualSplit = (
  total: number,
  participants: Participant[]
): (Participant & { amount: number })[] => {
  const share = participants.length > 0 ? total / participants.length : 0;

  return participants.map((p) => ({
    ...p,
    amount: Math.round(share),
  }));
};
