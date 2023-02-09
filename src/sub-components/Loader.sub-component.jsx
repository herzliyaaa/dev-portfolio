import React, { useState, useEffect } from "react";

export default function Loader(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
}
