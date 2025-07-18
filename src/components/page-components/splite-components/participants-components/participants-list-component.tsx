import { EditIcon } from "@/components/icons/icons-index";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { DeleteOutlined } from "@ant-design/icons";
interface ParticipantListProps {
  participants: Array<{
    id: string;
    name: string;
  }>;
  setTempNameToEdit: (person: { id: string; name: string }) => void;
  removeParticipant: (id: string) => void;
}

const ParticipantList: React.FC<ParticipantListProps> = ({
  participants,
  setTempNameToEdit,
  removeParticipant,
}) => {
  if (participants.length == 0)
    return (
      <p className="text-gray-500 text-center font-Yekan-Medium">
        فعلا کسی اضافه نشده 🤷‍♂️
      </p>
    );
  return (
    <ul className="space-y-2">
      {participants.map((person, index) => (
        <li
          key={person.id}
          style={{
            opacity: 0,
            transform: "translateY(100px)",
            animationDelay: `${index * 0.1}s`,
          }}
          className="flex items-center justify-between bg-light-secondary px-3 py-2 rounded-lg animate-fadeUp"
        >
          <span className="text-light-secondary-text font-Yekan-Medium">
            {person.name}
          </span>
          <div className="flex items-center gap-2">
            <CTAButton
              onClick={() => setTempNameToEdit(person)}
              className="!bg-transparent !w-max"
            >
              <EditIcon
                width="22"
                height="22"
                className="text-blue-500 hover:text-blue-700"
              />
            </CTAButton>
            <CTAButton
              onClick={() => removeParticipant(person.id)}
              className="!bg-transparent !w-max"
            >
              <DeleteOutlined className="!text-red-500 hover:!text-red-700 text-lg" />
            </CTAButton>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ParticipantList;
