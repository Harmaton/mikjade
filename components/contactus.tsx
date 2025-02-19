"use client"

import type React from "react"
import { useState } from "react"
import PhoneInput from "react-phone-number-input"
import { isValidPhoneNumber } from "libphonenumber-js"
import "react-phone-number-input/style.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const services = [
  { id: "custom-furniture", label: "Custom Furniture" },
  { id: "kitchen-interiors", label: "Kitchen Interiors" },
  { id: "living-room-furniture", label: "Living Room Furniture" },
  { id: "office-setup", label: "Office Set-up" },
  { id: "office-desk-making", label: "Office Desk Making" },
  { id: "office-space-optimization", label: "Office Working Space Optimization" },
  { id: "cctv-installation", label: "CCTV Installation" },
  { id: "access-control", label: "Access Control Systems" },
  { id: "alarm-systems", label: "Alarm Systems" },
  { id: "fire-safety", label: "Fire Safety Systems" },
]

export default function ConsultationForm() {
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [requirements, setRequirements] = useState("")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phoneNumber || !date || !time || selectedServices.length === 0) {
      setError("Please fill in all required fields and select at least one service")
      return
    }
    if (!isValidPhoneNumber(phoneNumber)) {
      setError("Please enter a valid phone number")
      return
    }

    const message = `
Name: ${name}
Phone: ${phoneNumber}
Date: ${date}
Time: ${time}
Services: ${selectedServices.join(", ")}
Extra Requirements: ${requirements}
    `.trim()

    // Construct the WhatsApp URL with the specified number
    const whatsappUrl = `https://wa.me/254726629335?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  const handleServiceChange = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name or company name"
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <PhoneInput
          id="phone"
          value={phoneNumber}
          onChange={(value) => setPhoneNumber(value || "")}
          defaultCountry="KE"
          placeholder="Enter phone number"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date">Preferred Date</Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="time">Preferred Time</Label>
          <Input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <Label>Services Interested In</Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox
                id={service.id}
                checked={selectedServices.includes(service.id)}
                onCheckedChange={() => handleServiceChange(service.id)}
              />
              <label
                htmlFor={service.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {service.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Label htmlFor="requirements">Extra Requirements</Label>
        <Textarea
          id="requirements"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Any additional information or requirements for the consultation"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full bg-blue-500 hover:bg-green-500">
        Book Consultation
      </Button>
    </form>
  )
}
