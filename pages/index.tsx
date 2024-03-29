import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className='title'>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href='/about'>about</Link>
      </h1>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/index.jsx</code>
      </p>
    </MainLayout>
  )
}
