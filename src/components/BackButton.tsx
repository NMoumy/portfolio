"use client";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/#projects")}
      className="flex items-center gap-2 bg-transparent p-0 hover:text-tertiary"
    >
      <IoArrowBack size={24} />
      <p>Retour</p>
    </button>
  );
};

export default BackButton;
