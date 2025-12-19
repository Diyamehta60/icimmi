import React from "react";

const Marquee = () => {
  const handleDownload = () => {
    if (typeof window === "undefined") return;

    const link = document.createElement("a");
    link.href = "/schedule.pdf";
    link.download = "ICIMMI_Schedule.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      onClick={handleDownload}
      className="relative cursor-pointer overflow-hidden whitespace-nowrap border border-red-500 bg-red-100 py-2"
    >
      <div className="inline-block animate-marquee px-4 text-xl text-black">
        Authors are informed that Paper withdrawal date is 10th December, 2025 |
        Schedule can be downloaded by clicking on this. | ACM does not control which papers will be indexed by which indexing service. Nor does ACM know if the indexing service does decide to index the conference papers published by ACM, when they will index them.
      </div>
    </div>
  );
};

export default Marquee;
