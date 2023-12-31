"use client";

import { EditOrDelete } from "@/components/EditOrDelete";
import { UserCard } from "@/components/UserInfo";
import { WorkoutList } from "@/components/UserInfo/WorkoutList";
import { useApi } from "@/context/apiContext";
import { useEffect } from "react";

export default function Profile() {
  const { protect } = useApi();

  useEffect(() => {
    protect();
  });

  return (
    <>
      <UserCard className="absolute top-[134px] -translate-x-2/4 -translate-y-2/4 left-2/4" />
      <EditOrDelete className="absolute top-[185px] left-2/4 -translate-x-2/4 translate-y-2/4" />
      <WorkoutList className="absolute top-[15px] left-[10%] translate-x-[0] translate-y-[80%] lg:left-[10%] lg:translate-y-[55%] min-h-[320px] max-h-[320px] lg:min-h-[450px] lg:max-h-[450px] overflow-auto scrollbar w-4/5 lg:w-[80%]" />
    </>
  );
}
