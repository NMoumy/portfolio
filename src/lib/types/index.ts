// This file contains type definitions for the project.

// For the About component, we define a type TabKey that represents the keys of the aboutData object. This allows us to use TypeScript's type checking to ensure that we only use valid keys when setting the activeTab state.
export type TabKey = 'about' | 'skills' | 'education' | 'experience';

export type TabKeyService = 'services' | 'process';

