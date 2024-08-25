/
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { JSX, SVGProps } from "react"

export function donationpage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-[#f0f8ff] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShla20LZhaRhUVHmMwWuTwD7_VSF_n5COQtg&s"
              alt="Heartfulness Logo cartoon"
              width={48}
              height={48}
              className="mr-2"
              style={{ aspectRatio: "48/48", objectFit: "cover" }}
            />
            <h1 className="text-3xl font-bold text-[#4CAF50]"><><h1>Heartfulness</h1>
          </div>
          <p className="text-muted-foreground md:text-xl">
            Your donation will make a real difference in the lives of those we serve.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            <TwitterIcon className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            <LinkedinIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Donation Form</CardTitle>
            <CardDescription className="text-center">Select an amount or enter a custom donation.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <Button className="col-span-1 h-12 rounded-md bg-[#4CAF50] hover:bg-[#43a047] text-white hover:text-white">
                  ₹1,000
                </Button>
                <Button className="col-span-1 h-12 rounded-md bg-[#4CAF50] hover:bg-[#43a047] text-white hover:text-white">
                  ₹2,500
                </Button>
                <Button className="col-span-1 h-12 rounded-md bg-[#4CAF50] hover:bg-[#43a047] text-white hover:text-white">
                  ₹5,000
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Input id="email" type="email" placeholder="Enter your email" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <MailIcon className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Custom Amount</Label>
                <div className="relative">
                  <Input id="amount" type="number" placeholder="Enter custom amount" className="pr-24" min="1" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1">
                        INR
                        <ChevronDownIcon className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>INR</DropdownMenuItem>
                        <DropdownMenuItem>USD</DropdownMenuItem>
                        <DropdownMenuItem>EUR</DropdownMenuItem>
                        <DropdownMenuItem>GBP</DropdownMenuItem>
                        <DropdownMenuItem>JPY</DropdownMenuItem>
                        <DropdownMenuItem>AUD</DropdownMenuItem>
                        <DropdownMenuItem>CAD</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <div className="relative">
                  <Input id="card-number" type="text" placeholder="Enter card number" className="pr-12" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <CreditCardIcon className="h-5 w-5" />
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input id="expiry" type="text" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" type="text" placeholder="CVC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip</Label>
                  <Input id="zip" type="text" placeholder="Zip" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src="/placeholder.svg"
                    alt="QR Code"
                    width={150}
                    height={150}
                    style={{ aspectRatio: "150/150", objectFit: "cover" }}
                  />
                  <p className="text-center text-muted-foreground mt-2">Scan to donate</p>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-[#43a047] text-white hover:text-white">
              Donate Now
            </Button>
          </CardFooter>
        </Card>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#4CAF50]">About Our Cause</h2>
          <p className="text-muted-foreground md:text-lg">
            We are a non-profit organization dedicated to providing essential services and support to those in need.
            Your donation will help us continue our important work and make a real difference in our community.
          </p>
        </div>
      </div>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
