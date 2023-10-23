"use client";

import { useApi } from "@/context/apiContext";
import { useEffect } from "react";


export default function EditWorkout({
  params,
}: {
  params: { workoutId: number | string };
}) {
  const { protect } = useApi();

  useEffect(() => {
    protect();
  });

  return (
    <>
      <h1 className="text-heading1 text-grey-10">{params.workoutId}</h1>
    </>
  );
}
