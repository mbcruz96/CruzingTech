import React, { useState, useRef, useEffect } from "react";

export default function RunawayButtonSection() {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);
  const h1Ref = useRef(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  // Position the button under the h1 and centered on mount
  useEffect(() => {
    const section = sectionRef.current;
    const btn = btnRef.current;
    const h1 = h1Ref.current;
    if (!section || !btn || !h1) return;

    const sectionRect = section.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const h1Rect = h1.getBoundingClientRect();

    const left = (sectionRect.width - btnRect.width) / 2;
    const top = h1Rect.bottom - sectionRect.top + 20; // smaller gap under h1

    setPos({ top, left });
  }, []);

  const moveButton = () => {
    const section = sectionRef.current;
    const btn = btnRef.current;
    const h1 = h1Ref.current;
    if (!section || !btn || !h1) return;

    const sectionRect = section.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const h1Rect = h1.getBoundingClientRect();

    // Calculate the area below the h1 for the button to move
    const minTop = h1Rect.bottom - sectionRect.top + 4; // smaller gap
    const maxTop = sectionRect.height - btnRect.height;
    const minLeft = 0;
    const maxLeft = sectionRect.width - btnRect.width;

    const top = Math.random() * (maxTop - minTop) + minTop;
    const left = Math.random() * (maxLeft - minLeft) + minLeft;

    setPos({ top, left });
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "400px auto",
        height: "300px auto",
        // border: "2px solid #ccc",
        margin: "40px auto",
        overflow: "hidden",
        // background: "#181818",
      }}
    >
      <h1
        ref={h1Ref}
        style={{
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "0",
          color: "white",
        }}
      >
        Why you should <span className="text-xl" style={{ color: "#b97619" }}>NOT</span> hire me
      </h1>
      <button
        ref={btnRef}
        style={{
          position: "absolute",
          top: pos.top,
          left: pos.left,
          transition: "top 0.2s, left 0.2s",
          padding: "10px 24px",
          borderRadius: "20px",
          background: "#b97619",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onMouseEnter={moveButton}
        onClick={moveButton}
      >
        Reasons
      </button>
    </section>
  );
}