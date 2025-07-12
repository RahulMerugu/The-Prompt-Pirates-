// SwapRequestsPage.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const mockRequests = [
  {
    id: 1,
    name: "Alice Kumar",
    skillsOffered: "Python",
    skillsWanted: "Java",
    status: "pending",
    profilePic: "https://via.placeholder.com/60",
  },
  {
    id: 2,
    name: "John Singh",
    skillsOffered: "UI/UX",
    skillsWanted: "C++",
    status: "accepted",
    profilePic: "https://via.placeholder.com/60",
  },
  {
    id: 3,
    name: "Sara Patel",
    skillsOffered: "React",
    skillsWanted: "Photoshop",
    status: "rejected",
    profilePic: "https://via.placeholder.com/60",
  },
];

export default function SwapRequestsPage() {
  const [requests, setRequests] = useState(mockRequests);

  const handleStatusChange = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 font-[Poppins]">
      <h1 className="text-2xl font-bold text-[#1F2937] mb-6">Skill Swap Requests</h1>

      <div className="space-y-4">
        {requests.map((req) => (
          <Card key={req.id} className="flex justify-between items-center p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <img src={req.profilePic} alt={req.name} />
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold text-[#1F2937]">{req.name}</h3>
                <p className="text-[#6B7280] text-sm">
                  Offers: {req.skillsOffered} &nbsp; | &nbsp; Wants: {req.skillsWanted}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-[#1F2937] mb-2">
                Status: <span className={`capitalize ${
                  req.status === "pending"
                    ? "text-yellow-500"
                    : req.status === "accepted"
                    ? "text-green-600"
                    : "text-red-500"
                }`}>{req.status}</span>
              </p>
              {req.status === "pending" && (
                <div className="flex gap-2">
                  <Button
                    className="bg-[#7ED957] text-white hover:opacity-90"
                    onClick={() => handleStatusChange(req.id, "accepted")}
                  >
                    Accept
                  </Button>
                  <Button
                    className="bg-red-500 text-white hover:opacity-90"
                    onClick={() => handleStatusChange(req.id, "rejected")}
                  >
                    Reject
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}