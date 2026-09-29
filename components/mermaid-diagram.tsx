import { FunctionComponent, useEffect, useId, useState } from 'react';
import CodeBlock from './code-block';

const MermaidDiagram: FunctionComponent<{ chart: string }> = function ({
  chart
}) {
  const reactId = useId();
  const [svg, setSvg] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isCurrent = true;

    const renderDiagram = async () => {
      try {
        const { default: mermaid } = await import('mermaid');
        mermaid.initialize({ startOnLoad: false, securityLevel: 'strict' });

        const id = `mermaid-${reactId.replace(/[^a-zA-Z0-9-_]/g, '')}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);

        if (isCurrent) {
          setSvg(renderedSvg);
          setHasError(false);
        }
      } catch {
        if (isCurrent) {
          setHasError(true);
        }
      }
    };

    renderDiagram();

    return () => {
      isCurrent = false;
    };
  }, [chart, reactId]);

  if (hasError) {
    return <CodeBlock code={chart} language='text' />;
  }

  return (
    <div
      className='mermaid-diagram my-6 text-center overflow-auto'
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default MermaidDiagram;
