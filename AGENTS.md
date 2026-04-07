<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
 Language: All source code, including variables, functions, and comments, must be written in English.
 Naming Conventions:  Use `camelCase` for methods, functions, and variables.
     Use `PascalCase` for classes and interfaces.
     Use `kebab-case` for files and directories (e.g., `hero-section.tsx`, `use-auth.ts`).
 Length & Abbreviations: Avoid abbreviations. Keep names descriptive but concise (avoid names exceeding 30 characters).
 Magic Numbers: Declare clearly named constants to represent any magic numbers or strings.
 Verbs for Actions: Methods and functions must perform a clear, single action. Their names must always start with a verb (e.g., `getUser`, `calculateTotal`), never a noun.
 Parameters: Avoid passing more than 3 parameters to a function. If more are needed, encapsulate them within an object.
 CQRS / Side Effects: A function should either be a command (perform a mutation/action) or a query (return data), never both. Queries must never have side effects.
 Early Returns: Never nest more than two `if/else` blocks. Always prefer early returns (guard clauses) to keep the happy path at the top level.
 No Flag Parameters: Never use boolean flag parameters to toggle behavior inside a function. Instead, extract them into separate, specific functions.
 Length Limits:  Methods/functions must not exceed 50 lines.
     Classes and files must not exceed 300 lines.
 Dependency Inversion: Always invert dependencies for external resources in Use Cases and Interface Adapters following the Dependency Inversion Principle (DIP).
 Formatting: Avoid blank lines inside methods and functions. Keep the logic compact and readable.
 Self-Documenting Code: Avoid comments whenever possible. The code itself should be readable and clear enough to explain what it does.
 Variables:  Never declare more than one variable on the same line.
     Declare variables as close as possible to their first usage.
 Architecture: Always prefer composition over inheritance.

React & Next.js Specific Guidelines
 Component Paradigm: Strictly use Functional Components. Never use Class Components.
 TypeScript: Always use TypeScript. UI components must use the `.tsx` extension.
 State Management: Keep component state as local and close to where it is used as possible.
 Explicit Props: Pass properties explicitly to components. Avoid using the spread operator for props (e.g., avoid `<ComponentName {...props} />`).
 Component Size: UI Components must not exceed 300 lines of code.
 Global State: Use the React Context API when communication between deeply nested child components is necessary.
 Styling (Project Specific Adaptation): Use Chakra UI (via props and the `sx` object) for all component styling. Tailwind CSS and styled-components are strictly prohibited in this project.
 Component Granularity: Avoid creating an excessive amount of overly small, useless micro-components. Group logically.
 Client Data Fetching: Use React Query (`@tanstack/react-query`) for client-side API communication and caching.
 Performance: Use the `useMemo` and `useCallback` hooks strategically to avoid expensive recalculations and unnecessary re-renders.
 Custom Hooks: Always prefix custom hooks with the word "use" (e.g., `useAuth`, `useLocalStorage`, `useUrl`).
 Reusability Check: Before building a complex new component from scratch, always stop and ask if there is an existing library or Chakra UI built-in component that handles it.
 Testing: Create automated tests for all components.
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
