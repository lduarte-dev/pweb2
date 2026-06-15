export const metadata = {
  title: "Formulário de Endereço",
  description: "Preenchimento automático via CEP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
