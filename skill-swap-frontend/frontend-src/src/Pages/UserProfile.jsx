// UserProfile.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function UserProfile() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    skillsOffered: "",
    skillsRequired: "",
    availability: "",
    linkedin: "",
    visibility: "public",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Saved:", form);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 font-[Poppins]">
      <h1 className="text-2xl font-bold text-[#1F2937] mb-6">Edit Profile</h1>
      <Card className="max-w-2xl mx-auto">
        <CardContent className="space-y-4 py-6">
          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
          />
          <Textarea
            name="skillsOffered"
            placeholder="Skills You Can Offer (e.g., Python, Java)"
            value={form.skillsOffered}
            onChange={handleChange}
          />
          <Textarea
            name="skillsRequired"
            placeholder="Skills You Want to Learn (e.g., Design, C++)"
            value={form.skillsRequired}
            onChange={handleChange}
          />
          <Input
            name="availability"
            placeholder="Availability (e.g., Weekends, Weekdays)"
            value={form.availability}
            onChange={handleChange}
          />
          <Input
            name="linkedin"
            placeholder="LinkedIn URL"
            value={form.linkedin}
            onChange={handleChange}
          />
          <div className="flex items-center gap-4">
            <label className="text-[#1F2937] font-medium">Profile Visibility:</label>
            <select
              name="visibility"
              value={form.visibility}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          <Button
            className="w-full bg-[#4BA3FD] hover:bg-[#3586DB] text-white"
            onClick={handleSubmit}
          >
            Save Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}