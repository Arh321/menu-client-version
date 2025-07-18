import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { Input } from "antd";

interface ParticipantSubmitInputProps {
  tempNameToEdit?: {
    id: string;
    name: string;
  };
  name: string;
  setTempNameToEdit: (value: { id: string; name: string } | undefined) => void;
  setName: (value: string) => void;
  handleEdit: () => void;
  handleAdd: () => void;
}

const ParticipantSubmitInput: React.FC<ParticipantSubmitInputProps> = ({
  tempNameToEdit,
  name,
  setTempNameToEdit,
  setName,
  handleEdit,
  handleAdd,
}) => {
  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="نام را وارد کنید..."
        value={tempNameToEdit ? tempNameToEdit.name : name}
        style={{
          boxShadow: "inset 0 2px 5px rgba(255,255,255,.3)",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (tempNameToEdit) {
              handleEdit();
              return;
            }
            handleAdd();
          }
        }}
        className=" rounded-[10px] p-3 w-full backdrop-blur-md flex items-center gap-2"
        classNames={{
          input:
            "!bg-[rgba(0,0,0,0.15)]  !text-light-secondary-text placeholder:!text-light-gray !border-none !font-Yekan-Regular",
        }}
        onChange={(e) =>
          tempNameToEdit
            ? setTempNameToEdit({
                id: tempNameToEdit.id,
                name: e.target.value,
              })
            : setName(e.target.value)
        }
      />
      <CTAButton
        onClick={() => (tempNameToEdit ? handleEdit() : handleAdd())}
        className="bg-light-primary text-light-secondary-text px-4 py-3 !w-max h-full transition"
      >
        {tempNameToEdit ? "ویرایش" : "افزودن"}
      </CTAButton>
    </div>
  );
};

export default ParticipantSubmitInput;
