"use client";
import React, { useState } from "react";
import LoadingScreen from "./LoadingScreen";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.6s" }}>
        {children}
      </div>
    </>
  );
};

export default ClientLayout;
