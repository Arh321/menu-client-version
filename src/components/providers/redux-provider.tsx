"use client"; // فقط این کامپوننت باید در سمت کلاینت اجرا بشه

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { QueryProvider } from "@/components/providers/query-provider";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <Provider store={store}>{children}</Provider>
    </QueryProvider>
  );
}
