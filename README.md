
## Recommended
1. Latest node -v
2. Latest react -v

## Getting Started
1. Create a .env file and add: `NEXT_PUBLIC_WASTE_API = https://app.wewantwaste.co.uk/api`
2. Run the development server:

```bash
npm install
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Stack (Packages)
1. NextJs(Easy to setup, SSR, simple routing system)
2. Tailwind(Reusable, popular,modern, works with shadcn)
3. Shadcn (Modern React Components) [https://ui.shadcn.com](https://ui.shadcn.com)
4. Axios

## Layout
1. `app/layout.tsx` is mainly for providers and metadata
2. `app/(home)/layout.tsx` render children('Page') and dynamicly render sidebar or StatusTracker
3. `actions/api/we-want-waste-requests.ts` GET request with Waste type
4. `app/(home)/page.tsx` Fetch data from request and render `WasteList` component.

## UI
### Light
![image](https://github.com/user-attachments/assets/2de71d06-e4a0-4c1b-adef-a047c86e8389)
![image](https://github.com/user-attachments/assets/ef116b8d-0b43-4e8e-81c6-7117ba256867)

### Dark
![image](https://github.com/user-attachments/assets/42133b22-495f-410a-8e05-dc8ca0182dbc)
![image](https://github.com/user-attachments/assets/30ab10bc-7814-4782-ac1b-7ae528684fdf)

### gif
![waste_example](https://github.com/user-attachments/assets/c5ef12a2-9276-43fa-a839-df04dce09e0e)




