// HomePage.jsx - Full Functionality with Search, Availability Filter, Pagination
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const allMembers = [
  {
    id: 1,
    name: "Alice Kumar",
    skillsOffered: "Python, Web Design",
    availability: "Weekends",
    rating: 4,
    linkedin: "https://linkedin.com/in/alicekumar",
    profilePic: "https://via.placeholder.com/60",
  },
  {
    id: 2,
    name: "John Singh",
    skillsOffered: "Java, Graphic Design",
    availability: "Weekdays",
    rating: 5,
    linkedin: "https://linkedin.com/in/johnsingh",
    profilePic: "https://via.placeholder.com/60",
  },
  {
    id: 3,
    name: "Sara Patel",
    skillsOffered: "C++, UI/UX",
    availability: "Weekends",
    rating: 3,
    linkedin: "https://linkedin.com/in/sarapatel",
    profilePic: "https://via.placeholder.com/60",
  },
  {
    id: 4,
    name: "Ravi Reddy",
    skillsOffered: "React, Firebase",
    availability: "Weekdays",
    rating: 4,
    linkedin: "https://linkedin.com/in/ravireddy",
    profilePic: "https://via.placeholder.com/60",
  },
  {
    id: 5,
    name: "Meera Sharma",
    skillsOffered: "Photoshop, Illustrator",
    availability: "Weekends",
    rating: 5,
    linkedin: "https://linkedin.com/in/meerasharma",
    profilePic: "https://via.placeholder.com/60",
  },
  {
    id: 6,
    name: "Akash Rao",
    skillsOffered: "Node.js, MongoDB",
    availability: "Weekdays",
    rating: 4,
    linkedin: "https://linkedin.com/in/akashrao",
    profilePic: "https://via.placeholder.com/60",
  },
];

const PAGE_SIZE = 3;

export default function HomePage() {
  const [skillQuery, setSkillQuery] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const filtered = allMembers.filter(
    (member) =>
      member.skillsOffered.toLowerCase().includes(skillQuery.toLowerCase()) &&
      member.availability.toLowerCase().includes(availabilityFilter.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginatedMembers = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 font-[Poppins]">
      <header className="flex justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-[#1F2937]">XChango</h1>
        <Input
          placeholder="Search Skills..."
          value={skillQuery}
          onChange={(e) => setSkillQuery(e.target.value)}
          className="w-1/4"
        />
        <Input
          placeholder="Filter by Availability (e.g., Weekends)"
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
          className="w-1/4"
        />
      </header>

      <h2 className="text-xl font-semibold text-[#1F2937] mb-4">Available Members</h2>

      <div className="space-y-4">
        {paginatedMembers.map((member) => (
          <Card
            key={member.id}
            className="flex justify-between items-center p-4 bg-white shadow-sm"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#1F2937]">{member.name}</h3>
              <p className="text-[#6B7280]">Skills Offered: {member.skillsOffered}</p>
              <p className="text-[#6B7280]">Availability: {member.availability}</p>
              <p className="text-[#6B7280] text-sm">Rating: {member.rating}/5</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4BA3FD] underline text-sm"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar>
                <img src={member.profilePic} alt={member.name} />
              </Avatar>
              <Button
                className="bg-[#4BA3FD] hover:bg-[#3586DB] text-white"
                onClick={() => navigate(/skill/${member.id})}
              >
                Request
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-2">
        <Button
          className="bg-[#4BA3FD] hover:bg-[#3586DB] text-white"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>
        <span className="text-[#1F2937] font-medium self-center">Page {page} of {totalPages}</span>
        <Button
          className="bg-[#4BA3FD] hover:bg-[#3586DB] text-white"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}