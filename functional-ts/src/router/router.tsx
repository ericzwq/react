import {createBrowserRouter, redirect} from "react-router-dom";
import Layout from "@/layout/layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Layout/>),
    loader({request}) {
      const url = new URL(request.url)
      if (url.pathname === '/') return redirect('/home')
      return null
    },
    children: [
      {
        path: 'home', lazy: async () => ({Component: (await import('@/views/home/home')).default}), children: [
          {path: 'card/:id', lazy: async () => ({Component: (await import('@/views/card/card')).default})}
        ]
      },
      {
        path: 'about', lazy: async () => ({Component: (await import('@/views/about/about')).default}), children: [
          {path: 'about1', element: (<div>about1</div>)},
          {path: 'about2', element: (<div>about2</div>)},
        ]
      },
    ]
  },
  {
    path: '/login', lazy: async () => ({Component: (await import('@/views/login/login')).default})
  },
  {
    path: '/effect-test', lazy: async () => ({Component: (await import('@/views/effect-test/effect-test')).default})
  },
  {
    path: '/ref-test', lazy: async () => ({Component: (await import('@/views/ref-test/ref-test')).default})
  },
  {
    path: '/context-test', lazy: async () => ({Component: (await import('@/views/context-test/context-test')).default})
  },
  {path: '*', lazy: async () => ({Component: (await import('@/views/notFound/notFound')).default})}
])

export default router