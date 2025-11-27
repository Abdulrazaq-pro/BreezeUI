// import { DocsLayout } from 'fumadocs-ui/layouts/docs';
// import { baseOptions } from '@/lib/layout.shared';
// import { source } from '@/lib/source';

// export default function Layout({ children }: LayoutProps<'/docs'>) {
//   return (
//     <DocsLayout tree={source.pageTree} {...baseOptions()}>
//       {children}
//     </DocsLayout>
//   );
// }


import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
// import { CodePreview } from '@/components/code-preview'; // Add this import

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout   
      // components={{
      //   CodePreview, // Now this will work
      // }} 
      tree={source.pageTree} 
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}