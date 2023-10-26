import { json, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Users from '~/components/Users'
import { prisma } from '~/lib/prisma'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix + Tailwind + Prisma' },
    { name: 'description', content: 'Launch Your Application' }
  ]
}

export async function loader() {
  const users = await prisma.user.findMany()
  return json(users)
}

export default function Index() {
  const userData = useLoaderData<typeof loader>()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-2xl font-semibold animate-pulse">Remix + Tailwind CSS + prisma!</p>
      <p className="text-2xl font-semibold text-gray-700">Launch Your Spaceship!</p>
      <div className="flex-col gap-5 mt-10">
        <p className='flex font-semibold text-lg underline justify-center font-sans'>Data Coming From Prisma</p>
        <Users users={userData} />
      </div>
    </div>
  )
}
