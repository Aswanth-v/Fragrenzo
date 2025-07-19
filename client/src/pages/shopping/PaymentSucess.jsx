import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 px-4">
      <Card className="w-full max-w-md shadow-xl border-0 rounded-2xl p-8 text-center bg-white">
        <CardHeader className="p-0 mb-4">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="text-green-600 w-16 h-16" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Payment Successful!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-600">
            Thank you for your purchase. Your payment has been processed
            successfully.
          </p>
          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            onClick={() => navigate("/shop/account")}
          >
            View Your Orders
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default PaymentSuccessPage;
