import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body || {}
    return NextResponse.json({ success: true, message: 'Mock login accepted', email })
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 })
  }
}
