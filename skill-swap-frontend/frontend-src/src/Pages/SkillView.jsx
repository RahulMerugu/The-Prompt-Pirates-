// SkillViewPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const mockMembers = [
  {
    id: 1,
    name: "Alice Kumar",
    skillsOffered: "Python, Web Design",
    skillsRequired: "JavaScript",
    availability: "Weekends",
    rating: 4,
    profilePic: "https://via.placeholder.com/100",
    feedback: "Great at explaining concepts with examples!",
  },
  // Add other mock users if needed
];

export default function SkillViewPage() {
  const { id } = useParams();
  const user = mockMembers.find((member) => member.id === parseInt(id));

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 font-[Poppins]">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-[#1F2937]">{user?.name}</h2>
          <p className="text-[#6B7280]">Skills Offered: {user?.skillsOffered}</p>
          <p className="text-[#6B7280]">Skills Wanted: {user?.skillsRequired}</p>
          <p className="text-[#6B7280]">Availability: {user?.availability}</p>
          <p className="text-[#6B7280]">Rating: {user?.rating}/5</p>
          <p className="text-[#6B7280] text-sm italic">Feedback: {user?.feedback}</p>
        </div>
        <div>
          <img
            src={user?.profilePic}
            alt={user?.name}
            className="rounded-full w-24 h-24 object-cover border border-gray-300"
          />
        </div>
      </div>

      <Card className="max-w-xl mx-auto">
        <CardContent className="space-y-4 py-6">
          <div>
            <label className="block mb-1 font-medium text-[#1F2937]">Choose a Skill to Offer</label>
            <Input placeholder="E.g., Java, C++, UI/UX..." />
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#1F2937]">Choose a Skill You Want</label>
            <Input placeholder="E.g., React, Photoshop..." />
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#1F2937]">Message</label>
            <Input placeholder="Write a short message..." />
          </div>
          <Button className="bg-[#4BA3FD] hover:bg-[#3586DB] text-white w-full">
            Submit Request
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}