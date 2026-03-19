import { useState } from "react";
import TestPage from "./TestPage";
import PageLayout from "./layouts/PageLayout";

const products = [
  {
    title: "商品名称 A",
    desc: "这是商品的简要描述",
    price: "¥99.00",
  },
  {
    title: "商品名称 B",
    desc: "这是商品的简要描述",
    price: "¥199.00",
  },
  {
    title: "商品名称 C",
    desc: "这是商品的简要描述",
    price: "¥299.00",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [currentPage, setCurrentPage] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyClick = (e, product) => {
    e.stopPropagation();
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  if (currentPage === "test") {
    return <TestPage />;
  }

  return (
    <PageLayout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      showModal={showModal}
      selectedProduct={selectedProduct}
      onBuyClick={handleBuyClick}
      onCloseModal={handleCloseModal}
      onTestPageClick={() => setCurrentPage("test")}
      products={products}
    />
  );
}

export default App;
