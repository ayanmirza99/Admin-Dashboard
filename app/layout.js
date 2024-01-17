import "./globals.css";
import { Providers } from "./providers";
import Menubar from "./components/Menubar";
import Topbar from "./components/Topbar";
import { GlobalContextProvider } from "./Context"; // Adjust the import path accordingly

export const metadata = {
  title: "Admin",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning = {true}>
      <body>
        <Providers>
          <GlobalContextProvider>
            <main className="flex">
              <Menubar />
              <div className="flex flex-col w-full">
                <Topbar />
                {children}
              </div>
            </main>
          </GlobalContextProvider>
        </Providers>
      </body>
    </html>
  );
}
