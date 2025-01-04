"use server"

import { currentUser } from "@clerk/nextjs/server"

export async function getFormStats() {
    const user = await currentUser()
    if(!user){
      throw new Error("Please login")
    }
    
}