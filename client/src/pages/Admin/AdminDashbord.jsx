import React, { useEffect, useState } from "react";
import {
  ShoppingCart,
  PackageCheck,
  Users,
  BarChart2,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllFilteredProducts } from "../../redux/Shop/product-slice";
import { getAllOrdersForAdmin } from "../../redux/Admin/Order-slice";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
  Confirmed: "bg-green-100 text-green-800 border-green-300",
  InProcess: "bg-blue-100 text-blue-800 border-blue-300",
  InShipping: "bg-indigo-100 text-indigo-800 border-indigo-300",
  Rejected: "bg-red-100 text-red-800 border-red-300",
  Unknown: "bg-gray-100 text-gray-800 border-gray-300",
};

const statusEmoji = {
  Pending: "🕐",
  Confirmed: "✅",
  InProcess: "⚙️",
  InShipping: "🚚",
  Rejected: "❌",
  Unknown: "❓",
};

const AnimatedCount = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(value / 20);
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [value]);

  return <h2 className="text-3xl font-bold text-gray-900">{count}</h2>;
};

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.shopProducts);
  const { orderList } = useSelector((state) => state.adminOrder);

  useEffect(() => {
    dispatch(fetchAllFilteredProducts({ filterParams: {}, sortParams: "" }));
    dispatch(getAllOrdersForAdmin());
  }, [dispatch]);

  const orderStatusCount = orderList.reduce((acc, order) => {
    const status = order.orderStatus || "Unknown";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="p-6 bg-[#F5F7FF] min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">📊 Admin Dashboard</h1>

      {/* Top stats section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {/* Products */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-4">
          <div className="bg-green-500 text-white p-4 rounded-full shadow-lg">
            <PackageCheck size={28} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Products</p>
            <AnimatedCount value={productList?.length || 0} />
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-4">
          <div className="bg-blue-500 text-white p-4 rounded-full shadow-lg">
            <ShoppingCart size={28} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Orders</p>
            <AnimatedCount value={orderList?.length || 0} />
          </div>
        </div>
      </div>

      {/* Orders by Status */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📋 Orders by Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(orderStatusCount).map(([status, count]) => (
            <div
              key={status}
              className={`border rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex justify-between items-center ${statusColors[status] || statusColors.Unknown}`}
            >
              <span className="font-semibold flex items-center gap-2">
                {statusEmoji[status] || "📦"} <span className="capitalize">{status}</span>
              </span>
              <span className="text-xl font-bold">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
