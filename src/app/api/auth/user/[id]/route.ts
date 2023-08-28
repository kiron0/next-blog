import { connect } from '@/database/mongo.config'
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
          await connect();
          const params = new URL(req.url);
          const id = params.pathname.split('/').pop();
          const user = await User.findById(id);
          try {
                    return NextResponse.json({ message: 'User fetched successfully', user }, { status: 200 });
          }
          catch (error) {
                    return NextResponse.json(
                              { message: 'Something went wrong' },
                              { status: 500 }
                    );
          }
}