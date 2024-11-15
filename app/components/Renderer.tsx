'use client'

import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';
import dynamic from 'next/dynamic'
import Image from 'next/image';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';
import Button from './Button';
import { useRouter } from 'next/navigation';

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);
interface RendererProps {
    recordMap: ExtendedRecordMap;
    rootPageId: string;
}


const components = {
  nextImage: Image,
  nextLink: Link,
  Collection,
  Equation,
  Code,
}

const CustomFooter = ({ handleClick }: {handleClick: () => void}) => {
  return (
    <div className='fixed bottom-5 right-5'>
      <Button onClick={(handleClick)}>
          뒤로가기
      </Button>
    </div>
  )
}

export default function Renderer ({ recordMap, rootPageId }: RendererProps) {
    const router = useRouter();

    return (
        <div className="notion__container">
          <NotionRenderer
            recordMap={recordMap}
            fullPage={true}
            previewImages={!!recordMap.preview_images}
            rootPageId={rootPageId}
            showTableOfContents
            components={components}
            rootDomain={"project/"}
            mapPageUrl={(pageId) => `${pageId}`}
            disableHeader
            footer={<CustomFooter handleClick={() => router.push('/#projects')} />}
            // header={<>header</>}
            // showCollectionViewDropdown
            // pageCover={<>cover</>}
            // pageAside={<>aside</>}
            // pageTitle={<>title</>}
            // pageFooter={<>footer</>}
          />
        </div>
      );
}