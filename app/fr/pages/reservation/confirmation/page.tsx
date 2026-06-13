import BookingConfirmation from "../../../../../src/components/booking/BookingConfirmation";

export const metadata = {
  title: "Confirmation de réservation | Blueportel",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <BookingConfirmation locale="fr" />;
}
