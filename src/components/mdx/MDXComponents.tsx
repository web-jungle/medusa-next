import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"

// Composant Info personnalisé pour mettre en évidence des informations importantes
const Info = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-zen-lightGreen border-l-4 border-zen-darkGreen p-4 my-4 rounded-r">
      <div className="flex items-start">
        <div className="text-zen-darkGreen font-medium">{children}</div>
      </div>
    </div>
  )
}

// Composant d'alerte pour les informations critiques
const Alert = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r">
      <div className="flex items-start">
        <div className="text-red-700 font-medium">{children}</div>
      </div>
    </div>
  )
}

// Composant pour les citations
const BlockQuote = ({ children }: { children: React.ReactNode }) => {
  return (
    <blockquote className="pl-4 border-l-4 border-zen-green italic my-6 text-zinc-600">
      {children}
    </blockquote>
  )
}

// Composant pour les images optimisées avec Next.js
const CustomImage = ({
  src,
  alt,
  width = 800,
  height = 500,
}: {
  src: string
  alt: string
  width?: number
  height?: number
}) => {
  return (
    <div className="my-6 overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
      {alt && <p className="text-sm text-center mt-2 text-zinc-500">{alt}</p>}
    </div>
  )
}

// Composant pour les tableaux
const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-zen-lightGreen">
        {children}
      </table>
    </div>
  )
}

const TableHead = ({ children }: { children: React.ReactNode }) => {
  return <thead className="bg-zen-lightGreen">{children}</thead>
}

const TableRow = ({ children }: { children: React.ReactNode }) => {
  return <tr className="border-b border-zen-lightGreen">{children}</tr>
}

const TableData = ({ children }: { children: React.ReactNode }) => {
  return <td className="p-3">{children}</td>
}

const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return <th className="p-3 text-left font-medium">{children}</th>
}

// Exporter tous les composants MDX personnalisés
export const MDXComponents = {
  h1: (props: any) => (
    <Heading
      level="h1"
      className="text-3xl text-zen-darkGreen font-bold mt-10 mb-4"
      {...props}
    />
  ),
  h2: (props: any) => (
    <Heading
      level="h2"
      className="text-2xl text-zen-darkGreen font-semibold mt-8 mb-3"
      {...props}
    />
  ),
  h3: (props: any) => (
    <Heading
      level="h3"
      className="text-xl text-zen-darkGreen font-medium mt-6 mb-3"
      {...props}
    />
  ),
  h4: (props: any) => (
    <Heading
      level="h4"
      className="text-lg text-zen-darkGreen font-medium mt-6 mb-2"
      {...props}
    />
  ),
  p: (props: any) => <Text className="mb-4 leading-relaxed" {...props} />,
  a: (props: any) => (
    <a
      className="text-zen-green hover:text-zen-darkGreen underline"
      {...props}
    />
  ),
  ul: (props: any) => <ul className="list-disc pl-8 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-8 mb-4" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  blockquote: BlockQuote,
  img: CustomImage,
  Image: CustomImage,
  Info: Info,
  Alert: Alert,
  table: Table,
  thead: TableHead,
  tr: TableRow,
  td: TableData,
  th: TableHeader,
  // Vous pouvez ajouter d'autres composants personnalisés selon vos besoins
}
