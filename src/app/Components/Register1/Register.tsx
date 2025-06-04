import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterComponent() {
  const router = useRouter()

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium text-center text-orange-500">Register</DialogTitle>
            <DialogDescription>
              Create a new account
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="register-email">Email</Label>
              <Input id="register-email" name="email" defaultValue="john@gmail.com" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="register-password">Password</Label>
              <Input id="register-password" name="password" defaultValue="John@12345" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
          <div className="text-sm font-medium text-gray-500 text-center">
          {"Don't have an account?"}
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 ml-1"
            onClick={() => router.push(`../${'Components/SignIn/Login'}`)}
          >
            Create account
          </a>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}
