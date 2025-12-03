import { NextRequest, NextResponse } from 'next/server'

export async function POST(_req: NextRequest) {
  // Simple placeholder for logout
  return NextResponse.json({ success: true, message: 'Mock logout' })
}
