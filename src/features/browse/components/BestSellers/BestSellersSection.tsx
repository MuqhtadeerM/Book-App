"use client";

import BestSellerSlider from "./BestSellersSlider";

export default function BestSellersSection() {
  return (
    <section className="pt-[72px]">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-[28px] font-semibold">Our Best Sellers</h2>

          <p className="mt-2 text-[#777]">Trending books among readers</p>
        </div>
      </div>

      <BestSellerSlider />
    </section>
  );
}
