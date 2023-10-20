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
      <EditOrDelete
        className="absolute top-[185px] left-2/4 -translate-x-2/4 translate-y-2/4"
        editProfileFunction={() => console.log("clicked")}
        deleteProfileFunction={() => console.log("delete clicked")}
      />
      <WorkoutList className="absolute top-[15px] left-1/4 -translate-x-1/4 translate-y-2/4" />
    </>
  );
}
