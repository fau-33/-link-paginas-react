import Topo from "@/componentes/Topo";
import "./globals.css";

export const metadata = {
  title: "Curso rotas - Exemplo de navegação no React",
  description: "Exemplo de navegação no React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
