import React from "react";

export const PolicySection: React.FC = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('/lovable-uploads/d588347f-80d0-40be-af92-b56d763ec32d.png')`, // put your real image path here
      }}
    >
      {/* Pink gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/50 via-pink-300/30 to-pink-200/20 z-0" />

      <div className="container mx-auto px-4 flex justify-center">
        {/* Glass card */}
        <div className="relative bg-pink-400/40 backdrop-blur-md rounded-3xl border border-white/40 p-10 w-full max-w-3xl shadow-2xl">
          {/* Outer white glow effect */}
          <div className="absolute inset-0 rounded-3xl border border-white/30 pointer-events-none" />

          <div className="relative z-10 text-white text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-10">Salon Policies</h2>

            <div className="text-center space-y-8 text-lg">
              <div>
                <h3 className="font-bold">1. Booking Terms</h3>
                <p>50% deposit required to secure a booking. Balance due on booking date.</p>
              </div>
              <div>
                <h3 className="font-bold">2. Cancellation Policy</h3>
                <p>
                  Cancel at least 3 days before for a full refund.<br/>
                  Cancellations within 3 days forfeit deposit.
                </p>
              </div>
              <div>
                <h3 className="font-bold">3. Rescheduling</h3>
                <p>Reschedule 3 days before appointment. Fees may apply.</p>
              </div>
              <div>
                <h3 className="font-bold">4. Late Arrival</h3>
                <p>15-minute grace period. Late fee of R50 per 15 minutes applies.</p>
              </div>
              <div>
                <h3 className="font-bold">5. Payment Methods</h3>
                <p>We accept bank transfers and credit/debit cards.</p>
              </div>
              <div>
                <h3 className="font-bold">6. Booking Confirmation</h3>
                <p>Confirmed after sending deposit to ‪+27 76 482 5036‬.</p>
              </div>
              <div>
                <h3 className="font-bold">7. Amendments</h3>
                <p>Policy changes will be communicated in writing.</p>
              </div>
              <div>
                <h3 className="font-bold">Note</h3>
                <p>Please mention if you have natural dreadlocks or short hair.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
