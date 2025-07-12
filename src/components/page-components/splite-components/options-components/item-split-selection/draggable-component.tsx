import { useDraggable } from "@dnd-kit/core";

const DraggablePerson = ({ id, name }: { id: string; name: string }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        padding: "8px",
        background: "var(--secondary)",
        borderRadius: "8px",
        cursor: "grab",
        userSelect: "none",
      }}
      {...listeners}
      {...attributes}
      className="font-Yekan-Regular text-light-secondary-text"
    >
      {name}
    </div>
  );
};

export default DraggablePerson;
