## ✅ Recommended

1. Latest **Node.js** version (`node -v`)
2. Latest **React** version (`react -v`)

---

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/RCvetinskis/wewantwaste.git
   cd wewantwaste

2. Create a .env file in the root directory and add the following:
`NEXT_PUBLIC_WASTE_API=https://app.wewantwaste.co.uk/api
`
3. Install dependencies and run the development server:
`npm install --force
npm run dev`

4. Open http://localhost:3000 in your browser to view the app.



## Stack (Packages)
1. NextJs(Easy to setup, SSR, simple routing system)
2. Tailwind(Reusable, popular,modern, works with shadcn)
3. Shadcn (Modern React Components) [https://ui.shadcn.com](https://ui.shadcn.com)
4. Axios

## Layout
1. `app/layout.tsx` Defines global layout including metadata and providers.
2. `app/(home)/layout.tsx` Renders child pages and conditionally includes the sidebar or StatusTracker.
3. `actions/api/we-want-waste-requests.ts` Contains GET requests to fetch data.
4. `app/(home)/page.tsx` Fetches data using the above action and renders the WasteList component.

## UI
### Light
![image](https://github.com/user-attachments/assets/5c84a45f-5d34-4487-9e12-3a90e2dfb67b)
![image](https://github.com/user-attachments/assets/5ce51b0b-348e-4966-bb2d-a164dd369b91)


### Dark
![image](https://github.com/user-attachments/assets/975eb848-b660-417a-a2a8-c154c5d68d04)
![image](https://github.com/user-attachments/assets/9f4722a1-08f4-41f8-86c5-4f4b1eb71eb7)


### gif
![waste_ex](https://github.com/user-attachments/assets/32712efd-4098-498f-a3b5-200b6d1181bd)





