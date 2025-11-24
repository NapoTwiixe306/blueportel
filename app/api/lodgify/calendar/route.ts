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
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "fr-FR,fr;q=0.9,en;q=0.8",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        Referer: "https://checkout.lodgify.com/",
        Origin: "https://checkout.lodgify.com",
        "X-Requested-With": "XMLHttpRequest",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        {
          error: "Calendrier indisponible",
          status: response.status,
          details: text,
        },
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


