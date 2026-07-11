import Image from "next/image";
import type { UserDto } from "@/api/models";

interface UserAvatarProps {
  userData?: UserDto;
}

const UserAvatar = ({ userData }: UserAvatarProps) => {
  return (
    <div className={"flex flex-col items-center justify-center"}>
      <Image
        src={userData?.picture ?? ""}
        alt={userData?.firstName ?? ""}
        width={38}
        height={38}
        className={"rounded-lg cursor-pointer"}
      />
      <div>{`${userData?.lastName} ${userData?.firstName}`} </div>
    </div>
  );
};

export default UserAvatar;
