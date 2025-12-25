// export const BASE_URL = "https://e-commerce-system-psi.vercel.app/api";
// export const BASE_URL = "http://localhost:5000/api";
// http://localhost:5173


export const BASE_URL = import.meta.env.MODE === 'production'
    ? 'https://your-backend-url.vercel.app/api'  
    : 'http://localhost:5000/api';