"use client";

import { useState } from "react";
import { useParticipants } from "./useParticipants";
import { Input } from "antd";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { DeleteOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react/dist/iconify.js";

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
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="نام را وارد کنید..."
              value={tempNameToEdit ? tempNameToEdit.name : name}
              style={{
                boxShadow: "inset 0 2px 5px rgba(255,255,255,.3)",
              }}
              className=" rounded-[10px] p-3 w-full backdrop-blur-md flex items-center gap-2"
              classNames={{
                input:
                  "!bg-[rgba(0,0,0,0.15)]  !text-light-secondary-text placeholder:!text-light-gray !border-none font-Yekan-Regular",
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

          {participants.length > 0 ? (
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
                      <Icon
                        icon="mage:edit"
                        width="22"
                        height="22"
                        className="text-blue-500 hover:text-blue-700"
                      />
                    </CTAButton>
                    <CTAButton
                      onClick={() => removeParticipant(person.id)}
                      className="!bg-transparent !w-max"
                    >
                      <DeleteOutlined className="text-red-500 hover:text-red-700 text-lg" />
                    </CTAButton>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">فعلا کسی اضافه نشده 🤷‍♂️</p>
          )}
        </div>
      </div>

      <div className="w-full flex items-center justify-between fixed bottom-4 right-0 px-4 gap-2">
        {participants.length > 0 && (
          <div className=" flex items-center justify-center w-full">
            <button
              onClick={resetParticipants}
              className="w-full mx-auto bg-light-background font-Yekan-Regular text-sm text-red-500 border border-red-300 rounded-lg py-2 hover:bg-red-100 transition self-end"
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
    </div>
  );
};

export default ParticipantsComponent;
