import { connect } from '@/database/mongo.config'
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
          const body = await request.json();
          await connect();
          await User.create(body);
          try {
                    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
          } catch (error) {
                    return NextResponse.json(
                              { message: 'Something went wrong' },
                    );
          }
}