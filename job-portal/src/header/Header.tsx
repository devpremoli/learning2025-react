import { IconAsset, IconBell, IconSettings } from "@tabler/icons-react";
import { Avatar } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

function Header() {
  return (
    <div className="w-full bg-black px-6 text-white h-28 flex justify-between items-center">
      <div className="flex gap-3">
        <IconAsset className="h-10 w-10 items-center" stroke={1.25} />
        <div className="text-2xl font-semibold">iJobs</div>
      </div>
      <div className="flex gap-3">
        <a href="">Find Jobs</a>
        <a href="">Find Talent</a>
        <a href="">Upload Job</a>
        <a href="">About Us</a>
      </div>
      <div className="flex gap-5 items-center">
        <IconBell />
        <div className="flex items-center gap-2">
          <div>Mashal</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>
        <IconSettings />
      </div>
    </div>
  );
}

export default Header;
