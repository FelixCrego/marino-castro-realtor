"use client";

import { useEffect, useRef, useState } from "react";

export function HomeMirrorFrame({ srcDoc }) {
  const frameRef = useRef(null);
  const [height, setHeight] = useState(5200);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const resize = () => {
      try {
        const doc = frame.contentDocument;
        if (!doc) return;
        const nextHeight = Math.max(
          doc.documentElement.scrollHeight,
          doc.body?.scrollHeight ?? 0,
          5200
        );
        setHeight(nextHeight);
      } catch {
        setHeight(5200);
      }
    };

    const onLoad = () => {
      resize();
      try {
        const doc = frame.contentDocument;
        const win = frame.contentWindow;
        if (!doc || !win) return;
        win.addEventListener("resize", resize);
        const observer = new MutationObserver(resize);
        observer.observe(doc.documentElement, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true
        });
        frame.__cleanup = () => {
          win.removeEventListener("resize", resize);
          observer.disconnect();
        };
      } catch {
        frame.__cleanup = undefined;
      }
    };

    frame.addEventListener("load", onLoad);
    return () => {
      frame.removeEventListener("load", onLoad);
      frame.__cleanup?.();
    };
  }, [srcDoc]);

  return (
    <iframe
      ref={frameRef}
      title="Mirrored homepage"
      srcDoc={srcDoc}
      style={{
        width: "100%",
        height: `${height}px`,
        border: "0",
        display: "block",
        background: "#fff"
      }}
    />
  );
}
