import { Layout } from "@/components/layout";
import { useTransitionRouterPush } from "@/hooks/useTransitionRouterPush";
import "@/styles/globals.css";
import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { routerPushWithTransition } = useTransitionRouterPush();
  const router = useRouter();

  useEffect(() => {
    router.beforePopState(({ as }) => {
      routerPushWithTransition(as);
      return false;
    });
  }, [router, routerPushWithTransition]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
