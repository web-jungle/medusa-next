"use client"

import { MDXRemote } from "next-mdx-remote-client"
import { MDXComponents } from "./MDXComponents"

interface MDXContentProps {
  source: any
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-zinc max-w-none">
      <MDXRemote {...source} components={MDXComponents} />
    </div>
  )
}
