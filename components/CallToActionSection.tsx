import React from "react";

const CallToActionSection = () => {
  return (
    <section
      className="py-20 px-6 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/image/bay-bg-yellow.png)" }}
    >
      <div className="absolute inset-0 "></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="mb-6" style={{ fontSize: '42px', fontWeight: '400' }}>
          All we need is your idea
        </h2>
        <p className="text-lg leading-relaxed text-gray-800">
          If you have a message and want the good people of Hawkes Bay to know
          about it, go no further. From design to printing and installation, Bay
          Billboards can manage it all for you. If you don't like the sound of
          that and already have artwork or even banners printed, call us today
          for available locations to show them off. Whatever stage you're at on
          the road to becoming famous in the bay, let us help you from here.
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;
