import { NextRequest, NextResponse } from 'next/server'

export async function GET(_req: NextRequest) {
  // Placeholder: no auth integration here — return unauthorized
  return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
}
