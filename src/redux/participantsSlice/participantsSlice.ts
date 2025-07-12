// store/participantsSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const STORAGE_KEY = "splitbill_participants";

export interface Participant {
  id: string;
  name: string;
}

export interface ParticipantsState {
  participants: Participant[];
}

export interface Participant {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  name: string;
  price: number;
  sharedBy?: string[]; // برای حالت ترکیبی
}

const loadFromStorage = (): Participant[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const initialState: ParticipantsState = {
  participants: loadFromStorage(),
};

const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    addParticipant: (state, action: PayloadAction<string>) => {
      const newParticipant: Participant = {
        id: crypto.randomUUID(),
        name: action.payload,
      };
      state.participants.push(newParticipant);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.participants));
    },
    removeParticipant: (state, action: PayloadAction<string>) => {
      state.participants = state.participants.filter(
        (p) => p.id !== action.payload
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.participants));
    },
    resetParticipants: (state) => {
      state.participants = [];
      localStorage.removeItem(STORAGE_KEY);
    },
    editParticipant: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const participant = state.participants.find(
        (p) => p.id === action.payload.id
      );
      if (participant) {
        participant.name = action.payload.name;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.participants));
      }
    },
  },
});

export const {
  addParticipant,
  removeParticipant,
  resetParticipants,
  editParticipant,
} = participantsSlice.actions;

export default participantsSlice.reducer;
