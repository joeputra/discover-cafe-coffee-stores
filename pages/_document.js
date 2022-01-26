import Document,{Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render (){
        return ( 
            <Html lang="en">
                <Head>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=optional" 
                        rel="stylesheet">
                    </link>
                    {/* <link 
                        rel="preload" 
                        href="/fonts/IBMPlexSans-Regular.ttf" 
                        as="font" 
                        crossOrigin="anonymous">
                    </link>
                    <link 
                        rel="preload" 
                        href="/fonts/IBMPlexSans-SemiBold.ttf" 
                        as="font" 
                        crossOrigin="anonymous">
                    </link> */}
                </Head>
                <body>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html> 
             )   
    }
}

export default MyDocument