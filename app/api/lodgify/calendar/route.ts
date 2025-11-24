import { NextResponse } from "next/server";

const defaultPropertyId = process.env.LODGIFY_PROPERTY_ID || "654566";
const defaultRoomId = process.env.LODGIFY_ROOM_ID || "721555";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const propertyId = searchParams.get("propertyId") || defaultPropertyId;
  const roomId = searchParams.get("roomId") || defaultRoomId;
  const startDate =
    searchParams.get("startDate") || new Date().toISOString().slice(0, 10);

  const remoteUrl = `https://checkout.lodgify.com/api/v1/checkout/calendar?propertyId=${propertyId}&startDate=${startDate}&roomId=${roomId}`;

  try {
    const response = await fetch(remoteUrl, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: "Calendrier indisponible", details: text },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur de récupération du calendrier" },
      { status: 500 }
    );
  }
}


