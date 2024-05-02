import Image from "next/image";
import Form from "./pages/main/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form />
    </main>
  );
}
