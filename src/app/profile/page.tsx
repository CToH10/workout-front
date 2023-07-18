import { EditOrDelete } from "@/components/EditOrDelete";
import { UserCard } from "@/components/UserInfo";

export default function Profile() {
  return (
    <>
      <UserCard className="absolute top-[134px] -translate-x-2/4 -translate-y-2/4 left-2/4" />
      <EditOrDelete className="absolute top-[185px] left-2/4 -translate-x-2/4 translate-y-2/4"/>
    </>
  );
}
