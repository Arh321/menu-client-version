import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { Participant } from "@/redux/participantsSlice/participantsSlice";

interface ParticipantsFooterButtonsProps {
  participants: Participant[];
  resetParticipants: () => void;
  handleChoseOption: (option: string) => void;
}

const ParticipantsFooterButtons: React.FC<ParticipantsFooterButtonsProps> = ({
  participants,
  resetParticipants,
  handleChoseOption,
}) => {
  return (
    <div className="w-full flex items-center justify-between fixed bottom-4 right-0 left-0 px-4 gap-2 max-w-[470px] mx-auto">
      {participants.length > 0 && (
        <div className=" flex items-center justify-center w-full">
          <button
            onClick={resetParticipants}
            className="w-full mx-auto bg-light-background font-Yekan-Regular text-sm text-red-500 border border-red-300 rounded-lg py-2 hover:bg-red-500/10 transition self-end"
          >
            پاک کردن همه
          </button>
        </div>
      )}
      <CTAButton
        disabled={participants.length == 0}
        onClick={() => handleChoseOption("2")}
        className="p-2 grow"
      >
        بعدی
      </CTAButton>
    </div>
  );
};

export default ParticipantsFooterButtons;
