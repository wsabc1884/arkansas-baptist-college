import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Use a placeholder projectId to prevent createClient from throwing at module load time.
// Fetches will fail gracefully and be caught by try/catch in calling code.
export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: true,
})
