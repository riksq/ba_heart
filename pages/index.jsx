import Head from "next/head";
import styles from "../styles/Home.module.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home(props) {
    const router = useRouter();
    const { query } = router;
    const gtm = query.gtm;
    const bluecss = {
        margin: 10,
        border: "0px",
        color: "White",
        backgroundColor: "red",
        width: "70%",
        height: "40px",
    };
    const redcss = {
        margin: 10,
        border: "0px",
        color: "black",
        backgroundColor: "skyblue",
        width: "70%",
        height: "40px",
    };

    const redirect = async (some) => {
        if (some) {
            const fetchResp = await fetch("/api/hello");
            const fJson = await fetchResp.json();
            if (fJson.ok) {
                window.location.href = fJson.url;
            } else {
                alert("Try again");
            }
        } else {
            alert("Try again");
        }
    };

    useEffect(() => {
       // alert(gtm);
        // TagManager.initialize({ gtmId: "GTM-PTZV39P" });
        // TagManager.initialize({ gtmId: "GTM-59WP5XJ" });
       TagManager.initialize({ gtmId: "GTM-TZ9R22F" });
       // if (gtm) {
          //  TagManager.initialize({ gtmId: gtm });
       // }
    }, [gtm]);
    return (
        <div className={styles.container}>
            <Head>
                <title>Odgovori na pitanje</title>
                <meta name="description" content="Odgovori na pitanje" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div>
                    <h2>
                        Imate problema sa krvnim pritiskom
                    </h2>
                </div>
                <div>
                    <h3>Odgovorite sa DA ili NE</h3>
                 
                    <div>
                        <button
                            onClick={() => {
                                redirect(true);
                            }}
                            style={bluecss}
                        >
                            DA
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                redirect(true);
                            }}
                            style={redcss}
                        >
                            NE
                        </button>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>Sva prava zadržana</footer>
        </div>
    );
}
