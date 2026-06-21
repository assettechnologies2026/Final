"use client";

export default function GoogleReviews() {
  return (
    <section
      id="reviews"
      className="bg-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
      

        <div className="w-full overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://cdn.trustindex.io/amp-widget.html#9fc3356747fa769127267bd9d9c"
            title="Google Reviews"
            className="w-full h-[380px]"
            style={{ border: "none" }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}