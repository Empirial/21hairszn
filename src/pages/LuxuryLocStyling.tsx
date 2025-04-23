
import React from "react";

const styles = {
  card: "bg-white rounded-[26px] p-4 drop-shadow-md flex flex-col items-center mx-auto mb-8 w-full max-w-[337px] border-0 shadow-none",
  img: "rounded-[26px] w-full object-cover h-[312px] border-[6px] border-[#fff] shadow-lg mb-2",
  thumbList: "flex gap-2 mt-2 mb-4 w-full justify-center",
  thumb: "w-[53px] h-[53px] object-cover rounded-2xl border-2 border-[#fff] shadow",
  sizeRow: "flex items-center w-full gap-4 mb-2",
  sizeBar: "w-[100px] h-4 rounded-xl bg-[#DEDEDE]",
  sizeText: "ml-auto text-lg font-medium text-black",
  colorLabel: "font-semibold mt-3 text-[17px] text-black text-left w-full",
  colorDot: "w-8 h-8 rounded-full border-2 border-white shadow mr-2",
  priceDisclaimer: "block text-sm font-medium text-[#222] mt-3 mb-2",
  fibrePriceRow: "flex items-center gap-3 mt-1 mb-4",
  fibrePrice: "bg-[#dedede] px-4 py-1 rounded-full font-bold text-lg text-[#444] tracking-wide",
  fibreBtn: "bg-[#EA6683] px-4 py-1 rounded-full text-sm font-semibold text-white ml-2",
  addToCartBtn: "bg-[#EA6683] text-white font-bold rounded-md mt-6 w-full py-2 text-base transition hover:opacity-90",
};

const cardData = [
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "",
    jungleLocs: false,
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "",
    jungleLocs: false,
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "",
    jungleLocs: false,
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "",
    jungleLocs: false,
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "Jungle Locs",
    jungleLocs: true,
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "",
    jungleLocs: false,
  },
  {
    img: "/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png",
    title: "",
    jungleLocs: false,
  },
];

const availableColors = [
  "#FFE600", // Yellow
  "#0006FF", // Blue
  "#44170B", // Brown
  "#00F5E1", // Aqua
  "#64F2FF", // Light blue
];

function LocProductCard({ img, title, jungleLocs }: { img: string; title: string; jungleLocs?: boolean }) {
  return (
    <div className={styles.card}>
      <div className="relative w-full">
        <img src={img} alt="" className={styles.img} />
        {jungleLocs && (
          <span className="absolute left-6 bottom-8 text-3xl font-bold text-[#8C0E53] drop-shadow-xl jungle-title">
            Jungle Locs
          </span>
        )}
      </div>
      <div className={styles.thumbList}>
        {[...Array(3)].map((_, i) => (
          <img src={img} className={styles.thumb} key={i} alt="" />
        ))}
      </div>
      <div className={styles.sizeRow}>
        <div className={styles.sizeBar}></div>
        <span className={styles.sizeText}>3 inch</span>
      </div>
      <div className={styles.sizeRow}>
        <div className={styles.sizeBar}></div>
        <span className={styles.sizeText}>3 inch</span>
      </div>
      <div className="w-full">
        <div className={styles.colorLabel}>Available Colours</div>
        <div className="flex gap-2 mt-2 mb-3">
          {availableColors.map((color, idx) => (
            <span
              key={color + idx}
              className={styles.colorDot}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <span className={styles.priceDisclaimer}>
        Price doesn't include Fibre
      </span>
      <div className={styles.fibrePriceRow}>
        <span className={styles.fibrePrice}>R400</span>
        <span className={styles.fibreBtn}>For Fibre</span>
      </div>
      <button className={styles.addToCartBtn}>Add To Cart Doll</button>
    </div>
  );
}

export default function LuxuryLocStylingPage() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col pb-2 pt-3">
      <header className="w-full bg-white py-3 px-3 mb-6">
        <nav className="flex justify-center items-center gap-6 max-w-[850px] mx-auto rounded-full bg-gradient-to-r from-[#EB5EB7] to-[#EA6683] h-16 shadow-md relative">
          <img
            src="/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full"
            alt="logo"
          />
          <a href="/luxury-loc-styling" className="text-white text-base font-bold">Loc Styling</a>
          <a href="#" className="text-white text-base font-bold">Loc Extensions</a>
          <a href="#" className="text-white text-base font-bold">Loc Wigs</a>
          <a href="/contact" className="text-white text-base font-bold">Contact Us</a>
          <a
            href="/booking"
            className="ml-auto bg-white text-[#EA6683] font-bold rounded-full px-7 py-2 text-base shadow transition hover:bg-[#ea668380]/90"
            style={{
              boxShadow: "3px 3px 10px 0px #ea668344",
            }}
          >
            BOOK NOW!
          </a>
        </nav>
        <div className="mt-2 w-full max-w-[900px] mx-auto h-2 bg-gradient-to-r from-[#EB5EB7] to-[#EA6683] rounded-full shadow-md" />
      </header>

      <main className="flex-1">
        {/* Responsive 3 columns grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 px-3">
          {cardData.map((card, idx) => (
            <LocProductCard {...card} key={idx} />
          ))}
        </div>
      </main>

      <footer className="bg-white mt-10 pt-6 pb-2 border-t z-10">
        <div className="flex justify-between items-center w-full max-w-5xl mx-auto px-4 flex-wrap">
          <img
            src="/lovable-uploads/6f0453d1-d48e-4639-a35b-92bee07ec251.png"
            alt="logo"
            className="h-16 mb-5"
          />
          <nav className="flex flex-row gap-8 mb-5">
            <a href="/" className="text-black text-base font-semibold">Home Page</a>
            <a href="/#services" className="text-black text-base font-semibold">Our Services</a>
            <a href="/booking" className="text-black text-base font-semibold">Book Now</a>
            <a href="/contact" className="text-black text-base font-semibold">Contact Us</a>
          </nav>
          <div className="flex gap-3 mb-5">
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#181818" d="M13.5 9.5V8c0-.679.243-1 1-1h1V4h-2.5C10.015 4 9 6.371 9 8.214V9.5H7V13h2v7h4v-7h2.386l.114-3.5H13.5Z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" stroke="#181818" strokeWidth="2" rx="6"/><circle cx="12" cy="12" r="5" stroke="#181818" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="#181818"/></svg>
            </a>
            <a href="#" aria-label="X (Twitter)">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#181818" d="m19.308 5.557-6.351 6.9-5.465-6.9H4l7.608 9.567-7.11 7.668h3.492l6.009-6.47 5.127 6.47h3.12l-7.45-9.393 6.53-7.843h-2.898Z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" stroke="#181818" strokeWidth="2" rx="6"/><path fill="#181818" d="M7.473 17V9.848h2.09V17h-2.09ZM8.518 8.912c-.67 0-1.213-.547-1.213-1.213 0-.665.542-1.213 1.213-1.213.67 0 1.212.548 1.212 1.213 0 .666-.542 1.213-1.213 1.213Zm3.282 8.088V13c0-.239.02-.476.093-.652.203-.489.667-.995 1.444-.995 1.02 0 1.429.754 1.429 1.861V17h2.09v-4.33c0-2.068-1.104-3.035-2.581-3.035-1.195 0-1.673.658-1.962 1.121V9.848h-2.09c.028.74 0 7.152 0 7.152h2.09Z"/></svg>
            </a>
          </div>
        </div>
        <div className="text-center text-xs mt-4 mb-2 text-[#666]">
          © 2025 21HairSZN. All rights reserved.&nbsp;
          <a href="/privacy" className="ml-2 underline">Privacy Policy</a>
          <a href="/terms" className="ml-2 underline">Terms of Use</a>
          <a href="#cookies" className="ml-2 underline">Cookie Settings</a>
        </div>
      </footer>
    </div>
  );
}
