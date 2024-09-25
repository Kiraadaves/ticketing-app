import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export const GET = async ({ params }) => {
  try {
    const { id } = params;
    const tickets = await Ticket.findById(id);
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
