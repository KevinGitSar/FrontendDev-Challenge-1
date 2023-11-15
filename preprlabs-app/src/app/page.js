import { redirect } from 'next/navigation';
export default async function Home({ params }) {
    redirect('/explore');
  // ...
}
// import Image from 'next/image'

// export default function Home() {
//   return (
//     <div>
//       <p>Hello</p>
//     </div>
//   )
// }
