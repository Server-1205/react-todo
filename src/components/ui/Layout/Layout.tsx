import { FC, Suspense } from "react";
import { Outlet } from "react-router";
import { Footer } from "../../Footer/Footer.tsx";
import { Header } from "../../Header/Header";
import { Container } from "../Container/Container";
import { Loader } from "../Loader/Loader";

export const Layout: FC = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <main className="py-5 flex-grow">
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
