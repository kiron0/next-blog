import { connect } from '@/database/mongo.config'
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, res: NextResponse) {
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

export async function GET() {
          await connect();
          const users = await User.find({});
          try {
                    return NextResponse.json({
                              message: 'Users fetched successfully',
                              UsersLength: users.length,
                              users,
                    }, { status: 200 });
          } catch (error) {
                    return NextResponse.json(
                              { message: 'Something went wrong' },
                    );
          }
}

// export async function handler(req: NextRequest, res: NextResponse) {
//           console.log(req.method);
//           await connect();
//           if (req.method === 'GET') {
//                     const { searchParams } = new URL(req.url);
//                     const id = searchParams.get('id');
//                     console.log(id);
//                     const user = await User.findById(id);
//                     try {
//                               return NextResponse.json({
//                                         message: 'User fetched successfully',
//                                         user,
//                               }, { status: 200 });
//                     }
//                     catch (error) {
//                               return NextResponse.json(
//                                         { message: 'Something went wrong' },
//                               );
//                     }
//           }
// }