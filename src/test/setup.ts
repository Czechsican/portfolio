import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom doesn't implement scrolling; the layout scrolls to top on navigation.
window.scrollTo = vi.fn() as unknown as typeof window.scrollTo
