"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const UserInfo = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Details of your Profile</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" disabled />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" disabled/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex">
        <Button variant="outline">Log out</Button>
      </CardFooter>
    </Card>
  )
}

export default UserInfo;