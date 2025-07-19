import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { capturePayment } from "../../redux/Shop/order-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";

function PaypalReturnPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paymentId = params.get("paymentId");
  const payerId = params.get("PayerID");

  useEffect(() => {
    if (paymentId && payerId) {
      const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));

      dispatch(capturePayment({ paymentId, payerId, orderId })).then((data) => {
        if (data?.payload?.success) {
          sessionStorage.removeItem("currentOrderId");
          window.location.href = "/shop/payment-success";
        }
      });
    }
  }, [paymentId, payerId, dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      <Card className="w-full max-w-md p-8 shadow-xl border-0 rounded-2xl text-center bg-white">
        <CardHeader className="p-0 mb-4">
          <div className="flex justify-center mb-4">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-800">
            Processing Payment...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Please wait while we confirm your payment with PayPal.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default PaypalReturnPage;
