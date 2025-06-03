"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Check, FileText, Upload, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function CVUploadPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [parsingProgress, setParsingProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      validateAndSetFile(droppedFile)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0])
    }
  }

  const validateAndSetFile = (file: File) => {
    // Reset error state
    setError(null)

    // Check file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a PDF or Word document")
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size should not exceed 5MB")
      return
    }

    setFile(file)
  }

  const removeFile = () => {
    setFile(null)
    setError(null)
  }

  const uploadFile = () => {
    if (!file) return

    setIsUploading(true)
    setUploadProgress(0)
    setParsingProgress(0)

    // Simulate file upload progress
    const uploadInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval)
          simulateParsing()
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const simulateParsing = () => {
    // Simulate AI parsing progress
    const parsingInterval = setInterval(() => {
      setParsingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(parsingInterval)
          setTimeout(() => {
            setIsUploading(false)
            router.push("/profile-builder")
          }, 500)
          return 100
        }
        return prev + 5
      })
    }, 200)
  }

  return (
    <div className="wrapper max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="heading-lg mb-2">Upload your CV</h1>
        <p className="text-muted-foreground">
          Upload your CV or resume to get started. Our AI will parse it and create your profile.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>CV Upload</CardTitle>
          <CardDescription>Drag and drop your CV or click to browse</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription className="flex items-center">
                <X className="h-4 w-4 mr-2" /> {error}
              </AlertDescription>
            </Alert>
          )}

          {isUploading ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>

              {uploadProgress === 100 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center">
                      <Loader2 className="h-3 w-3 mr-2 animate-spin" />
                      AI Processing...
                    </span>
                    <span>{parsingProgress}%</span>
                  </div>
                  <Progress value={parsingProgress} className="h-2" />
                </div>
              )}
            </div>
          ) : (
            <>
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                  isDragging ? "drag-active" : ""
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                {file ? (
                  <div className="flex flex-col items-center">
                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <FileText className="size-8 text-primary" />
                    </div>
                    <p className="font-medium mb-1">{file.name}</p>
                    <p className="text-sm text-muted-foreground mb-4">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeFile()
                      }}
                    >
                      Select a different file
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Upload className="size-8 text-primary" />
                    </div>
                    <p className="font-medium mb-1">Drop your CV here or click to browse</p>
                    <p className="text-sm text-muted-foreground">Supports PDF, DOCX (max 5MB)</p>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="hidden"
                />
              </div>
            </>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={uploadFile} disabled={!file || isUploading} className="w-full gap-2">
            {isUploading ? (
              <>
                Processing
                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      {/* Steps indicator */}
      <div className="mt-8 flex justify-between">
        <div className="flex items-center">
          <div className="rounded-full size-8 bg-primary text-primary-foreground flex items-center justify-center">
            <Check className="size-4" />
          </div>
          <span className="ml-2 text-sm font-medium">Upload CV</span>
        </div>
        <div className="flex-1 mx-4 border-t border-dashed my-4"></div>
        <div className="flex items-center">
          <div className="rounded-full size-8 border border-muted bg-muted text-muted-foreground flex items-center justify-center">
            <span className="text-xs font-medium">2</span>
          </div>
          <span className="ml-2 text-sm text-muted-foreground">Build Profile</span>
        </div>
        <div className="flex-1 mx-4 border-t border-dashed my-4"></div>
        <div className="flex items-center">
          <div className="rounded-full size-8 border border-muted bg-muted text-muted-foreground flex items-center justify-center">
            <span className="text-xs font-medium">3</span>
          </div>
          <span className="ml-2 text-sm text-muted-foreground">Complete Setup</span>
        </div>
      </div>
    </div>
  )
}
