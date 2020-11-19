import Head from "next/head";


import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css"
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({postData:{title, date, contentHtml}}) {
    return (<Layout>
        <Head>
             <title>{title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{title}</h1>
            <div className={utilStyles.lightText}>
                 <Date dateString={date} />
            </div>
            <div dangerouslySetInnerHTML={{__html:contentHtml}} ></div>
        </article>
    </Layout>)
}

// TODO: LEARN MORE ABOUT getStaticPaths
export async function getStaticPaths() {
        const paths =  getAllPostIds();
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params:{id} }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(id)
    return {
        props:{
            postData
        }
    }
  }