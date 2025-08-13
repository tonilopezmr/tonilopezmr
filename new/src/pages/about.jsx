import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-[#FEDE00]/90"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-[#FEDE00]/90" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Toni López</title>
        <meta
          name="description"
          content="I’m Toni López. I live in Valencia City, where I build the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              👋 I’m Toni López
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
              <p>
              Basketball was my first passion, I played at a semi-professional level while also becoming a pro Counter-Strike player. Around the same time, I discovered programming, and everything shifted.
              </p>
              <p> 
              A Dev conference in Madrid was a turning point: top-tier developers, all speaking English and using MacBooks. I sold everything to buy one and never looked back.
              </p>
              <p>
              Since then, I’ve spent over {new Date().getFullYear() - 2013} years building <Link href="/projects" className="text-teal-500 dark:text-[#FEDE00]/100">personal projects</Link>, working at different companies, and picking up whatever tech stack I needed from mobile, web, distributed systems,AI and beyond.
              </p>              
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/tonilopezmr" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>              
              <SocialLink href="https://github.com/tonilopezmr" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/tonilopezmr" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>              
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
