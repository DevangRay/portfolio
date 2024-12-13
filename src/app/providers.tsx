// app/providers.tsx
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PHProvider({
  children,
}: {
  children: React.ReactNode
}) {
    useEffect(() => {
      console.log("running posthog.init")
      posthog.init(process.env.NEXT_POSTHOG_KEY!, {
        // https://posthog.com/docs/advanced/proxy/nextjs
        // setting up reverse proxy so doesnt get caught by tracking blockers
        api_host: process.env.NEXT_POSTHOG_HOST,
        // api_host: "/ingest",
        // ui_host: "https://us.posthog.com",
        person_profiles: 'identified_only',
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        capture_pageleave: true, // Enable pageleave capture
      })
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}