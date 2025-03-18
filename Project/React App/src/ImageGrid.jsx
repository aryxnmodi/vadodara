import React, { useState } from "react";

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "16px",
    padding: "16px",
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    borderRadius: "4px",
  },
};

const ImageGrid = () => {
  const [images] = useState([
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1E35If-I2-LP6J90fC8Xl4fH_I0ykNwUb4OxLrtM1-BFvzUmqySJ9GDSC4bE15TdkYI&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAKi-dLsf1jyANBV4L2cinpJfTT_PPfhlyjfk-4kt5BqDyfwg3AdZh7VWuLWsjMbMvhw&usqp=CAU",
    "https://img.freepik.com/premium-photo/adorable-calico-cat-wearing-traditional-japanese-kimono-cute-whimsical-illustration-style_543222-14292.jpg",
  ]);

  return (
    <div style={styles.grid}>
      {images.map((img, index) => (
        <div key={index} style={styles.card}>
          <img src={img} alt={`img-${index}`} style={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
