"use server"

import prisma from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export async function getFormStats() {
    const user = await currentUser()
    if(!user){
      throw new Error("Please login")
    }

    const stats = await prisma.form.aggregate({
        where: {
            userId: user.id
        },
        _sum:{
            visits: true,
            submission: true
        }
    })

    const visits = stats._sum.visits ?? 0;
    const submission = stats._sum.submission ?? 0;

    let submissionRate = 0;

    if(visits > 0){
        submissionRate = ((submission/visits) * 100)
    }
    const bounceRate = 100 - submissionRate;

    return {
        visits, submission, submissionRate, bounceRate
    }
}