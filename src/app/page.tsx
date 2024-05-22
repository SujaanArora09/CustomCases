import { Icons } from '@/components/Icons'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Phone from '@/components/Phone'
import { Reviews } from '@/components/Reviews'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight, Check, Star , Quote } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100'>
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-16 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                
              </div>
              <h1 className='relative w-fit tracking-tight text-balance font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                Create Your Own{' '}<br/>
                <span className='bg-customBlue px-2 text-white'>Custom<br/></span>{' '}
                Phone Case Today
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                Craft your own phone case effortlessly,{' '}
                whether it's a cherished memory, a beloved pet, someone special, or a piece of artwork, our high-quality cases have <span className='font-bold'>got you covered! </span>
              </p>

              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-orange-500' />
                    High-quality, durable material
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-orange-500' />5 year
                    print guarantee
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-orange-500' />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-1.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-2.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-3.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-4.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-5.jpg'
                    alt='user image'
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                  </div>

                  <p>
                    <span className='font-semibold'>25k+</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-5 lg:pt-8 h-fit'>
            <div className='relative md:max-w-xl'>
              <img
                src='/your-image.png'
                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
              />
              <img
                src='/phone-ring.svg'
                className='absolute scale-150 -bottom-3 select-none'
              />
              <img
                src='/phone-buttons.svg'
                className='absolute scale-102 top-36 select-none'
              />
              <Phone className='w-64' imgSrc='/testimonials/1.jpg' />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <div className='relative top-1.5 bg-customBlue' >
        <MaxWidthWrapper className='flex items-center flex-row h-36 text-white justify-between'>
      
          <div className='flex gap-3'>
          <h1 className='text-5xl font-semibold'>10+</h1>
          <h3 className='font-light'>Years of <br/> Experience</h3>
          </div>
      
          <div className='h-12 w-0.5 bg-slate-100 opacity-65'></div>

          <div className='flex gap-3'>
          <h1 className='text-5xl font-semibold'>25K+</h1>
          <h3 className='font-light'>Orders<br/> Delivered</h3>
          </div>
      
          <div className='h-12 w-0.5 bg-slate-100 opacity-65'></div>

          <div className='flex gap-3'>
          <h1 className='text-5xl font-semibold'>100+</h1>
          <h3 className='font-light'>New <br/> Designs</h3>
          </div>
      
          <div className='h-12 w-0.5 bg-slate-100 opacity-65'></div>

          <div className='flex gap-3'>
          <h1 className='text-5xl font-semibold'>4.8</h1>
          <h3 className='font-light'>Overall <br/> Raiting</h3>
          </div>
      
        
        </MaxWidthWrapper>
        </div>
      </section>
      <section className='bg-slate-100 grainy-dark py-52'>
        <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              See What Our{' '}
              <span className='relative px-2'>
                Customers{' '}
                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-orange-500' />
              </span>{' '}
              Think
            </h2>
            
          </div>

          <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-y-16  '>
            <div className='flex flex-auto flex-col gap-4 lg:pr-4 xl:pr-10 lg:pl-4 xl:pl-10 '>
              <div className='flex gap-0.5 mb-2'>
                    <Quote className='h-4 w-4 text-customBlue fill-customBlue rotate-180 font-normal' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "Absolutely love my new phone case! The print quality is amazing, and it feels super durable."
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='/users/user-1.png'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Jonathan</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-orange-500' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                  <div className='flex gap-0.5 mb-2 mt-2'>
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
              </div>
                </div>
              </div>
            </div>

            
            <div className='flex flex-auto flex-col gap-4 lg:pr-4 xl:pr-10 lg:pl-4 xl:pl-10'>
              <div className='flex gap-0.5 mb-2'>
                <Quote className='h-4 w-4 text-customBlue fill-customBlue rotate-180' />
                
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "Got`U`Covered exceeded my expectations. The customization process was so easy, and the final product looks fantastic"
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='/users/user-4.jpg'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Josh</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-orange-500' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                  <div className='flex gap-0.5 mb-2 mt-2'>
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
              </div>
                </div>
              </div>
            </div>
            <div className='flex flex-auto flex-col gap-4 lg:pr-4 xl:pr-10 lg:pl-4 xl:pl-10'>
              <div className='flex gap-0.5 mb-2'>
                <Quote className='h-4 w-4 text-customBlue fill-customBlue rotate-180' />
                
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "Fast shipping and great customer service. I couldn't be happier with my purchase!" 
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='/users/user-4.jpg'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Josh</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-orange-500' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                  <div className='flex gap-0.5 mb-2 mt-2'>
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
                    <Star className='h-4 w-4 text-orange-500 fill-orange-500' />
              </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className='py-36 '>
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                Turn your photo into{' '}
                <span className='relative px-2 bg-customBlue text-white'>
                  your own case
                </span>{' '}
                now
              </h2>
            </div>
          </div>

          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
              <img
                src='/arrow.png'
                className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'
              />

              <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                <img
                  src='/testimonials/2.jpg'
                  className=' rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'
                />
              </div>

              <Phone className='w-60 grainy-dark rounded-4xl' imgSrc='/testimonials/2.jpg' />
            </div>
          </div>

          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-orange-500 inline mr-1.5' />
              High-quality silicone material
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-orange-500 inline mr-1.5' />
              Scratch- and fingerprint resistant coating
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-orange-500 inline mr-1.5' />
              Wireless charging compatible
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-orange-500 inline mr-1.5' />5 year
              print warranty
            </li>

            <div className='flex justify-center'>
              <Link
                className={buttonVariants({
                  size: 'lg',
                  className: 'mx-auto mt-8',
                })}
                href='/configure/upload'>
                Create your case now <ArrowRight className='h-4 w-4 ml-1.5' />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
