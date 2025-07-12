import { IMenu } from "@/types/menu/menu-types";
import { motion, AnimatePresence } from "framer-motion";
import MemoizedMenuListItemComponent from "./menu-list-item";
import clsx from "clsx";
import { memo } from "react";
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1, // فاصله ۱۰۰ میلی‌ثانیه بین هر باکس
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

interface MenuListMapItemsProps {
  menus: IMenu[] | undefined;
  isGrid: boolean;
  depId: string | string[] | undefined;
}

const MenuListMapItems: React.FC<MenuListMapItemsProps> = ({
  isGrid,
  menus,
  depId,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={clsx(
          "grid grid-cols-1 gap-4 h-max transition-all",
          isGrid ? "grid-cols-2" : "grid-cols-1"
        )}
      >
        {menus?.map((menu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{
              ease: "easeInOut",
            }}
            layout // فقط همین، خودش FLIP می‌کنه!
            className={clsx(
              "w-full aspect-[16/7] xs:aspect-[16/5] bg-gray-100 rounded-lg overflow-hidden",
              isGrid && "!aspect-[4/3]"
            )}
          >
            <MemoizedMenuListItemComponent
              depId={depId as string}
              menu={menu}
              isGrid={isGrid}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const MemoizedMenuListMapItems = memo(MenuListMapItems);

export default MemoizedMenuListMapItems;
