"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Http2ServerResponse } from "http2"

// Reusable Spinner Component
function Spinner({
  size = "default",
  variant = "default",
}: {
  size?: "sm" | "default" | "lg"
  variant?: "default" | "dots" | "pulse"
}) {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-6 w-6",
    lg: "h-8 w-8",
  }

  return <Loader2 className={`${sizeClasses[size]} animate-spin`} />
}


export default function Component(props: { response: Http2ServerResponse }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingError, setIsLoadingError] = useState(false)
  const [result, setResult] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleApiCall = async () => {
    setIsLoading(true)
    setResult("")
    setError("")

    try {
      // const response = await mockApiCall()
      setResult((props.response as any).data)
    } catch (err) {
      setError("Something went wrong!")
    } finally {
      setIsLoading(false)
    }
  }

  const handleApiCallWithError = async () => {
    setIsLoadingError(true)
    setResult("")
    setError("")

    try {
      props.response;
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setIsLoadingError(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>API Request Spinner Demo</CardTitle>
          <CardDescription>Click the buttons below to see different spinner styles during API requests</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Basic API Call with Default Spinner */}
          <div className="space-y-2">
            <Button onClick={handleApiCall} disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Spinner size="sm" />
                  <span className="ml-2">Loading...</span>
                </>
              ) : (
                "Make API Request (Success)"
              )}
            </Button>
          </div>

          {/* API Call with Error */}
          <div className="space-y-2">
            <Button onClick={handleApiCallWithError} disabled={isLoadingError} variant="destructive" className="w-full">
              {isLoadingError ? (
                <>
                  <Spinner size="sm" />
                  <span className="ml-2">Loading...</span>
                </>
              ) : (
                "Make API Request (Error)"
              )}
            </Button>
          </div>

          {/* Results */}
          {result && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800">{result}</p>
            </div>
          )}

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800">{error}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Spinner Variants Demo */}
      <Card>
        {/* <CardHeader>
          <CardTitle>Spinner Variants</CardTitle>
          <CardDescription>Different spinner styles you can use</CardDescription>
        </CardHeader> */}
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <h4 className="font-medium">Default</h4>
              <div className="flex justify-center">
                <Spinner />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Full Page Loading Example */}
      <Card>
        <CardHeader>
          <CardTitle>Full Page Loading</CardTitle>
          <CardDescription>Example of a full page loading state</CardDescription>
        </CardHeader>
        <CardContent>
          {(isLoading || isLoadingError) && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Spinner size="lg" />
                <p className="mt-2 text-gray-600">Processing your request...</p>
              </div>
            </div>
          )}

          <p className="text-sm text-gray-600">The buttons above will show a full-page loading overlay when clicked.</p>
        </CardContent>
      </Card>
    </div>
  )
}
