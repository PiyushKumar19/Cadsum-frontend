import { useState } from "react"
import Cookies from 'js-cookie';
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
import { Loader2 } from "lucide-react"

interface AuthDialogProps {
  triggerText?: string
  initialMode?: 'login' | 'register'
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function AuthDialog({ 
    triggerText = "Open Dialog", 
    initialMode = 'login',
    open,
    onOpenChange 
  }: AuthDialogProps) {
    const base_url = process.env.NEXT_PUBLIC_API_URL;
    const [loginUserRequest, setLoginUserRequest] = useState({
      email: '',
      password: '',
    });
    const [registerUserRequest, setRegisterUserRequest] = useState({
      name: '',
      email: '',
      password: '',
    });

    const [mode, setMode] = useState<'login' | 'register'>(initialMode)
    const [internalOpen, setInternalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Use external open state if provided, otherwise use internal state
    const isOpen = open !== undefined ? open : internalOpen
    const handleOpenChange = onOpenChange || setInternalOpen

    const toggleMode = () => {
      setMode(mode === 'login' ? 'register' : 'login')
      setError(null) // Clear error when switching modes
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`${base_url}/auth/${mode}-user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: mode === 'login' ? JSON.stringify(loginUserRequest) : JSON.stringify(registerUserRequest),
        });

        if (response.ok) {
          const result = await response.json();

          // Set auth token
          Cookies.set('authToken', result.token, {
            expires: 30, // Cookie will expire in 30 days
            path: '/',
            secure: true,
            sameSite: 'Lax',
          });

          console.log('Authentication successful:', result);
          
          // Close the dialog on success
          handleOpenChange(false);
          
          // Reset form data
          setLoginUserRequest({ email: '', password: '' });
          setRegisterUserRequest({ name: '', email: '', password: '' });
          
          // Optionally reload the page to update the navbar state
          window.location.reload();
          
        } else {
          const errorData = await response.json();
          setError(errorData.message || `${mode === 'login' ? 'Login' : 'Registration'} failed. Please try again.`);
          console.error('Authentication failed:', response.statusText);
        }
      } catch (error) {
        setError('Network error. Please check your connection and try again.');
        console.error('Error during authentication:', error);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        {!open && ( // Only show trigger if not controlled externally
          <DialogTrigger asChild>
            <Button variant="outline">{triggerText}</Button>
          </DialogTrigger>
        )}
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle className="text-xl font-medium text-center text-orange-500">
                {mode === 'login' ? 'Login' : 'Register'}
              </DialogTitle>
              <DialogDescription className="text-center text-gray-600">
                {mode === 'login' ? 'Login to your account' : 'Create a new account'}
              </DialogDescription>
            </DialogHeader>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4">
                {error}
              </div>
            )}

            <div className="grid gap-4">
              {mode === 'login' ? (
                <>
                  <div className="grid gap-3">
                    <Label htmlFor="login-email">Email</Label>
                    <Input 
                      id="login-email" 
                      name="email" 
                      type="email"
                      placeholder="Enter your email"
                      value={loginUserRequest.email}
                      required
                      disabled={isLoading}
                      onChange={(e) => setLoginUserRequest({ ...loginUserRequest, email: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="login-password">Password</Label>
                    <Input 
                      id="login-password" 
                      name="password" 
                      type="password"
                      placeholder="Enter your password"
                      value={loginUserRequest.password}
                      required
                      disabled={isLoading}
                      onChange={(e) => setLoginUserRequest({ ...loginUserRequest, password: e.target.value })}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="grid gap-3">
                    <Label htmlFor="register-name">Full Name</Label>
                    <Input 
                      id="register-name" 
                      name="name" 
                      placeholder="Enter your full name"
                      value={registerUserRequest.name}
                      required
                      disabled={isLoading}
                      onChange={(e) => setRegisterUserRequest({ ...registerUserRequest, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="register-email">Email</Label>
                    <Input 
                      id="register-email" 
                      name="email" 
                      type="email"
                      placeholder="Enter your email"
                      value={registerUserRequest.email}
                      required
                      disabled={isLoading}
                      onChange={(e) => setRegisterUserRequest({ ...registerUserRequest, email: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="register-password">Password</Label>
                    <Input 
                      id="register-password" 
                      name="password" 
                      type="password"
                      placeholder="Create a password"
                      required
                      disabled={isLoading}
                      onChange={(e) => setRegisterUserRequest({ ...registerUserRequest, password: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="register-confirm-password">Confirm Password</Label>
                    <Input 
                      id="register-confirm-password" 
                      name="confirmPassword" 
                      type="password"
                      placeholder="Confirm your password"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </>
              )}
            </div>
            
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="outline" disabled={isLoading}>Cancel</Button>
              </DialogClose>
              <Button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {mode === 'login' ? 'Logging in...' : 'Creating Account...'}
                  </>
                ) : (
                  mode === 'login' ? 'Login' : 'Create Account'
                )}
              </Button>
            </DialogFooter>
            
            <div className="text-sm font-medium text-gray-500 text-center mt-4">
              {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                className="text-orange-500 hover:text-orange-600 ml-1 underline"
                onClick={toggleMode}
                disabled={isLoading}
              >
                {mode === 'login' ? 'Create account' : 'Login'}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    )
  }
  
export default AuthDialog