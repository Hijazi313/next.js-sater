import Head from 'next/head'
import Link from "next/link"

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData, jsonPlaceHolderPosts } from "../lib/posts"
import Date from '../components/date';

export async function getStaticProps (){
  const allPostsData = getSortedPostsData();
  const placeHolderData = await jsonPlaceHolderPosts();
  return {
    props:{
      allPostsData,
    }
  }
}

export default function Home({allPostsData,}) {
  return (<Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd} >
            <p>Muhammad Hamza Asif, Full Stack JavaScript Developer</p>
            
          </section>
          <section className={`${utilStyles.headingMd} && ${utilStyles.padding1px} `} >
          <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`} >
                    <a>{title} </a>
                  </Link>
                    <br />
                    <small className={utilStyles.lightText} >
                        <Date dateString={date} />
                    </small>
                </li>
              ))}
            </ul>
          </section>
            
      </Layout>  )
}
