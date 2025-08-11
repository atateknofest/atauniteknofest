-- Create tables for team applications and survey responses

-- Enable pgcrypto for gen_random_uuid if not already enabled
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Team applications table
CREATE TABLE IF NOT EXISTS public.team_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  department TEXT NOT NULL,
  grade TEXT,
  experience TEXT,
  motivation TEXT NOT NULL
);

ALTER TABLE public.team_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to insert applications; no select/update/delete by default
CREATE POLICY "Anyone can insert team applications"
ON public.team_applications
FOR INSERT
TO anon
WITH CHECK (true);

-- Survey responses table
CREATE TABLE IF NOT EXISTS public.survey_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  department TEXT,
  grade TEXT,
  interests TEXT[],
  interest_other TEXT,
  satisfaction INT NOT NULL,
  improvement TEXT,
  recommendation INT,
  comments TEXT
);

ALTER TABLE public.survey_responses ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to insert survey responses; no select/update/delete by default
CREATE POLICY "Anyone can insert survey responses"
ON public.survey_responses
FOR INSERT
TO anon
WITH CHECK (true);

-- Realtime optional: enable full replica identity and publication
ALTER TABLE public.team_applications REPLICA IDENTITY FULL;
ALTER TABLE public.survey_responses REPLICA IDENTITY FULL;

-- Add to realtime publication
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'team_applications'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.team_applications;
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'survey_responses'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.survey_responses;
  END IF;
END $$;