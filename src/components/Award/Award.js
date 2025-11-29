import React from "react";
import Window from "../Window/Window";
import "./Award.css";

const Award = ({ onClose }) => {
  return (
    <Window
      title="https://award.matisse"
      className="award"
      type="browser"
      onClose={() => onClose && onClose("award")}
    >
      <h3>LEO BAEKELAND AWARD 2025</h3>
      <div className="award-content">
        <div className="image-container">
          <img
            src="thesis_price.jpg"
            alt="Award Ceremony"
            className="award-img"
          />
        </div>
        <div className="text-container">
          <p>
            Recipient of the <strong>Leo Baekeland Award 2025</strong> for my
            thesis on real-time adaptive feature extraction for ML-based network
            intrusion detection. This work resulted in the creation of{" "}
            <strong>RustiFlow</strong>, a high-performance network traffic
            analysis tool built with Rust and eBPF.
          </p>
          <p>
            The accompanying paper was accepted at the{" "}
            <strong>
              2025 IEEE European Symposium on Security and Privacy Workshops
            </strong>
            . Read more:{" "}
            <a
              href="https://www.computer.org/csdl/proceedings-article/euros-pw/2025/954600a203/29EHwn0Y3tK"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paper
            </a>
            {" | "}
            <a
              href="https://www.idlab.ugent.be/news/student-matisse-callewaert-won-the-leo-baekeland-award-2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              IDLab Article
            </a>
          </p>
        </div>
      </div>
    </Window>
  );
};

export default Award;
