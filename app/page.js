import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button> Button</Button>
      <UserButton />
      <h1>hi</h1>
    </div>
  );
}
