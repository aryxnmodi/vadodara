import React, { useState, useMemo } from "react";

const EMICalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);

  // Use useMemo to memoize the EMI calculation
  const emi = useMemo(() => {
    if (principal > 0 && rate > 0) {
      return (principal * rate) / 100;
    }
    return 0;
  }, [principal, rate]);

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <h2>EMI Calculator</h2>
      <label>Loan Amount (P):</label>
      <input
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(Number(e.target.value))}
      />
      <br />
      <label>Rate of Interest (%):</label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
      />
      <br />
      <h3>EMI Amount: ₹{emi.toFixed(2)}</h3>
    </div>
  );
};

export default EMICalculator;
