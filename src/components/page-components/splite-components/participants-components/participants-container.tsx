import { useState } from "react";
import { useParticipants } from "./useParticipants";
import ParticipantList from "./participants-list-component";
import ParticipantSubmitInput from "./submitParticipants";
import ParticipantsFooterButtons from "./participantsFooterButtons";

interface ParticipantsComponentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChoseOption: (key: any) => void;
}

const ParticipantsComponent: React.FC<ParticipantsComponentProps> = ({
  handleChoseOption,
}) => {
  const [name, setName] = useState("");
  const [tempNameToEdit, setTempNameToEdit] = useState<
    | {
        id: string;
        name: string;
      }
    | undefined
  >(undefined);
  const {
    addParticipant,
    participants,
    removeParticipant,
    resetParticipants,
    editParticipant,
  } = useParticipants();

  const handleAdd = () => {
    const trimmed = name.trim();
    if (trimmed) {
      addParticipant(trimmed);
      setName("");
    }
  };

  const handleEdit = () => {
    if (tempNameToEdit && tempNameToEdit.name.trim()) {
      editParticipant(tempNameToEdit.id, tempNameToEdit.name.trim());
      setName("");
      setTempNameToEdit(undefined);
    }
  };

  return (
    <div className="px-4 pt-4 overflow-y-auto    rounded-xl shadow-md  max-w-md mx-auto space-y-4 select-none w-full h-full flex flex-col justify-between pb-20 ">
      <div className="flex flex-col gap-4">
        <h2 className="text-center flex items-center justify-between ">
          <hr className="grow border border-dashed border-light-primary" />
          <span className="px-2 text-light-secondary-text font-Yekan-Medium">
            افراد دور میز 🍽️
          </span>
          <hr className="grow border border-dashed border-light-primary" />
        </h2>

        <div className="flex flex-col gap-4">
          <ParticipantSubmitInput
            handleAdd={handleAdd}
            handleEdit={handleEdit}
            name={name}
            setName={setName}
            setTempNameToEdit={setTempNameToEdit}
            tempNameToEdit={tempNameToEdit}
          />
          <ParticipantList
            participants={participants}
            removeParticipant={removeParticipant}
            setTempNameToEdit={setTempNameToEdit}
          />
        </div>
      </div>

      <ParticipantsFooterButtons
        handleChoseOption={handleChoseOption}
        participants={participants}
        resetParticipants={resetParticipants}
      />
    </div>
  );
};

export default ParticipantsComponent;
