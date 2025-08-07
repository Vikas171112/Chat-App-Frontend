import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function UserCard({ name, image }) {
  return (
    <Card className="shadow-sm hover:bg-gray-100 cursor-pointer transition rounded-xl">
      <CardContent className="flex items-center gap-4 p-4">
        <Avatar className="w-12 h-12 rounded-full overflow-hidden">
          <AvatarImage className="w-full h-full object-cover" src={image} />
          <AvatarFallback>{name?.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-sm font-medium">{name}</h4>
        </div>
      </CardContent>
    </Card>
  );
}

export default UserCard;
