import React from 'react'
import { SheetContent, SheetHeader, SheetTitle } from './ui/sheet'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import CartItem from './Cart-item'

const Cartwrapp = ({ cartItems, setOpenCartSheet }) => {
  const navigate = useNavigate()

  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0

  return (
    <SheetContent className="sm:max-w-md p-6">
      <SheetHeader>
        <SheetTitle className="text-2xl font-bold text-primary tracking-tight">
          Your Cart 
        </SheetTitle>
      </SheetHeader>

      <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))
        ) : (
          <p className="text-center text-muted-foreground text-sm mt-8">
            Your cart is empty 😢
          </p>
        )}
      </div>

      <div className="mt-6 border-t pt-4 space-y-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span className="text-green-600 font-bold tracking-wide">
            ₹{totalCartAmount}
          </span>
        </div>
      </div>

      <Button
        onClick={() => {
          navigate('/shop/checkout')
          setOpenCartSheet(false)
        }}
        className="w-full mt-6 text-base font-medium tracking-wide py-6 rounded-xl hover:scale-[1.02] transition-transform"
      >
        Proceed to Checkout
      </Button>
    </SheetContent>
  )
}

export default Cartwrapp
