import BookingConfirmation from "../../../../../src/components/booking/BookingConfirmation";

export const metadata = {
  title: "Reserveringsbevestiging | Blueportel",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <BookingConfirmation locale="nl" />;
}
